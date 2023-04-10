from quiz.models import Answer
from accounts.models import PlayUser
from django.test import Client, TestCase
from rest_framework.test import APITestCase


# API Endpoints Tests
class AnswerViewTestCase(APITestCase):
    @classmethod
    def setUp(self):
        self.client = Client()

        # Register a student
        new_user = {"email": "testemail@rocketmail.com", "password": "testpass", 
                "password2": "testpass", "first_name": "Central", "last_name": "Cee", 
                "city": "Toronto", "country": "Canada", "type": "student", "age": "21"}
        self.client.post('/accounts/register-student/', new_user)
        
    def test_post_answer_unauthenticated(self):
        # Post answers for student
        student = PlayUser.objects.get(email="testemail@rocketmail.com")
        data = {"answer_1": "A", "answer_2": "B", 
                "answer_3": "C", "answer_4": "D", "User": student}
        response = self.client.post('/quiz/answer/', data)        
        self.assertEqual(response.status_code, 401)

    def test_get_answer_unauthenticated(self):
        # Log in as student
        self.client.login(email="testemail@rocketmail.com", password="testpass")

        student = PlayUser.objects.get(email="testemail@rocketmail.com")
        data = {"answer_1": "A", "answer_2": "B", 
                "answer_3": "C", "answer_4": "D", "User": student}
        self.client.post('/quiz/answer/', data)

        # Log out from student
        self.client.logout()

        # Get answers from student
        response = self.client.get('/quiz/answer/')        
        self.assertEqual(response.status_code, 401)

    def test_post_answer(self):
        # Log in as student
        self.client.login(email="testemail@rocketmail.com", password="testpass")

        # Post answers for student
        student = PlayUser.objects.get(email="testemail@rocketmail.com")
        data = {"answer_1": "A", "answer_2": "B", 
                "answer_3": "C", "answer_4": "D", "User": student}
        response = self.client.post('/quiz/answer/', data)     
        self.assertEqual(response.status_code, 200)

    def test_update_answer(self):
        # Log in as student
        self.client.login(email="testemail@rocketmail.com", password="testpass")

        # Post answers for student
        student = PlayUser.objects.get(email="testemail@rocketmail.com")
        data = {"answer_1": "A", "answer_2": "B", 
                "answer_3": "C", "answer_4": "D", "User": student}
        self.client.post('/quiz/answer/', data)

        # Update answers for student
        new_data = {"answer_1": "X", "answer_2": "Y", 
                "answer_3": "Z", "answer_4": "D", "User": student} 
        response = self.client.post('/quiz/answer/', new_data)       
        self.assertEqual(response.status_code, 200)

    def test_get_answer(self):
        # Log in as student
        self.client.login(email="testemail@rocketmail.com", password="testpass")

        # Post answers for student
        student = PlayUser.objects.get(email="testemail@rocketmail.com")
        data = {"answer_1": "A", "answer_2": "B", 
                "answer_3": "C", "answer_4": "D", "User": student}
        self.client.post('/quiz/answer/', data)

        # Get answers from student
        response = self.client.get('/quiz/answer/')
        self.assertEqual(response.status_code, 200)


# TODO
# class SendEmailViewTestCase(APITestCase):
#     @classmethod
#     def setUp(self):
#         self.client = Client()

#     def test_send_email(self):

#     def test_send_email_unauthenticated(self):

#     def test_send_email_no_answers(self):

#     def test_send_email_no_homeroom(self):


# Database Tests
class AnswerModelTestCase(TestCase):
    @classmethod
    def setUp(cls):
        student = PlayUser.objects.create(email="testemail@rocketmail.com", first_name="Central", 
                                last_name="Cee", city="Toronto", country="Canada", age="21", 
                                school="UofT", type="student")
        Answer.objects.create(answer_1="A", answer_2="B", answer_3="C", answer_4="D", 
                              User=student)
        
    def test_string_method(self):
        student = PlayUser.objects.get(email="testemail@rocketmail.com")
        student_answer = Answer.objects.get(User=student)
        email = str(student_answer)
        self.assertEqual(email, "testemail@rocketmail.com") 

    def test_update_answers(self):
        student = PlayUser.objects.get(email="testemail@rocketmail.com")
        student_answer = Answer.objects.get(User=student)
        student_answer.answer_1 = "X"
        student_answer.answer_2 = "Y"
        student_answer.answer_3 = "Z"
        student_answer.save()
        self.assertEqual(student_answer.answer_1, "X")
        self.assertEqual(student_answer.answer_2, "Y")
        self.assertEqual(student_answer.answer_3, "Z")