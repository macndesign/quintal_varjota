from .models import (MainSlider, ContactInfo, OperatingHours, SocialNetworkInfo, Card, Newsletter,
                     AboutHouseImage, AboutHouseDescription, AboutHouse, MenuItem, Menu, RestaurantTable,
                     RestaurantReservation)
from rest_framework import serializers
from rest_framework.reverse import reverse


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


class AboutHouseImageSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = AboutHouseImage
        fields = ('id', 'title', 'description', 'image')


class AboutHouseDescriptionSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = AboutHouseDescription
        fields = ('id', 'title', 'description', 'image')


class AboutHouseSerializer(serializers.HyperlinkedModelSerializer):
    images_about_house = AboutHouseImageSerializer(
        read_only=True,
        many=True
    )
    descriptions_about_house = AboutHouseDescriptionSerializer(
        read_only=True,
        many=True
    )

    class Meta:
        model = AboutHouse
        fields = ('id', 'title', 'images_about_house', 'descriptions_about_house')


class MenuItemSerializer(serializers.HyperlinkedModelSerializer):
    links = serializers.SerializerMethodField()

    class Meta:
        model = MenuItem
        fields = ('id', 'title', 'description', 'image', 'thumb', 'links')

    def get_links(self, obj):
        request = self.context['request']
        return {
            'self': reverse(
                'menuitem-detail',
                kwargs={'pk': obj.pk},
                request=request
            )
        }


class MenuSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Menu
        fields = ('id', 'title', 'description')


class RestaurantTableSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = RestaurantTable
        fields = ('id', 'number', 'quantity', 'description', 'image')


class RestaurantReservationSerializer(serializers.HyperlinkedModelSerializer):
    tables = RestaurantTableSerializer(
        read_only=True,
        many=True
    )

    class Meta:
        model = RestaurantReservation
        fields = ('id', 'name', 'phone', 'email', 'quantity', 'time_stamped', 'tables')
