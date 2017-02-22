from django.shortcuts import render
from rest_framework import viewsets
from .models import MainSlider
from .serializers import MainSliderSerializer


def home(request):
    return render(request, 'index.html')


class MainSliderViewSet(viewsets.ModelViewSet):
    queryset = MainSlider.objects.all()
    serializer_class = MainSliderSerializer
