from django.urls import path
from .views import *
from rest_framework_simplejwt.views import TokenObtainPairView


urlpatterns = [
    path('register-user/', RegistrationUser.as_view(), name='register_user'),
    path('register-student/', RegistrationStudent.as_view(), name='register_student'),
    path('register-teacher/', RegistrationTeacher.as_view(), name='register_teacher'),
    path('login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('get-type/', UserType.as_view(), name='user-type'),
    path('get-homeroom/', UserHomeroom.as_view(), name='user-homeroom'),
]

