from rest_framework import serializers
from backend.models import Data
class serializing_data(serializers.ModelSerializer):
    class Meta:
        model=Data
        fields='__all__'
