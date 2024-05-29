from django.urls import path, include
from .views import blogApiView ,blogPostApiView
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'blogs', blogApiView, basename='blogs')
router.register(r'blogposts', blogPostApiView, basename='blogpost')

urlpatterns = [
    path('', include(router.urls))
]