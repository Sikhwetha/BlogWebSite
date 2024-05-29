from .models import blog, blogPost
from .serializers import blogSerializer, blogPostSerializer
from rest_framework import viewsets
from rest_framework import mixins
from rest_framework.response import Response
# Create your views here.

class blogApiView(viewsets.GenericViewSet, mixins.ListModelMixin, mixins.RetrieveModelMixin):
    queryset = blog.objects.all().order_by('-published_date')
    serializer_class = blogSerializer
    lookup_field = 'id'

class blogPostApiView(viewsets.ModelViewSet):
    queryset = blogPost.objects.all().order_by('-published_date')
    serializer_class = blogPostSerializer
    lookup_field = 'id'

    def get_queryset(self):
        queryset = super().get_queryset()
        search_query = self.request.query_params.get('search', None)
        if search_query:
            queryset = queryset.filter(title__icontains=search_query) | queryset.filter(content__icontains=search_query)
        return queryset
