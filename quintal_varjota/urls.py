"""quintal_varjota URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.10/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf import settings
from django.conf.urls import url, include
from django.conf.urls.static import static
from django.contrib import admin
from core import views
from maintenance.views import maintenance
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'main-slider', views.MainSliderViewSet)
router.register(r'contact-info', views.ContactInfoViewSet)
router.register(r'newsletter', views.NewsletterViewSet)
router.register(r'about-house', views.AboutHouseViewSet)
router.register(r'menu-item', views.MenuItemViewSet)
router.register(r'menu', views.MenuViewSet)

urlpatterns = [
    # Rest
    url(r'^api/', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),

    # Site
    url(r'^admin/', admin.site.urls),
    url(r'^site/', views.home),
    url(r'^$', maintenance),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
