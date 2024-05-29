from rest_framework import serializers
from .models import blog, blogPost

class blogSerializer(serializers.ModelSerializer):
    class Meta:
        model = blog
        fields = '__all__'
class blogPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = blogPost
        fields = '__all__'