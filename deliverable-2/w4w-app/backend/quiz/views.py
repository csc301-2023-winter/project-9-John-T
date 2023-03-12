from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from django.shortcuts import get_object_or_404

from .models import Answer
from .serializers import AnswerSerializer


class AnswerView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        answers = get_object_or_404(Answer, User=request.user)
        serializer = AnswerSerializer(answers)
        return Response(serializer.data)

    def post(self, request):
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