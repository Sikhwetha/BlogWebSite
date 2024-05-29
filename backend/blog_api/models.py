from django.db import models

# Create your models here.
class blog(models.Model):
    POST_CHOICES = [
        ('POPULAR', 'Popular'),
        ('STARTUPS', 'Startups'),
        ('SECURITY', 'Security'),
        ('AI', 'AI'),
        ('APPS', 'Apps'),
        ('TECH', 'Tech'),
    ]
    title = models.CharField(max_length=255)
    image = models.ImageField(upload_to='image', null=True, blank=True)
    category =  models.CharField(max_length=100, choices=POST_CHOICES,null=True, blank=True)
    author = models.CharField(max_length=100, default='')
    picture = models.ImageField(upload_to='author_pics/')
    published_date = models.DateTimeField(auto_now_add=True) 
    reading_time = models.IntegerField(help_text="Enter the estimated reading time in minutes")
    content = models.TextField(null=True, blank=True)
    contentTwo = models.TextField(null=True, blank=True)

    def __str__(self):
        return self.title

class blogPost(models.Model):
    POST_CHOICES = [
        ('POPULAR', 'Popular'),
        ('STARTUPS', 'Startups'),
        ('SECURITY', 'Security'),
        ('AI', 'AI'),
        ('APPS', 'Apps'),
        ('TECH', 'Tech'),
        ('TRENDING', 'Trending'),
        ('FOOD', 'Food'),
    ]
    title = models.CharField(max_length=255)
    image = models.ImageField(upload_to='post', null=True, blank=True)
    category =  models.CharField(max_length=100, choices=POST_CHOICES,null=True, blank=True)
    author = models.CharField(max_length=100, default='')
    picture = models.ImageField(upload_to='author_post/')
    published_date = models.DateTimeField(auto_now_add=True) 
    reading_time = models.IntegerField(help_text="Enter the estimated reading time in minutes")
    content = models.TextField(null=True, blank=True)
    contentTwo = models.TextField(null=True, blank=True)

    def __str__(self):
        return self.title