from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import UserSerializer, StudentSerializer, TeacherSerializer
from .models import PlayUser


class RegistrationUser(APIView):
    def post(self, request):
        """Registers a new default user."""
        serializers = UserSerializer(data=request.data)
        serializers.is_valid(raise_exception=True)
        serializers.save()
        return Response(serializers.data)


class RegistrationStudent(APIView):
    def post(self, request):
        """Registers a new student."""
        serializers = StudentSerializer(data=request.data)
        serializers.is_valid(raise_exception=True)
        serializers.save()
        return Response(serializers.data)


class RegistrationTeacher(APIView):
    def post(self, request):
        """Registers a new teacher."""
        serializers = TeacherSerializer(data=request.data)
        serializers.is_valid(raise_exception=True)
        serializers.save()
        return Response(serializers.data)


class UserType(APIView):
    def post(self, request):
        """Returns the type of the user."""
        copy_data = request.data.copy()
        utype = PlayUser.objects.filter(email=copy_data["email"]).first().get_type()
        return Response({"type": utype})


class UserHomeroom(APIView):
    def post(self, request):
        """Returns the homeroom id of the user."""
        copy_data = request.data.copy()
        homeroom_id = (
            PlayUser.objects.filter(email=copy_data["email"]).first().get_homeroom()
        )
        return Response({"homeroom_id": homeroom_id})
