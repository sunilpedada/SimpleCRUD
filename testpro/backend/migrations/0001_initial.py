# Generated by Django 3.0.5 on 2020-04-25 18:23

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Data',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=10)),
                ('shop_name', models.CharField(max_length=10)),
                ('status', models.TextField(max_length=200)),
            ],
        ),
    ]