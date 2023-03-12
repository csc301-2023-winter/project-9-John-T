from django.urls import path
from .views import *

urlpatterns = [
    path('answer/', AnswerView.as_view(), name='answer'),
]
