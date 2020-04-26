from rest_framework import routers
from backend.views import Details
from django.conf.urls import url,include
routing=routers.DefaultRouter()
routing.register('API',Details)
urlpatterns=[
url(r'^',include(routing.urls)),
]