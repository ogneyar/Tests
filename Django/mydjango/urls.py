from django.urls import path, include
import source.views


urlpatterns = [
    path("", source.views.index, name="index"),
    path("test/", source.views.test, name="test")
]
