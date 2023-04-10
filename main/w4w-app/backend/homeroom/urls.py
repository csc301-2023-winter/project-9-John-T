from django.urls import path
from .views import JoinRoomView, CreateRoomView, LeaveRoomView, EndRoomView, ListRoomView, ListStudentsInRoom

urlpatterns = [
    path('create-room/', CreateRoomView.as_view(), name='create_room'),
    path('join-room/', JoinRoomView.as_view(), name='join_room'),
    path('leave-room/', LeaveRoomView.as_view(), name='leave_room'),
    path('end-room/', EndRoomView.as_view(), name='end_room'),
    path('show-rooms/', ListRoomView.as_view(), name='list_rooms'),
    path('students-in-room/', ListStudentsInRoom.as_view(), name='students_in_room')
]
