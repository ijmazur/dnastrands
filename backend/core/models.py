from unittest.util import _MAX_LENGTH
from django.contrib.auth.base_user import AbstractBaseUser
from django.db import models
from django.contrib.auth.models import UserManager
# from django.contrib.contenttypes.fields import GenericRelation

# Create your models here.

class MainAppUser(AbstractBaseUser):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    username = models.CharField(max_length=30, unique=True)
    password = models.CharField(max_length=255)
    mail = models.EmailField(max_length=254, unique=True)
    objects = UserManager()
    USERNAME_FIELD = 'username'


class MainUser(MainAppUser):
    pass


class SecondUser(MainAppUser):
    pass

class Tag(models.Model):
    owner = models.ForeignKey(MainAppUser, on_delete = models.CASCADE, null = True, blank = True)
    secret = models.CharField(null=True, blank=True, max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    primer_1 = models.TextField()
    primer_2 = models.TextField()
    primer_3 = models.TextField()
    scheme = models.TextField()
    f1 = models.TextField()
    f2 = models.TextField()
    f3 = models.TextField()
    f1_f2 = models.TextField()
    strand = models.TextField()

    def __str__(self):
        return self.strand
# class UpdateProfile(models.ModelForm):
#     first_name = models.CharField(required=False)
#     last_name = models.CharField(required=False)
#     email = models.EmailField(required=True)

#     class Meta:
#         model = MainAppUser
#         fields = ('first_name', 'last_name', 'mail')

#     def clean_email(self):
#         email = self.cleaned_data.get('email')

#         if email and MainAppUser.objects.filter(email=email).count():
#             raise models.ValidationError('This email address is already in use. Please supply a different email address.')
#         return email

#     def save(self, commit=True):
#         user = super(RegistrationForm, self).save(commit=False)
#         user.email = self.cleaned_data['email']

#         if commit:
#             user.save()

#         return user