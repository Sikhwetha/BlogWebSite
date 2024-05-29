from django.contrib import admin
from .models import blog, blogPost

# Register your models here.
class blogAdmin(admin.ModelAdmin):
  
  admin.site.register(blog)
  admin.site.register(blogPost)
