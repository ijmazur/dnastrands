from importlib.resources import read_binary
from django.db.models import fields
from rest_framework import serializers
from core.models import MainUser, SecondUser


class MainUserSerializer(serializers.ModelSerializer):
    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance

    class Meta:
        model = MainUser
        fields = '__all__'
        extra_kwargs = {
            'password': {'write_only': True}
        }

class SecondUserSerializer(serializers.ModelSerializer):
    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance

    class Meta:
        model = SecondUser
        fields = '__all__'
        extra_kwargs = {
            'password': {'write_only': True}
        }