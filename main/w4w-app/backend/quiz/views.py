from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from django.shortcuts import get_object_or_404
from django.core.mail import send_mail
from django.conf import settings

from .models import Answer
from homeroom.models import homeroom
from .serializers import AnswerSerializer


class AnswerView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        """Gets the student's answers to the quiz."""
        answers = get_object_or_404(Answer, User=request.user)
        serializer = AnswerSerializer(answers)
        return Response(serializer.data)

    def post(self, request):
        """Adds or update the student's answers to the quiz."""
        copy_data = request.data.copy()
        copy_data["User"] = request.user.id
        # Update all questions if User has already answered
        if Answer.objects.filter(User=request.user).exists():
            answer = Answer.objects.get(User=request.user)
            serializer = AnswerSerializer(answer)
            serializer.update(answer, copy_data)
        # Create new answer if User answered for the first time
        else:
            serializer = AnswerSerializer(data=copy_data)
            serializer.is_valid(raise_exception=True)
            serializer.save()
        return Response(serializer.data)


class SendEmailView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        """Sends the student's answers to the teacher's email using SMTP."""
        try:
            answer = Answer.objects.get(User=request.user)
        except Answer.DoesNotExist:
            return Response("User don't have answers", status=400)
        if not request.user.homeroom_id:
            return Response("User don't have a homeroom", status=400)
        user_homeroom = homeroom.objects.get(homeroom_id=request.user.homeroom_id)
        teacher_email = user_homeroom.teacher_id

        subject = (
            "[homeroom "
            + request.user.homeroom_id
            + "] Quiz answers from "
            + request.user.first_name
            + " "
            + request.user.last_name
        )
        message = (
            "Student name: "
            + request.user.first_name
            + " "
            + request.user.last_name
            + "\n"
            + "Student email: "
            + request.user.email
            + "\n"
            + "Here are the student's answers to the quiz:\n \n"
            + "Q1. \n"
            + answer.answer_1
            + "\n \n"
            + "Q2. \n"
            + answer.answer_2
            + "\n \n"
            + "Q3. \n"
            + answer.answer_3
            + "\n \n"
            + "Q4. \n"
            + answer.answer_4
            + "\n"
        )
        email_from = settings.EMAIL_HOST_USER
        recipient_list = [teacher_email]
        send_mail(subject, message, email_from, recipient_list)
        return Response("Email sent")


class EmailInfoView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        """Gets the student's name, teacher's email, and homeroom id for email template."""
        user_name = request.user.first_name + " " + request.user.last_name
        if not request.user.homeroom_id:
            return Response(
                {"message": "User don't have a homeroom", "user_name": user_name},
                status=400,
            )
        user_homeroom = homeroom.objects.get(homeroom_id=request.user.homeroom_id)
        teacher_email = user_homeroom.teacher_id
        return Response(
            {
                "name": user_name,
                "teacher_email": teacher_email,
                "homeroom": request.user.homeroom_id,
            }
        )
