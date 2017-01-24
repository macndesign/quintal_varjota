from django.contrib import admin
from core.models import MainSlider


@admin.register(MainSlider)
class MainSliderAdmin(admin.ModelAdmin):
    pass
