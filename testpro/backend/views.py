from django.shortcuts import render
from rest_framework import viewsets
from backend.models import Data
from backend.serializers import serializing_data
# Create your views here.
class Details(viewsets.ModelViewSet):
    queryset=Data.objects.all()
    serializer_class=serializing_data