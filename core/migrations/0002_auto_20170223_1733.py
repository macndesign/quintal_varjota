# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-02-23 17:33
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Card',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', models.DateTimeField(auto_now_add=True, verbose_name='Criado em')),
                ('modified', models.DateTimeField(auto_now=True, verbose_name='Modificado em')),
                ('name', models.CharField(max_length=75, verbose_name='Nome')),
                ('image', models.ImageField(upload_to='', verbose_name='Imagem')),
                ('active', models.BooleanField(default=True, verbose_name='Ativo')),
            ],
            options={
                'verbose_name': 'Cartão',
                'verbose_name_plural': 'Cartões',
            },
        ),
        migrations.CreateModel(
            name='ContactInfo',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', models.DateTimeField(auto_now_add=True, verbose_name='Criado em')),
                ('modified', models.DateTimeField(auto_now=True, verbose_name='Modificado em')),
                ('name', models.CharField(max_length=75, verbose_name='Nome da Empresa')),
                ('email', models.EmailField(max_length=75, verbose_name='Email da Empresa')),
                ('evaluation_link', models.URLField(blank=True, help_text='TripAdvisor', max_length=256, verbose_name='Link para Avaliação')),
                ('phone_service', models.CharField(blank=True, help_text='+99 99 99999-9999 ou (99) 99999-9999', max_length=17, verbose_name='Telefone para Atendimento')),
                ('phone_reservations', models.CharField(blank=True, help_text='+99 99 99999-9999 ou (99) 99999-9999', max_length=17, verbose_name='Telefone para Atendimento')),
                ('address', models.TextField(blank=True, verbose_name='Endereço')),
                ('map_url', models.URLField(blank=True, max_length=256, verbose_name='Google Maps URL')),
                ('map_lat', models.FloatField(blank=True, null=True, verbose_name='Mapa Latitude')),
                ('map_lng', models.FloatField(blank=True, null=True, verbose_name='Mapa Longitude')),
                ('active', models.BooleanField(default=True, verbose_name='Ativo')),
            ],
            options={
                'verbose_name': 'Informação de Contato',
                'verbose_name_plural': 'Informações de Contato',
            },
        ),
        migrations.CreateModel(
            name='OperatingHours',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', models.DateTimeField(auto_now_add=True, verbose_name='Criado em')),
                ('modified', models.DateTimeField(auto_now=True, verbose_name='Modificado em')),
                ('week_day1', models.CharField(max_length=75, verbose_name='Dia da semana 1')),
                ('week_day2', models.CharField(blank=True, max_length=75, verbose_name='Dia da semana 2')),
                ('hour1', models.TimeField(verbose_name='Hora 1')),
                ('hour2', models.TimeField(verbose_name='Hora 2')),
                ('active', models.BooleanField(default=True, verbose_name='Ativo')),
                ('contact_info', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='operating_hours', to='core.ContactInfo', verbose_name='Horário de Funcionamento')),
            ],
            options={
                'verbose_name': 'Horário de Funcionamento',
                'verbose_name_plural': 'Horários de Funcionamento',
            },
        ),
        migrations.CreateModel(
            name='SocialNetworkInfo',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', models.DateTimeField(auto_now_add=True, verbose_name='Criado em')),
                ('modified', models.DateTimeField(auto_now=True, verbose_name='Modificado em')),
                ('name', models.CharField(choices=[('facebook', 'Facebook'), ('instagram', 'Instagram'), ('twitter', 'Twitter'), ('google-plus', 'Google Plus'), ('youtube-play', 'YouTube')], max_length=75, verbose_name='Nome')),
                ('link', models.URLField(max_length=256, verbose_name='Link')),
                ('bg_color', models.CharField(help_text='Insira um valor de cor hexadecimal. Ex.: #999999', max_length=7, verbose_name='Cor de Fundo')),
                ('active', models.BooleanField(default=True, verbose_name='Ativo')),
                ('contact_info', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='socials', to='core.ContactInfo', verbose_name='Informações de Contato')),
            ],
            options={
                'verbose_name': 'Rede Social',
                'verbose_name_plural': 'Redes Sociais',
            },
        ),
        migrations.AddField(
            model_name='card',
            name='contact_info',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='cards', to='core.ContactInfo', verbose_name='Informações de Contato'),
        ),
    ]
