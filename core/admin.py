from django.contrib import admin
from core.models import MainSlider, ContactInfo, OperatingHours, SocialNetworkInfo, Card


@admin.register(MainSlider)
class MainSliderAdmin(admin.ModelAdmin):
    pass


class OperatingHoursInline(admin.TabularInline):
    model = OperatingHours


class SocialNetworkInfoInline(admin.TabularInline):
    model = SocialNetworkInfo


class CardInline(admin.TabularInline):
    model = Card


@admin.register(ContactInfo)
class ContactInfoAdmin(admin.ModelAdmin):
    inlines = [OperatingHoursInline, SocialNetworkInfoInline, CardInline]
