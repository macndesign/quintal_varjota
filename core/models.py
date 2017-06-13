from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator
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
        ordering = ['sequence', '-created']

    def __str__(self):
        return self.title


class ContactInfo(TimeStampedModel):
    sequence = models.IntegerField(_('Ordem'), default=0)
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
        ordering = ['sequence', '-created']

    def __str__(self):
        return self.name


class OperatingHours(TimeStampedModel):
    sequence = models.IntegerField(_('Ordem'), default=0)
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
        ordering = ['sequence', '-created']

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

    sequence = models.IntegerField(_('Ordem'), default=0)
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
        ordering = ['sequence', '-created']

    def __str__(self):
        return self.name


class Card(TimeStampedModel):
    sequence = models.IntegerField(_('Ordem'), default=0)
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
        ordering = ['sequence', '-created']

    def __str__(self):
        return self.name


class Newsletter(TimeStampedModel):
    name = models.CharField(_('Nome'), max_length=75)
    email = models.EmailField(_('Email'), max_length=75)
    active = models.BooleanField(_('Ativo'), default=True)

    # Managers
    objects = models.Manager()
    actives = ActiveManager()

    class Meta:
        ordering = ['name']

    def __str__(self):
        return self.name


class AboutHouse(TimeStampedModel):
    sequence = models.IntegerField(_('Ordem'), default=0)
    title = models.CharField(_('Título'), max_length=75)
    active = models.BooleanField(_('Ativo'), default=True)

    # Managers
    objects = models.Manager()
    actives = ActiveManager()

    class Meta:
        verbose_name = _('Sobre a Casa')
        verbose_name_plural = _('Sobre as Casas')
        ordering = ['sequence', '-created']

    def __str__(self):
        return self.title


class AboutHouseImage(TimeStampedModel):
    sequence = models.IntegerField(_('Ordem'), default=0)
    title = models.CharField(_('Título'), max_length=75, blank=True)
    description = models.TextField(_('Descrição'), blank=True)
    image = models.ImageField(_('Imagem'))
    about_house = models.ForeignKey(
        AboutHouse,
        verbose_name=_('Imagem (Sobre a Casa)'),
        related_name='images_about_house'
    )
    active = models.BooleanField(_('Ativo'), default=True)

    # Managers
    objects = models.Manager()
    actives = ActiveManager()

    class Meta:
        verbose_name = _('Imagem (Sobre a Casa)')
        verbose_name_plural = _('Imagens (Sobre a Casa)')
        ordering = ['sequence', '-created']

    def __str__(self):
        return self.title


class AboutHouseDescription(TimeStampedModel):
    sequence = models.IntegerField(_('Ordem'), default=0)
    title = models.CharField(_('Título'), max_length=75, blank=True)
    description = models.TextField(_('Descrição'))
    image = models.ImageField(_('Imagem'), blank=True, null=True)
    about_house = models.ForeignKey(
        AboutHouse,
        verbose_name=_('Descrição (Sobre a Casa)'),
        related_name='descriptions_about_house'
    )
    active = models.BooleanField(_('Ativo'), default=True)

    # Managers
    objects = models.Manager()
    actives = ActiveManager()

    class Meta:
        verbose_name = _('Descrição (Sobre a Casa)')
        verbose_name_plural = _('Descrições (Sobre a Casa)')
        ordering = ['sequence', '-created']

    def __str__(self):
        res_desc = self.description[:75]
        return res_desc if len(res_desc) < 75 else '{}...'.format(res_desc[:75])


class Menu(TimeStampedModel):
    sequence = models.IntegerField(_('Ordem'), default=0)
    title = models.CharField(_('Título'), max_length=256)
    description = models.TextField(_('Descrição'))
    active = models.BooleanField(_('Ativo'), default=True)

    # Managers
    objects = models.Manager()
    actives = ActiveManager()

    class Meta:
        verbose_name = _('Nosso Sabor')
        verbose_name_plural = _('Nossos Sabores')
        ordering = ['sequence', '-created']

    def __str__(self):
        return self.title


class MenuItem(TimeStampedModel):
    sequence = models.IntegerField(_('Ordem'), default=0)
    title = models.CharField(_('Título'), max_length=256)
    description = models.TextField(_('Descrição'))
    image = models.ImageField(_('Imagem'))
    thumb = models.ImageField(_('Thumbnail'))
    active = models.BooleanField(_('Ativo'), default=True)
    menu = models.ForeignKey(
        Menu,
        verbose_name=_('Prato'),
        related_name='menu_items'
    )

    # Managers
    objects = models.Manager()
    actives = ActiveManager()

    class Meta:
        verbose_name = _('Prato')
        verbose_name_plural = _('Pratos')
        ordering = ['sequence', '-created']

    def __str__(self):
        return self.title


class RestaurantReservation(TimeStampedModel):
    name = models.CharField(_('Nome'), max_length=120)
    phone = models.CharField(_('Telefone'), help_text=_('(99) 99999-9999'), max_length=20, unique=True)
    email = models.EmailField(_('Email'), blank=True)
    quantity = models.IntegerField(
        _('Quantidade de Cadeiras'),
        validators=[MinValueValidator(1), MaxValueValidator(12)]
    )
    time_stamped = models.DateTimeField(_('Data e Hora'))
    active = models.BooleanField(_('Ativo'), default=False, help_text=_('Confirmação de reserva'))

    # Managers
    objects = models.Manager()
    actives = ActiveManager()

    class Meta:
        verbose_name = _('Reserva')
        verbose_name_plural = _('Reservas')
        ordering = ['-time_stamped', '-created']

    def __str__(self):
        return '{} - {} - {}/{}/{} às {}:{}h'.format(self.email if self.email else self.name, self.phone,
                                                     self.time_stamped.day, self.time_stamped.month,
                                                     self.time_stamped.year, self.time_stamped.hour,
                                                     self.time_stamped.minute)


class RestaurantTable(TimeStampedModel):
    sequence = models.IntegerField(_('Ordem'), default=0)
    number = models.IntegerField(_('Número da Mesa'), unique=True)
    quantity = models.IntegerField(_('Quantidade de Cadeiras'))
    description = models.TextField(_('Descrição'), blank=True)
    image = models.ImageField(_('Imagem da Mesa'), blank=True, null=True)
    active = models.BooleanField(_('Ativo'), default=True)

    reservations = models.ForeignKey(
        RestaurantReservation,
        verbose_name=_('Reserva'),
        related_name='tables',
        null=True,
        blank=True,
        on_delete=models.SET_NULL
    )

    # Managers
    objects = models.Manager()
    actives = ActiveManager()

    class Meta:
        verbose_name = _('Mesa')
        verbose_name_plural = _('Mesas')
        ordering = ['sequence', 'number', '-created']

    def __str__(self):
        return '{} - Quantity: {}'.format(self.number, self.quantity)
