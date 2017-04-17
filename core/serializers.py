from .models import (MainSlider, ContactInfo, OperatingHours, SocialNetworkInfo, Card, Newsletter)
from rest_framework import serializers


class MainSliderSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = MainSlider
        fields = ('id', 'title', 'description', 'image', 'sequence')


class OperatingHoursSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = OperatingHours
        fields = ('id', 'week_day1', 'week_day2', 'hour1', 'hour2')


class SocialNetworkInfoSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = SocialNetworkInfo
        fields = ('id', 'name', 'link', 'bg_color')


class CardSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Card
        fields = ('id', 'name', 'image')


class ContactInfoSerializer(serializers.HyperlinkedModelSerializer):
    operating_hours = OperatingHoursSerializer(
        read_only=True,
        many=True,
    )
    socials = SocialNetworkInfoSerializer(
        read_only=True,
        many=True
    )
    cards = CardSerializer(
        read_only=True,
        many=True
    )

    class Meta:
        model = ContactInfo
        fields = ('id', 'name', 'email', 'evaluation_link', 'phone_service', 'phone_reservations', 'address',
                  'map_url', 'map_lat', 'map_lng', 'active', 'operating_hours', 'socials', 'cards')


class NewsletterSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Newsletter
        fields = ('id', 'name', 'email')
