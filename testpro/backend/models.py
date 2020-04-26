from django.db import models

# Create your models here.
class Data(models.Model):
    name=models.CharField(max_length=10)
    shop_name=models.CharField(max_length=10)
    status=models.TextField(max_length=200)