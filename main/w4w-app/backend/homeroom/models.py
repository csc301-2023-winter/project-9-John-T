from django.db import models
from django.core.validators import RegexValidator


class HomeroomManager(models.Manager):
    def create_homeroom(self, homeroom_id, teacher_id):
        payment = self.create(homeroom_id=homeroom_id, teacher_id=teacher_id)
        return payment

# Create your models here.
class homeroom(models.Model):
    homeroom_id = models.IntegerField(validators=[RegexValidator(r'^\d{8}$')], unique=True)
    teacher_id = models.CharField(max_length=150)
    objects = HomeroomManager()

    def __str__(self):
        return 'Room with code: ' + str(self.homeroom_id)
