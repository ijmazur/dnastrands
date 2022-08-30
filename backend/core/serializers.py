from importlib.resources import read_binary
from django.db.models import fields
from rest_framework import serializers
from core.models import MainUser, SecondUser, Tag


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


class TagSerializer(serializers.Serializer):
    verification_codes = serializers.CharField()
    f1 = serializers.CharField()
    f2 = serializers.CharField()
    f3 = serializers.CharField()
    strand = serializers.CharField()

    def create(self, validated_data):
        return Tag.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.verification_codes = validated_data.get('verification_codes', instance.verification_codes)
        instance.strand = validated_data.get('strand', instance.strand)
        instance.f1 = validated_data.get('f1', instance.f1)
        instance.f2 = validated_data.get('f2', instance.f2)
        instance.f3 = validated_data.get('f3', instance.f3)
        
        instance.save()
        return instance
    class Meta:
        model = Tag
        fields = '__all__'