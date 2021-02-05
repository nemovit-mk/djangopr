from django.contrib.auth.models import User, Group
from rest_framework import serializers
from .models import Item


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Item
        fields = ['curt_id', 'pump_id']

