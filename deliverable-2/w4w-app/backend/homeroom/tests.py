import json

from homeroom.models import homeroom, HomeroomManager
from homeroom.serializers import HomeroomSerializer
from django.contrib.auth.models import User
from django.test import TestCase
from django.urls import reverse
from rest_framework import status
from rest_framework.authtoken.models import Token
from rest_framework.test import APITestCase
from django.contrib.auth import get_user_model
User = get_user_model()

# Create your tests here.
class CreateRoomViewTestCase(APITestCase):
    # example of a success test that fails
    # def test_homeroom_creation(self):
    #     # register a teacher
    #     data = {"email": "testemail@rocketmail.com", "password": "testpass", 
    #             "password2": "testpass", "first_name": "Central", "last_name": "Cee", 
    #             "city": "Toronto", "country": "Canada", "type": "teacher", "age": "21",
    #             "school": "Toronto High School"}
    #     response = self.client.post('/accounts/register-teacher/', data)
    #     self.assertEqual(response.status_code, 200)

    #     # assert teacher is created
    #     user = User.objects.get(email="testemail@rocketmail.com")
    #     self.assertEqual(user.get_type(), "teacher")

    #     # login teacher
    #     new_user = {"email": "testemail@rocketmail.com", "password": "testpass", 
    #             "password2": "testpass", "first_name": "Central", "last_name": "Cee", 
    #             "city": "Toronto", "country": "Canada", "type": "teacher", "age": "21"}
    #     self.client.post('/accounts/register-teacher/', new_user)
    #     data = {"email": "testemail@rocketmail.com", "password": "testpass"}
    #     response = self.client.post('/accounts/login/', data)
    #     self.assertEqual(response.status_code, 200)

    #     # create a homeroom
    #     data = {"homeroom_id": "30002000", "teacher_id": "testemail@rocketmail.com"}
    #     response = self.client.post('/homeroom/create-room/', data)
    #     self.assertEqual(response.status_code, 200)

    def test_student_homeroom_creation(self):
        # student cannot create a homeroom
        # register a student
        data = {"email": "testemail@rocketmail.com", "password": "testpass", 
                "password2": "testpass", "first_name": "Central", "last_name": "Cee", 
                "city": "Toronto", "country": "Canada", "type": "student", "age": "21",
                "grade": "12", "school": "Toronto High School"}
        response = self.client.post('/accounts/register-student/', data)
        self.assertEqual(response.status_code, 200)

        # assert student is created
        user = User.objects.get(email="testemail@rocketmail.com")
        self.assertEqual(user.get_type(), "student")

        # login student
        new_user = {"email": "testemail@rocketmail.com", "password": "testpass", 
                "password2": "testpass", "first_name": "Central", "last_name": "Cee", 
                "city": "Toronto", "country": "Canada", "type": "student", "age": "21"}
        self.client.post('/accounts/register-student/', new_user)
        data = {"email": "testemail@rocketmail.com", "password": "testpass"}
        response = self.client.post('/accounts/login/', data)
        self.assertEqual(response.status_code, 200)

        # register a homeroom
        data = {"homeroom_id": "30002000", "teacher_id": "testemail@rocketmail.com"}
        response = self.client.post('/homeroom/create-room/', data)
        self.assertEqual(response.status_code, 401)

    def test_no_login_homeroom_creation(self):
        # register a homeroom without logging in
        data = {"homeroom_id": "30002000", "teacher_id": "testemail@rocketmail.com"}
        response = self.client.post('/homeroom/create-room/', data)
        self.assertEqual(response.status_code, 401)

class JoinRoomViewTestCase(APITestCase):
    # tip: to test a successful join room, create a homeroom first
    def test_teacher_homeroom_join_homeroom_id_not_given(self):
        # register a teacher
        data = {"email": "testemail@rocketmail.com", "password": "testpass", 
                "password2": "testpass", "first_name": "Central", "last_name": "Cee", 
                "city": "Toronto", "country": "Canada", "type": "teacher", "age": "21",
                "school": "Toronto High School"}
        response = self.client.post('/accounts/register-teacher/', data)
        self.assertEqual(response.status_code, 200)

        # assert teacher is created
        user = User.objects.get(email="testemail@rocketmail.com")
        self.assertEqual(user.get_type(), "teacher")

        # login teacher
        new_user = {"email": "testemail@rocketmail.com", "password": "testpass", 
                "password2": "testpass", "first_name": "Central", "last_name": "Cee", 
                "city": "Toronto", "country": "Canada", "type": "teacher", "age": "21"}
        self.client.post('/accounts/register-teacher/', new_user)
        data = {"email": "testemail@rocketmail.com", "password": "testpass"}
        response = self.client.post('/accounts/login/', data)
        self.assertEqual(response.status_code, 200)

        # join a home room without homeroom_id given
        data = {'homeroom_id': ''}
        response = self.client.post('/homeroom/join-room/', data)
        self.assertEqual(response.status_code, 401)
    
    def test_teacher_homeroom_join_homeroom_id_false(self):
        # register a teacher
        data = {"email": "testemail@rocketmail.com", "password": "testpass", 
                "password2": "testpass", "first_name": "Central", "last_name": "Cee", 
                "city": "Toronto", "country": "Canada", "type": "teacher", "age": "21",
                "school": "Toronto High School"}
        response = self.client.post('/accounts/register-teacher/', data)
        self.assertEqual(response.status_code, 200)

        # assert teacher is created
        user = User.objects.get(email="testemail@rocketmail.com")
        self.assertEqual(user.get_type(), "teacher")

        # login teacher
        new_user = {"email": "testemail@rocketmail.com", "password": "testpass", 
                "password2": "testpass", "first_name": "Central", "last_name": "Cee", 
                "city": "Toronto", "country": "Canada", "type": "teacher", "age": "21"}
        self.client.post('/accounts/register-teacher/', new_user)
        data = {"email": "testemail@rocketmail.com", "password": "testpass"}
        response = self.client.post('/accounts/login/', data)
        self.assertEqual(response.status_code, 200)

        # join a home room without homeroom_id given
        data = {'homeroom_id': 'this is not a homeroom id'}
        response = self.client.post('/homeroom/join-room/', data)
        self.assertEqual(response.status_code, 401)

    def test_student_homeroom_join_homeroom_id_not_given(self):
        # register a student
        data = {"email": "testemail@rocketmail.com", "password": "testpass", 
                "password2": "testpass", "first_name": "Central", "last_name": "Cee", 
                "city": "Toronto", "country": "Canada", "type": "student", "age": "21",
                "grade": "12", "school": "Toronto High School"}
        response = self.client.post('/accounts/register-student/', data)
        self.assertEqual(response.status_code, 200)

        # assert student is created
        user = User.objects.get(email="testemail@rocketmail.com")
        self.assertEqual(user.get_type(), "student")

        # login student
        new_user = {"email": "testemail@rocketmail.com", "password": "testpass", 
                "password2": "testpass", "first_name": "Central", "last_name": "Cee", 
                "city": "Toronto", "country": "Canada", "type": "student", "age": "21"}
        self.client.post('/accounts/register-student/', new_user)
        data = {"email": "testemail@rocketmail.com", "password": "testpass"}
        response = self.client.post('/accounts/login/', data)
        self.assertEqual(response.status_code, 200)

        # join a home room without homeroom_id given
        data = {'homeroom_id': ''}
        response = self.client.post('/homeroom/join-room/', data)
        self.assertEqual(response.status_code, 401)

    def test_student_homeroom_join_homeroom_id_false(self):
        # register a student
        data = {"email": "testemail@rocketmail.com", "password": "testpass", 
                "password2": "testpass", "first_name": "Central", "last_name": "Cee", 
                "city": "Toronto", "country": "Canada", "type": "student", "age": "21",
                "grade": "12", "school": "Toronto High School"}
        response = self.client.post('/accounts/register-student/', data)
        self.assertEqual(response.status_code, 200)

        # assert student is created
        user = User.objects.get(email="testemail@rocketmail.com")
        self.assertEqual(user.get_type(), "student")

        # login student
        new_user = {"email": "testemail@rocketmail.com", "password": "testpass", 
                "password2": "testpass", "first_name": "Central", "last_name": "Cee", 
                "city": "Toronto", "country": "Canada", "type": "student", "age": "21"}
        self.client.post('/accounts/register-student/', new_user)
        data = {"email": "testemail@rocketmail.com", "password": "testpass"}
        response = self.client.post('/accounts/login/', data)
        self.assertEqual(response.status_code, 200)

        # join a home room without homeroom_id given
        data = {'homeroom_id': 'this is not a homeroom id'}
        response = self.client.post('/homeroom/join-room/', data)
        self.assertEqual(response.status_code, 401)

class LeaveRoomViewTestCase(APITestCase):
    # tip: to successfully leave a room, join a room first
    def test_teacher_homeroom_leave_homeroom_id_not_given(self):
        # register a teacher
        data = {"email": "testemail@rocketmail.com", "password": "testpass", 
                "password2": "testpass", "first_name": "Central", "last_name": "Cee", 
                "city": "Toronto", "country": "Canada", "type": "teacher", "age": "21",
                "school": "Toronto High School"}
        response = self.client.post('/accounts/register-teacher/', data)
        self.assertEqual(response.status_code, 200)

        # assert teacher is created
        user = User.objects.get(email="testemail@rocketmail.com")
        self.assertEqual(user.get_type(), "teacher")

        # login teacher
        new_user = {"email": "testemail@rocketmail.com", "password": "testpass", 
                "password2": "testpass", "first_name": "Central", "last_name": "Cee", 
                "city": "Toronto", "country": "Canada", "type": "teacher", "age": "21"}
        self.client.post('/accounts/register-teacher/', new_user)
        data = {"email": "testemail@rocketmail.com", "password": "testpass"}
        response = self.client.post('/accounts/login/', data)
        self.assertEqual(response.status_code, 200)

        # leave a home room without homeroom_id given
        data = {'homeroom_id': ''}
        response = self.client.post('/homeroom/leave-room/', data)
        self.assertEqual(response.status_code, 401)
    
    def test_teacher_homeroom_leave_homeroom_id_false(self):
        # register a teacher
        data = {"email": "testemail@rocketmail.com", "password": "testpass", 
                "password2": "testpass", "first_name": "Central", "last_name": "Cee", 
                "city": "Toronto", "country": "Canada", "type": "teacher", "age": "21",
                "school": "Toronto High School"}
        response = self.client.post('/accounts/register-teacher/', data)
        self.assertEqual(response.status_code, 200)

        # assert teacher is created
        user = User.objects.get(email="testemail@rocketmail.com")
        self.assertEqual(user.get_type(), "teacher")

        # login teacher
        new_user = {"email": "testemail@rocketmail.com", "password": "testpass", 
                "password2": "testpass", "first_name": "Central", "last_name": "Cee", 
                "city": "Toronto", "country": "Canada", "type": "teacher", "age": "21"}
        self.client.post('/accounts/register-teacher/', new_user)
        data = {"email": "testemail@rocketmail.com", "password": "testpass"}
        response = self.client.post('/accounts/login/', data)
        self.assertEqual(response.status_code, 200)

        # leave a home room with homeroom_id that is not a homeroom id
        data = {'homeroom_id': 'this is not a homeroom id'}
        response = self.client.post('/homeroom/leave-room/', data)
        self.assertEqual(response.status_code, 401)

    def test_student_homeroom_leave_homeroom_id_not_given(self):
        # register a student
        data = {"email": "testemail@rocketmail.com", "password": "testpass", 
                "password2": "testpass", "first_name": "Central", "last_name": "Cee", 
                "city": "Toronto", "country": "Canada", "type": "student", "age": "21",
                "grade": "12", "school": "Toronto High School"}
        response = self.client.post('/accounts/register-student/', data)
        self.assertEqual(response.status_code, 200)

        # assert student is created
        user = User.objects.get(email="testemail@rocketmail.com")
        self.assertEqual(user.get_type(), "student")

        # login student
        new_user = {"email": "testemail@rocketmail.com", "password": "testpass", 
                "password2": "testpass", "first_name": "Central", "last_name": "Cee", 
                "city": "Toronto", "country": "Canada", "type": "student", "age": "21"}
        self.client.post('/accounts/register-student/', new_user)
        data = {"email": "testemail@rocketmail.com", "password": "testpass"}
        response = self.client.post('/accounts/login/', data)
        self.assertEqual(response.status_code, 200)

        # leave a home room with homeroom_id that is not a homeroom id
        data = {'homeroom_id': ''}
        response = self.client.post('/homeroom/leave-room/', data)
        self.assertEqual(response.status_code, 401)

    def test_student_homeroom_leave_homeroom_id_false(self):
        # register a student
        data = {"email": "testemail@rocketmail.com", "password": "testpass", 
                "password2": "testpass", "first_name": "Central", "last_name": "Cee", 
                "city": "Toronto", "country": "Canada", "type": "student", "age": "21",
                "grade": "12", "school": "Toronto High School"}
        response = self.client.post('/accounts/register-student/', data)
        self.assertEqual(response.status_code, 200)

        # assert student is created
        user = User.objects.get(email="testemail@rocketmail.com")
        self.assertEqual(user.get_type(), "student")

        # login student
        new_user = {"email": "testemail@rocketmail.com", "password": "testpass", 
                "password2": "testpass", "first_name": "Central", "last_name": "Cee", 
                "city": "Toronto", "country": "Canada", "type": "student", "age": "21"}
        self.client.post('/accounts/register-student/', new_user)
        data = {"email": "testemail@rocketmail.com", "password": "testpass"}
        response = self.client.post('/accounts/login/', data)
        self.assertEqual(response.status_code, 200)

        # leave a home room with homeroom_id that is not a homeroom id
        data = {'homeroom_id': 'this is not a homeroom id'}
        response = self.client.post('/homeroom/leave-room/', data)
        self.assertEqual(response.status_code, 401)

class EndRoomViewTestCase(TestCase):
    def test_teacher_end_homeroom_without_starting(self):
        # register a teacher
        data = {"email": "testemail@rocketmail.com", "password": "testpass", 
                "password2": "testpass", "first_name": "Central", "last_name": "Cee", 
                "city": "Toronto", "country": "Canada", "type": "teacher", "age": "21",
                "school": "Toronto High School"}
        response = self.client.post('/accounts/register-teacher/', data)
        self.assertEqual(response.status_code, 200)

        # assert teacher is created
        user = User.objects.get(email="testemail@rocketmail.com")
        self.assertEqual(user.get_type(), "teacher")

        # login teacher
        new_user = {"email": "testemail@rocketmail.com", "password": "testpass", 
                "password2": "testpass", "first_name": "Central", "last_name": "Cee", 
                "city": "Toronto", "country": "Canada", "type": "teacher", "age": "21"}
        self.client.post('/accounts/register-teacher/', new_user)
        data = {"email": "testemail@rocketmail.com", "password": "testpass"}
        response = self.client.post('/accounts/login/', data)
        self.assertEqual(response.status_code, 200)

        # leave a home room without joining one
        data = {'homeroom_id': ''}
        response = self.client.post('/homeroom/end-room/', data)
        self.assertEqual(response.status_code, 401)

    def test_student_end_homeroom_with_homeroom_id_not_given(self):
        # register a student
        data = {"email": "testemail@rocketmail.com", "password": "testpass", 
                "password2": "testpass", "first_name": "Central", "last_name": "Cee", 
                "city": "Toronto", "country": "Canada", "type": "student", "age": "21",
                "grade": "12", "school": "Toronto High School"}
        response = self.client.post('/accounts/register-student/', data)
        self.assertEqual(response.status_code, 200)

        # assert student is created
        user = User.objects.get(email="testemail@rocketmail.com")
        self.assertEqual(user.get_type(), "student")

        # login student
        new_user = {"email": "testemail@rocketmail.com", "password": "testpass", 
                "password2": "testpass", "first_name": "Central", "last_name": "Cee", 
                "city": "Toronto", "country": "Canada", "type": "student", "age": "21"}
        self.client.post('/accounts/register-student/', new_user)
        data = {"email": "testemail@rocketmail.com", "password": "testpass"}
        response = self.client.post('/accounts/login/', data)
        self.assertEqual(response.status_code, 200)

        # leave a home room with homeroom_id that is not a homeroom id,
        data = {'homeroom_id': ''}
        response = self.client.post('/homeroom/end-room/', data)
        self.assertEqual(response.status_code, 401)