from django.contrib.auth.base_user import AbstractBaseUser
from django.db import models
from django.contrib.auth.models import UserManager
# from django.contrib.contenttypes.fields import GenericRelation

# Create your models here.

class MainAppUser(AbstractBaseUser):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    date_of_birth = models.DateField()
    username = models.CharField(max_length=30, unique=True)
    password = models.CharField(max_length=255)
    mail = models.EmailField(max_length=254, unique=True)
    objects = UserManager()
    USERNAME_FIELD = 'username'


class MainUser(MainAppUser):
    pass


class SecondUser(MainAppUser):
    pass
