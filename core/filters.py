from django_filters import FilterSet
from django_filters.filters import BooleanFilter
from .models import ContactInfo


class ContactInfoFilterSet(FilterSet):
    active = BooleanFilter(name='active')

    class Meta:
        model = ContactInfo
        fields = ('active',)
