from import_export import resources
from import_export.admin import ImportExportModelAdmin
from import_export import fields
from django.contrib import admin
from core.models import (MainSlider, ContactInfo, OperatingHours, SocialNetworkInfo, Card, Newsletter,
                         AboutHouseDescription, AboutHouseImage, AboutHouse, MenuItem, Menu, RestaurantTable,
                         RestaurantReservation)


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


class NewsletterResource(resources.ModelResource):
    class Meta:
        model = Newsletter
        fields = ('name', 'email')


@admin.register(Newsletter)
class NewsletterAdmin(ImportExportModelAdmin):
    resource_class = NewsletterResource
    list_display = ('created', 'name', 'email')
    search_fields = ('name', 'email')
    ordering = ('-created',)


class AboutHouseDescriptionInline(admin.TabularInline):
    model = AboutHouseDescription


class AboutHouseImageInline(admin.TabularInline):
    model = AboutHouseImage


@admin.register(AboutHouse)
class AboutHouseAdmin(admin.ModelAdmin):
    inlines = [AboutHouseDescriptionInline, AboutHouseImageInline]


class MenuItemInline(admin.TabularInline):
    model = MenuItem


@admin.register(Menu)
class MenuAdmin(admin.ModelAdmin):
    inlines = [MenuItemInline]


@admin.register(RestaurantTable)
class RestaurantTableAdmin(admin.ModelAdmin):
    list_display = ('number', 'quantity', 'description', 'reservations')


class RestaurantTableInline(admin.TabularInline):
    model = RestaurantTable
    extra = 0
    readonly_fields = ('number', 'quantity', 'description', 'sequence', 'image')

    def has_add_permission(self, request):
        return False


@admin.register(RestaurantReservation)
class RestaurantReservationAdmin(admin.ModelAdmin):
    inlines = [RestaurantTableInline]
    list_display = ('name', 'email', 'phone', 'time_stamped')
