# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-05-27 20:04
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0012_auto_20170527_1959'),
    ]

    operations = [
        migrations.AlterField(
            model_name='restaurantreservation',
            name='email',
            field=models.EmailField(blank=True, max_length=254, verbose_name='Email'),
        ),
        migrations.AlterField(
            model_name='restaurantreservation',
            name='phone',
            field=models.CharField(help_text='(99) 99999-9999', max_length=20, unique=True, verbose_name='Telefone'),
        ),
    ]
