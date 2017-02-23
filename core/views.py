from django.shortcuts import render
from rest_framework import viewsets
from .models import MainSlider, ContactInfo
from .serializers import MainSliderSerializer, ContactInfoSerializer


def home(request):
    return render(request, 'index.html')


class MainSliderViewSet(viewsets.ModelViewSet):
    queryset = MainSlider.actives.all()
    serializer_class = MainSliderSerializer


class ContactInfoViewSet(viewsets.ModelViewSet):
    queryset = ContactInfo.actives.all()
    serializer_class = ContactInfoSerializer
