from .models import MainSlider
from rest_framework import serializers


class MainSliderSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = MainSlider
        fields = ('id', 'title', 'description', 'image', 'sequence', 'active')
