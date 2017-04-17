from django.shortcuts import render
from rest_framework import viewsets, filters
from .models import MainSlider, ContactInfo, Newsletter
from .serializers import MainSliderSerializer, ContactInfoSerializer, NewsletterSerializer
from .filters import ContactInfoFilterSet


def home(request):
    return render(request, 'index.html')


class MainSliderViewSet(viewsets.ModelViewSet):
    queryset = MainSlider.actives.all()
    serializer_class = MainSliderSerializer


class ContactInfoViewSet(viewsets.ModelViewSet):
    queryset = ContactInfo.actives.all()
    serializer_class = ContactInfoSerializer
    filter_backends = (filters.DjangoFilterBackend,)
    filter_class = ContactInfoFilterSet


class NewsletterViewSet(viewsets.ModelViewSet):
    queryset = Newsletter.actives.all()
    serializer_class = NewsletterSerializer
