from accounts.models import PlayUser
from django.test import TestCase
from rest_framework.test import APITestCase


# API Endpoints Tests
class RegistrationUserTestCase(APITestCase):
    def test_user_registration(self):
        data = {"email": "testemail@rocketmail.com", "password": "testpass", 
                "password2": "testpass", "first_name": "Central", "last_name": "Cee", 
                "city": "Toronto", "country": "Canada", "type": "student", "age": "21"}
        response = self.client.post('/accounts/register-user/', data)
        self.assertEqual(response.status_code, 200)

    def test_user_registration_fail(self):
        data = {"email": "testemail@rocketmail.com", "password": "testpass", 
                "password2": "wrongpass", "first_name": "Central", "last_name": "Cee", 
                "city": "Toronto", "country": "Canada", "type": "student", "age": "21"}
        response = self.client.post('/accounts/register-user/', data)        
        self.assertEqual(response.status_code, 400)

class RegistrationStudentTestCase(APITestCase):
    def test_student_registration(self):
        data = {"email": "testemail@rocketmail.com", "password": "testpass", 
                "password2": "testpass", "first_name": "Central", "last_name": "Cee", 
                "city": "Toronto", "country": "Canada", "type": "student", "age": "21",
                "grade": "12", "school": "Toronto High School"}
        response = self.client.post('/accounts/register-student/', data)
        self.assertEqual(response.status_code, 200)

    def test_student_registration_fail(self):
        data = {"email": "testemail@rocketmail.com", "password": "testpass", 
                "password2": "wrongpass", "first_name": "Central", "last_name": "Cee", 
                "city": "Toronto", "country": "Canada", "type": "student", "age": "21",
                "grade": "12", "school": "Toronto High School"}
        response = self.client.post('/accounts/register-student/', data)
        self.assertEqual(response.status_code, 400)

class RegistrationTeacherTestCase(APITestCase):
    def test_teacher_registration(self):
        data = {"email": "testemail@rocketmail.com", "password": "testpass", 
                "password2": "testpass", "first_name": "Central", "last_name": "Cee", 
                "city": "Toronto", "country": "Canada", "type": "teacher", "age": "21",
                "school": "Toronto High School"}
        response = self.client.post('/accounts/register-teacher/', data)
        self.assertEqual(response.status_code, 200)

    def test_teacher_registration_fail(self):
        data = {"email": "testemail@rocketmail.com", "password": "testpass", 
                "password2": "wrongpass", "first_name": "Central", "last_name": "Cee", 
                "city": "Toronto", "country": "Canada", "type": "teacher", "age": "21",
                "school": "Toronto High School"}
        response = self.client.post('/accounts/register-teacher/', data)
        self.assertEqual(response.status_code, 400) 

class LoginTestCase(APITestCase):
    def test_login(self):
        new_user = {"email": "testemail@rocketmail.com", "password": "testpass", 
                "password2": "testpass", "first_name": "Central", "last_name": "Cee", 
                "city": "Toronto", "country": "Canada", "type": "student", "age": "21"}
        self.client.post('/accounts/register-user/', new_user)
        data = {"email": "testemail@rocketmail.com", "password": "testpass"}
        response = self.client.post('/accounts/login/', data)
        self.assertEqual(response.status_code, 200)

    def test_login_fail(self):
        new_user = {"email": "testemail@rocketmail.com", "password": "testpass", 
                "password2": "testpass", "first_name": "Central", "last_name": "Cee", 
                "city": "Toronto", "country": "Canada", "type": "student", "age": "21"}
        self.client.post('/accounts/register-user/', new_user)
        data = {"email": "testemail@rocketmail.com", "password": "wrongpass"}
        response = self.client.post('/accounts/login/', data)
        self.assertEqual(response.status_code, 401)

class UserTypeTestCase(APITestCase):
    def test_user_type_post(self):
        new_user = {"email": "testemail@rocketmail.com", "password": "testpass", 
                "password2": "testpass", "first_name": "Central", "last_name": "Cee", 
                "city": "Toronto", "country": "Canada", "type": "student", "age": "21"}
        self.client.post('/accounts/register-user/', new_user)
        response = self.client.post("/accounts/get-type/", {"email": "testemail@rocketmail.com"})
        self.assertEqual(response.status_code, 200)

class UserHomeroomTestCase(APITestCase):
    def test_user_homeroom_post(self):
        new_user = {"email": "testemail@rocketmail.com", "password": "testpass", 
                "password2": "testpass", "first_name": "Central", "last_name": "Cee", 
                "city": "Toronto", "country": "Canada", "type": "student", "age": "21", 
                "homeroom_id": "30002000"}
        self.client.post('/accounts/register-user/', new_user)
        response = self.client.post("/accounts/get-homeroom/", {"email": "testemail@rocketmail.com"})
        self.assertEqual(response.status_code, 200)

# Database Tests
class PlayUserTestCase(TestCase):
    @classmethod
    def setUp(cls):
        PlayUser.objects.create(email="testemail@rocketmail.com", first_name="Central", 
                                last_name="Cee", city="Toronto", country="Canada", age="21", 
                                school="UofT", type="student", homeroom_id="30002000")
        PlayUser.objects.create(email="testemail2@rocketmail.com", first_name="Dave", 
                                last_name="Aitch", city="Toronto", country="Canada", age="22", 
                                school="UofT", type="teacher")
        
    def test_string_method(self):
        test_user = PlayUser.objects.get(email="testemail@rocketmail.com")
        email = str(test_user)
        self.assertEqual(email, "testemail@rocketmail.com") 

    def test_get_type(self):
        test_user = PlayUser.objects.get(email="testemail@rocketmail.com")
        user_type = test_user.get_type()
        self.assertEqual(user_type, "student") 

    def test_get_homeroom(self):
        test_user = PlayUser.objects.get(email="testemail@rocketmail.com")
        user_homeroom = test_user.get_homeroom()
        self.assertEqual(user_homeroom, "30002000") 

    def test_update_single_user(self):
        student = PlayUser.objects.get(email="testemail@rocketmail.com")
        student.last_name = "Bee"
        student.save()
        self.assertEqual(student.last_name, "Bee")

    def test_update_all_users(self):
        PlayUser.objects.update(city="Montreal")
        student = PlayUser.objects.get(email="testemail@rocketmail.com")
        teacher = PlayUser.objects.get(email="testemail2@rocketmail.com")
        self.assertEqual(student.city, "Montreal")
        self.assertEqual(teacher.city, "Montreal")
