from django.shortcuts import render
from rest_framework import viewsets, filters
from .models import MainSlider, ContactInfo, Newsletter, AboutHouse, MenuItem, Menu
from .serializers import (MainSliderSerializer, ContactInfoSerializer, NewsletterSerializer,
                          AboutHouseSerializer, MenuItemSerializer, MenuSerializer)
from .filters import ContactInfoFilterSet, AboutHouseFilterSet
from rest_framework.pagination import PageNumberPagination


class StandardResultsSetPagination(PageNumberPagination):
    page_size = 100
    page_size_query_param = 'page_size'
    max_page_size = 1000


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


class AboutHouseViewSet(viewsets.ModelViewSet):
    queryset = AboutHouse.actives.all()
    serializer_class = AboutHouseSerializer
    filter_backends = (filters.DjangoFilterBackend,)
    filter_class = AboutHouseFilterSet


class MenuItemViewSet(viewsets.ModelViewSet):
    queryset = MenuItem.actives.all()
    serializer_class = MenuItemSerializer
    pagination_class = StandardResultsSetPagination


class MenuViewSet(viewsets.ModelViewSet):
    queryset = Menu.actives.all()
    serializer_class = MenuSerializer
