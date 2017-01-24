from django.db import models
from django.utils.translation import ugettext_lazy as _


class TimeStampedModel(models.Model):
    created = models.DateTimeField(_('Criado em'), auto_now_add=True)
    modified = models.DateTimeField(_('Modificado em'), auto_now=True)

    class Meta:
        abstract = True


class MainSlider(TimeStampedModel):
    title = models.CharField(_('Título'), max_length=75)
    description = models.TextField(_('Descrição'), blank=True)
    image = models.ImageField(_('Imagem'), upload_to='slider')
    sequence = models.IntegerField(_('Ordem'), default=0)
    active = models.BooleanField(_('Ativo'), default=True)

    class Meta:
        verbose_name = _('Banner Principal')
        verbose_name_plural = _('Banners Principais')

    def __str__(self):
        return self.title
