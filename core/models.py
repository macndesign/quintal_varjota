from django.db import models
from django.utils.translation import ugettext_lazy as _


class ActiveManager(models.Manager):
    def get_queryset(self):
        return super(ActiveManager, self).get_queryset().filter(active=True)


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

    # Managers
    objects = models.Manager()
    actives = ActiveManager()

    class Meta:
        verbose_name = _('Banner Principal')
        verbose_name_plural = _('Banners Principais')

    def __str__(self):
        return self.title


class ContactInfo(TimeStampedModel):
    name = models.CharField(_('Nome da Empresa'), max_length=75)
    email = models.EmailField(_('Email da Empresa'), max_length=75)
    evaluation_link = models.URLField(
        _('Link para Avaliação'),
        max_length=256,
        help_text=_('TripAdvisor'),
        blank=True
    )
    phone_service = models.CharField(
        _('Telefone para Atendimento'),
        max_length=17,
        help_text=_('+99 99 99999-9999 ou (99) 99999-9999'),
        blank=True
    )
    phone_reservations = models.CharField(
        _('Telefone para Reservas'),
        max_length=17,
        help_text=_('+99 99 99999-9999 ou (99) 99999-9999'),
        blank=True
    )
    address = models.TextField(_('Endereço'), blank=True)
    map_url = models.URLField(_('Google Maps URL'), max_length=256, blank=True)
    map_lat = models.FloatField(_('Mapa Latitude'), blank=True, null=True)
    map_lng = models.FloatField(_('Mapa Longitude'), blank=True, null=True)
    active = models.BooleanField(_('Ativo'), default=True)

    # Managers
    objects = models.Manager()
    actives = ActiveManager()

    class Meta:
        verbose_name = _('Informação de Contato')
        verbose_name_plural = _('Informações de Contato')

    def __str__(self):
        return self.name


class OperatingHours(TimeStampedModel):
    week_day1 = models.CharField(_('Dia da semana 1'), max_length=75)
    week_day2 = models.CharField(_('Dia da semana 2'), max_length=75, blank=True)
    hour1 = models.TimeField(_('Hora 1'))
    hour2 = models.TimeField(_('Hora 2'))
    contact_info = models.ForeignKey(
        ContactInfo,
        verbose_name=_('Horário de Funcionamento'),
        related_name='operating_hours'
    )
    active = models.BooleanField(_('Ativo'), default=True)

    # Managers
    objects = models.Manager()
    actives = ActiveManager()

    class Meta:
        verbose_name = _('Horário de Funcionamento')
        verbose_name_plural = _('Horários de Funcionamento')

    def __str__(self):
        return self.week_day1


class SocialNetworkInfo(TimeStampedModel):
    FACEBOOK = 'facebook'
    INSTAGRAM = 'instagram'
    TWITTER = 'twitter'
    GOOGLE_PLUS = 'google-plus'
    YOUTUBE = 'youtube-play'

    SOCIAL_CHOICES = (
        (FACEBOOK, 'Facebook'),
        (INSTAGRAM, 'Instagram'),
        (TWITTER, 'Twitter'),
        (GOOGLE_PLUS, 'Google Plus'),
        (YOUTUBE, 'YouTube'),
    )

    name = models.CharField(_('Nome'), max_length=75, choices=SOCIAL_CHOICES)
    link = models.URLField(_('Link'), max_length=256)
    bg_color = models.CharField(
        _('Cor de Fundo'),
        help_text='Insira um valor de cor hexadecimal. Ex.: #999999',
        max_length=7
    )
    contact_info = models.ForeignKey(
        ContactInfo,
        verbose_name=_('Informações de Contato'),
        related_name='socials'
    )
    active = models.BooleanField(_('Ativo'), default=True)

    # Managers
    objects = models.Manager()
    actives = ActiveManager()

    class Meta:
        verbose_name = _('Rede Social')
        verbose_name_plural = _('Redes Sociais')

    def __str__(self):
        return self.name


class Card(TimeStampedModel):
    name = models.CharField(_('Nome'), max_length=75)
    image = models.ImageField(_('Imagem'), null=True, blank=True)
    contact_info = models.ForeignKey(
        ContactInfo,
        verbose_name=_('Informações de Contato'),
        related_name='cards'
    )
    active = models.BooleanField(_('Ativo'), default=True)

    # Managers
    objects = models.Manager()
    actives = ActiveManager()

    class Meta:
        verbose_name = _('Cartão')
        verbose_name_plural = _('Cartões')

    def __str__(self):
        return self.name
