from django.test import Client, TestCase
from accounts.models import PlayUser
from homeroom.models import homeroom
from rest_framework.test import APITestCase

# Create your tests here.
class CreateRoomViewTestCase(APITestCase):
    @classmethod
    def setUp(self):
        self.client = Client()

        # register a teacher
        new_teacher = {"email": "testemail@rocketmail.com", "password": "testpass", 
                "password2": "testpass", "first_name": "Central", "last_name": "Cee", 
                "city": "Toronto", "country": "Canada", "type": "teacher", "age": "21"}
        self.client.post('/accounts/register-teacher/', new_teacher)

        # register a student
        new_student = {"email": "testemail2@rocketmail.com", "password": "testpass2", 
                "password2": "testpass2", "first_name": "Arr", "last_name": "Dee", 
                "city": "Toronto", "country": "Canada", "type": "student", "age": "19",
                "grade": "12", "school": "Toronto High School"}
        self.client.post('/accounts/register-student/', new_student)

    def test_teacher_homeroom_creation(self):
        # login teacher
        self.client.login(email="testemail@rocketmail.com", password="testpass")

        # create a homeroom
        data = {"homeroom_id": "30002000", "teacher_id": "testemail@rocketmail.com"}
        response = self.client.post('/homeroom/create-room/', data)
        self.assertEqual(response.status_code, 200)

    def test_student_homeroom_creation(self):
        # student cannot create a homeroom
        # login student
        self.client.login(email="testemail2@rocketmail.com", password="testpass2")

        # register a homeroom
        data = {"homeroom_id": "30002000", "teacher_id": "testemail@rocketmail.com"}
        response = self.client.post('/homeroom/create-room/', data)
        self.assertEqual(response.status_code, 401)

    def test_homeroom_creation_unauthenticated(self):
        self.client.logout()

        # register a homeroom without logging in
        data = {"homeroom_id": "30002000", "teacher_id": "testemail@rocketmail.com"}
        response = self.client.post('/homeroom/create-room/', data)
        self.assertEqual(response.status_code, 401)

class JoinRoomViewTestCase(APITestCase):
    @classmethod
    def setUp(self):
        self.client = Client()

        # register a teacher
        new_teacher = {"email": "testemail@rocketmail.com", "password": "testpass", 
                "password2": "testpass", "first_name": "Central", "last_name": "Cee", 
                "city": "Toronto", "country": "Canada", "type": "teacher", "age": "21"}
        self.client.post('/accounts/register-teacher/', new_teacher)

        # register a student
        new_student = {"email": "testemail2@rocketmail.com", "password": "testpass2", 
                "password2": "testpass2", "first_name": "Arr", "last_name": "Dee", 
                "city": "Toronto", "country": "Canada", "type": "student", "age": "19",
                "grade": "12", "school": "Toronto High School"}
        self.client.post('/accounts/register-student/', new_student)

        # login teacher
        self.client.login(email="testemail@rocketmail.com", password="testpass")

        # create a homeroom
        data = {"homeroom_id": "30002000", "teacher_id": "testemail@rocketmail.com"}
        self.client.post('/homeroom/create-room/', data)

        self.client.logout()

    # tip: to test a successful join room, create a homeroom first
    def test_teacher_homeroom_join(self):
        # login teacher
        self.client.login(email="testemail@rocketmail.com", password="testpass")

        response = self.client.post('/homeroom/join-room/', {"homeroom_id": "30002000"})

        self.assertEqual(response.status_code, 200)

    def test_student_homeroom_join(self):
        # login student
        self.client.login(email="testemail2@rocketmail.com", password="testpass2")

        # join homeroom
        response = self.client.post('/homeroom/join-room/', {"homeroom_id": "30002000"})

        self.assertEqual(response.status_code, 200)

    def test_homeroom_join_unauthenticated(self):
        self.client.logout()

        # join homeroom
        response = self.client.post('/homeroom/join-room/', {"homeroom_id": "30002000"})
        self.assertEqual(response.status_code, 401)
    
    def test_teacher_homeroom_join_homeroom_id_false(self):
        # login teacher
        self.client.login(email="testemail@rocketmail.com", password="testpass")

        # join a home room with wrong homeroom id
        data = {'homeroom_id': '12345678'}
        response = self.client.post('/homeroom/join-room/', data)
        self.assertEqual(response.status_code, 400)

    def test_student_homeroom_join_homeroom_id_false(self):
        # login student
        self.client.login(email="testemail2@rocketmail.com", password="testpass2")

        # join a home room with wrong homeroom id
        data = {'homeroom_id': '12345678'}
        response = self.client.post('/homeroom/join-room/', data)
        self.assertEqual(response.status_code, 400)
    
    # def test_teacher_homeroom_join_homeroom_id_not_given(self):
    #     # login teacher
    #     self.client.login(email="testemail@rocketmail.com", password="testpass")

    #     # join a home room without homeroom_id given
    #     data = {'homeroom_id': ''}
    #     response = self.client.post('/homeroom/join-room/', data)
    #     self.assertEqual(response.status_code, 401)

    # def test_student_homeroom_join_homeroom_id_not_given(self):
    #     # login student
    #     self.client.login(email="testemail2@rocketmail.com", password="testpass2")

    #     # join a home room without homeroom_id given
    #     data = {'homeroom_id': ''}
    #     response = self.client.post('/homeroom/join-room/', data)
    #     self.assertEqual(response.status_code, 401)

class LeaveRoomViewTestCase(APITestCase):
    @classmethod
    def setUp(self):
        self.client = Client()
        
        # register a teacher
        new_teacher = {"email": "testemail@rocketmail.com", "password": "testpass", 
                "password2": "testpass", "first_name": "Central", "last_name": "Cee", 
                "city": "Toronto", "country": "Canada", "type": "teacher", "age": "21"}
        self.client.post('/accounts/register-teacher/', new_teacher)

        # register a student
        new_student = {"email": "testemail2@rocketmail.com", "password": "testpass2", 
                "password2": "testpass2", "first_name": "Arr", "last_name": "Dee", 
                "city": "Toronto", "country": "Canada", "type": "student", "age": "19",
                "grade": "12", "school": "Toronto High School"}
        self.client.post('/accounts/register-student/', new_student)

        # login teacher
        self.client.login(email="testemail@rocketmail.com", password="testpass")

        # create a homeroom
        data = {"homeroom_id": "30002000", "teacher_id": "testemail@rocketmail.com"}
        self.client.post('/homeroom/create-room/', data)

        self.client.logout()

    def test_teacher_homeroom_leave(self):
        # login teacher
        self.client.login(email="testemail@rocketmail.com", password="testpass")

        # join a homeroom
        data = {"homeroom_id": "30002000"}
        self.client.post('/homeroom/join-room/', data)

        # leave a homeroom without homeroom_id given
        response = self.client.post('/homeroom/leave-room/')
        self.assertEqual(response.status_code, 200)

    def test_student_homeroom_leave(self):
        # login student
        self.client.login(email="testemail2@rocketmail.com", password="testpass2")

        # join a homeroom
        data = {"homeroom_id": "30002000"}
        self.client.post('/homeroom/join-room/', data)

        # leave a homeroom without homeroom_id given
        response = self.client.post('/homeroom/leave-room/')
        self.assertEqual(response.status_code, 200)
    
    def test_homeroom_leave_not_joined(self):
        # login teacher
        self.client.login(email="testemail@rocketmail.com", password="testpass")

        # leave a homeroom without joining one
        response = self.client.post('/homeroom/leave-room/')
        self.assertEqual(response.status_code, 400)


class EndRoomViewTestCase(TestCase):
    @classmethod
    def setUp(self):
        self.client = Client()
        
        # register a teacher
        new_teacher = {"email": "testemail@rocketmail.com", "password": "testpass", 
                "password2": "testpass", "first_name": "Central", "last_name": "Cee", 
                "city": "Toronto", "country": "Canada", "type": "teacher", "age": "21"}
        self.client.post('/accounts/register-teacher/', new_teacher)

        # register a student
        new_student = {"email": "testemail2@rocketmail.com", "password": "testpass2", 
                "password2": "testpass2", "first_name": "Arr", "last_name": "Dee", 
                "city": "Toronto", "country": "Canada", "type": "student", "age": "19",
                "grade": "12", "school": "Toronto High School"}
        self.client.post('/accounts/register-student/', new_student)

        # login teacher
        self.client.login(email="testemail@rocketmail.com", password="testpass")

        # create a homeroom
        data = {"homeroom_id": "30002000", "teacher_id": "testemail@rocketmail.com"}
        self.client.post('/homeroom/create-room/', data)

        self.client.logout()

    def test_teacher_end_homeroom(self):
        # login a teacher
        self.client.login(email="testemail@rocketmail.com", password="testpass")

        # end a home room
        data = {'homeroom_id': '30002000'}
        response = self.client.post('/homeroom/end-room/', data)
        self.assertEqual(response.status_code, 200)

    def test_teacher_end_homeroom_unauthenticated(self):
        self.client.logout()

        # end a home room
        data = {'homeroom_id': '30002000'}
        response = self.client.post('/homeroom/end-room/', data)
        self.assertEqual(response.status_code, 401)

    def test_teacher_end_homeroom_wrong_homeroom_id(self):
        # login a teacher
        self.client.login(email="testemail@rocketmail.com", password="testpass")

        # end a homeroom id that is not owned by himself/herself
        data = {'homeroom_id': '12345678'}
        response = self.client.post('/homeroom/end-room/', data)
        self.assertEqual(response.status_code, 400)

    def test_student_cannot_end_homeroom(self):
        # login a student
        self.client.login(email="testemail2@rocketmail.com", password="testpass2")

        # end a homeroom as a student
        data = {'homeroom_id': '30002000'}
        response = self.client.post('/homeroom/end-room/', data)
        self.assertEqual(response.status_code, 401)


class ListStudentsInRoomTestCase(APITestCase):
    @classmethod
    def setUp(self):
        self.client = Client()
        
        # register a teacher
        new_teacher = {"email": "testemail@rocketmail.com", "password": "testpass", 
                "password2": "testpass", "first_name": "Central", "last_name": "Cee", 
                "city": "Toronto", "country": "Canada", "type": "teacher", "age": "21"}
        self.client.post('/accounts/register-teacher/', new_teacher)

        # register a student
        new_student = {"email": "testemail2@rocketmail.com", "password": "testpass2", 
                "password2": "testpass2", "first_name": "Arr", "last_name": "Dee", 
                "city": "Toronto", "country": "Canada", "type": "student", "age": "19",
                "grade": "12", "school": "Toronto High School"}
        self.client.post('/accounts/register-student/', new_student)

        # login teacher
        self.client.login(email="testemail@rocketmail.com", password="testpass")

        # create a homeroom
        data = {"homeroom_id": "30002000", "teacher_id": "testemail@rocketmail.com"}
        self.client.post('/homeroom/create-room/', data)

        self.client.logout()

    def test_list_students_in_room_as_teacher(self):
        # login student
        self.client.login(email="testemail2@rocketmail.com", password="testpass2")

        # join homeroom
        self.client.post('/homeroom/join-room/', {"homeroom_id": "30002000"})

        # login a teacher
        self.client.login(email="testemail@rocketmail.com", password="testpass")

        # join homeroom
        self.client.post('/homeroom/join-room/', {"homeroom_id": "30002000"})

        # list students in homeroom
        response = self.client.post('/homeroom/students-in-room/', {"homeroom_id": "30002000"})
        self.assertEqual(response.status_code, 200)

    def test_list_students_in_room_as_student(self):
        # login student
        self.client.login(email="testemail2@rocketmail.com", password="testpass2")

        # join homeroom
        self.client.post('/homeroom/join-room/', {"homeroom_id": "30002000"})

        # list students in homeroom
        response = self.client.post('/homeroom/students-in-room/', {"homeroom_id": "30002000"})
        self.assertEqual(response.status_code, 200)

    def test_list_students_in_room_unauthenticated(self):
        self.client.logout()

        # list students in homeroom
        response = self.client.post('/homeroom/students-in-room/', {"homeroom_id": "30002000"})
        self.assertEqual(response.status_code, 401)

    def test_list_students_in_room_wrong_homeroom(self):
        # login as student
        self.client.login(email="testemail2@rocketmail.com", password="testpass2")

        # list students in a non-existent homeroom
        response = self.client.post('/homeroom/students-in-room/', {"homeroom_id": "12345678"})
        self.assertEqual(response.status_code, 400)


# Database Tests
class HomeroomTestCase(TestCase):
    @classmethod
    def setUp(cls):
        PlayUser.objects.create(email="testemail@rocketmail.com", first_name="Central", 
                                last_name="Cee", city="Toronto", country="Canada", age="21", 
                                school="UofT", type="student")
        PlayUser.objects.create(email="testemail2@rocketmail.com", first_name="Dave", 
                                last_name="Aitch", city="Toronto", country="Canada", age="22", 
                                school="UofT", type="teacher")
        PlayUser.objects.create(email="alejandrogarnacho@gmail.com", first_name="Ale", 
                                last_name="Garnacho", city="Buenos Aires", country="Argentina", age="20", 
                                school="Manchester", type="teacher")
        homeroom.objects.create(homeroom_id="30002000", teacher_id="testemail@rocketmail.com")

    def test_homeroom_created(self):
        # check if homeroom is created
        test_homeroom = homeroom.objects.get(homeroom_id="30002000")
        homeroom_id = str(test_homeroom.homeroom_id)
        self.assertEqual(test_homeroom.teacher_id, "testemail@rocketmail.com")
        self.assertEqual(homeroom_id, "30002000")
        self.assertEqual(homeroom.objects.count(), 1)

    def test_update_homeroom_teacher(self):
        # check if a homeroom's teacher can be updated
        test_homeroom = homeroom.objects.get(homeroom_id="30002000")
        test_homeroom.teacher_id = "alejandrogarnacho@gmail.com"
        test_homeroom.save()
        self.assertEqual(test_homeroom.teacher_id, "alejandrogarnacho@gmail.com")
        self.assertEqual(str(test_homeroom.homeroom_id), "30002000")

    def test_update_homeroom_id(self):
        # check if a homeroom's id can be updated
        test_homeroom = homeroom.objects.get(homeroom_id="30002000")
        test_homeroom.homeroom_id = "12345678"
        test_homeroom.save()
        self.assertEqual(test_homeroom.homeroom_id, "12345678")
        self.assertEqual(test_homeroom.teacher_id, "testemail@rocketmail.com")

    def test_homeroom_delete(self):
        # check if a homeroom can be deleted
        test_homeroom = homeroom.objects.get(homeroom_id="30002000")
        test_homeroom.delete()
        self.assertEqual(homeroom.objects.count(), 0)

    def test_homeroom_teacher_removed(self):
        # check if a homeroom still exists after the teacher is deleted
        test_homeroom = homeroom.objects.get(homeroom_id="30002000")
        test_user = PlayUser.objects.get(email="testemail@rocketmail.com")
        test_user.delete()
        self.assertEqual(homeroom.objects.count(), 1)

    # def test_homeroom_teacher_updated(self):
    #     check if a homeroom still exists after the teacher is updated
    #     test_homeroom = homeroom.objects.get(homeroom_id="30002000")
    #     test_user = PlayUser.objects.get(email="testemail@rocketmail.com")
    #     test_user.email = "newtestemail@rocketmail.com"
    #     test_user.save()
    #     self.assertEqual(homeroom.objects.count(), 1)
    #     self.assertEqual(test_homeroom.teacher_id, "newtestemail@rocketmail.com")
    #     TODO: homeroom teacher_id is not updated when the teacher's email is updated