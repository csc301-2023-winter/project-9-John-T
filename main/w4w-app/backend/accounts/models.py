from django.db import models
from django.contrib.auth.models import (
    AbstractBaseUser,
    PermissionsMixin,
    BaseUserManager,
)
from django.core.validators import RegexValidator

TYPE_CHOICES = [
    ("student", "student"),
    ("teacher", "teacher"),
]


# Create your models here.
class PlayUserManager(BaseUserManager):
    def create_superuser(self, email, password, **other_fields):

        other_fields.setdefault("is_staff", True)
        other_fields.setdefault("is_superuser", True)
        other_fields.setdefault("is_active", True)

        if other_fields.get("is_staff") is not True:
            raise ValueError("Superuser must be assigned to is_staff=True.")
        if other_fields.get("is_superuser") is not True:
            raise ValueError("Superuser must be assigned to is_superuser=True.")

        return self.create_user(email, password, **other_fields)

    def create_user(self, email, password, **other_fields):

        if not email:
            raise ValueError("Please provide a valid email address")

        email = self.normalize_email(email)
        user = self.model(email=email, **other_fields)
        user.set_password(password)
        user.save()
        return user


class PlayUser(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(max_length=150, unique=True)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    avatar = models.ImageField(upload_to="user_avatars/", blank=True, null=True)
    city = models.CharField(max_length=50, blank=True, null=True)
    country = models.CharField(max_length=50, blank=True, null=True)
    age = models.CharField(
        max_length=10, validators=[RegexValidator(r"[1-100]")], blank=True, null=True
    )
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    grade = models.CharField(
        max_length=10,
        validators=[RegexValidator(r"^[1-9]?$|^10$|^11$|^12$")],
        blank=True,
        null=True,
    )
    school = models.CharField(max_length=150, blank=True, null=True)
    homeroom_id = models.CharField(max_length=150, blank=True, null=True)
    type = models.CharField(max_length=150, choices=TYPE_CHOICES, blank=True, null=True)
    objects = PlayUserManager()
    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []

    def __str__(self):
        return self.email

    def get_type(self):
        return self.type

    def get_homeroom(self):
        return self.homeroom_id
