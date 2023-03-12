from quiz.models import Answer
from accounts.models import PlayUser
from django.test import TestCase
from rest_framework.test import APITestCase


# API Endpoints Tests
class AnswerViewTestCase(APITestCase):
    def test_post_answer_unauthenticated(self):
        new_user = {"email": "testemail@rocketmail.com", "password": "testpass", 
                "password2": "testpass", "first_name": "Central", "last_name": "Cee", 
                "city": "Toronto", "country": "Canada", "type": "student", "age": "21"}
        self.client.post('/accounts/register-user/', new_user)
        student = PlayUser.objects.get(email="testemail@rocketmail.com")
        data = {"answer_1": "A", "answer_2": "B", 
                "answer_3": "C", "answer_4": "D", "User": student}
        response = self.client.post('/quiz/answer/', data)        
        self.assertEqual(response.status_code, 401)

    def test_post_answer(self):
        new_user = {"email": "testemail@rocketmail.com", "password": "testpass", 
                "password2": "testpass", "first_name": "Central", "last_name": "Cee", 
                "city": "Toronto", "country": "Canada", "type": "student", "age": "21"}
        self.client.post('/accounts/register-user/', new_user)
        self.client.login(email="testemail@rocketmail.com", password="testpass")
        student = PlayUser.objects.get(email="testemail@rocketmail.com")
        data = {"answer_1": "A", "answer_2": "B", 
                "answer_3": "C", "answer_4": "D", "User": student}
        response = self.client.post('/quiz/answer/', data)        
        self.assertEqual(response.status_code, 200)

    def test_update_answer(self):
        new_user = {"email": "testemail@rocketmail.com", "password": "testpass", 
                "password2": "testpass", "first_name": "Central", "last_name": "Cee", 
                "city": "Toronto", "country": "Canada", "type": "student", "age": "21"}
        self.client.post('/accounts/register-user/', new_user)
        self.client.login(email="testemail@rocketmail.com", password="testpass")
        student = PlayUser.objects.get(email="testemail@rocketmail.com")
        data = {"answer_1": "A", "answer_2": "B", 
                "answer_3": "C", "answer_4": "D", "User": student}
        self.client.post('/quiz/answer/', data)
        new_data = {"answer_1": "X", "answer_2": "Y", 
                "answer_3": "Z", "answer_4": "D", "User": student} 
        response = self.client.post('/quiz/answer/', new_data)       
        self.assertEqual(response.status_code, 200)

    def test_get_answer(self):
        new_user = {"email": "testemail@rocketmail.com", "password": "testpass", 
                "password2": "testpass", "first_name": "Central", "last_name": "Cee", 
                "city": "Toronto", "country": "Canada", "type": "student", "age": "21"}
        self.client.post('/accounts/register-user/', new_user)
        self.client.login(email="testemail@rocketmail.com", password="testpass")
        student = PlayUser.objects.get(email="testemail@rocketmail.com")
        data = {"answer_1": "A", "answer_2": "B", 
                "answer_3": "C", "answer_4": "D", "User": student}
        self.client.post('/quiz/answer/', data)
        user_data = {"User": student}
        response = self.client.get('/quiz/answer/', user_data)
        self.assertEqual(response.status_code, 200)


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