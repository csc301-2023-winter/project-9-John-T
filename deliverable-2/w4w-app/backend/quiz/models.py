from django.db import models

# Create your models here.
class Answer(models.Model):
    answer_1 = models.TextField(default="")
    answer_2 = models.TextField(default="")
    answer_3 = models.TextField(default="")
    answer_4 = models.TextField(default="")
    User = models.OneToOneField('accounts.PlayUser', on_delete=models.CASCADE)

    def __str__(self):
        return self.User.email
