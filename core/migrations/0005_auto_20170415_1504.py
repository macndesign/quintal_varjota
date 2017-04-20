# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-04-15 15:04
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0004_abouthouse_abouthousedescription_abouthouseimage_newsletter'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='abouthouse',
            options={'ordering': ['sequence', '-created'], 'verbose_name': 'Sobre a Casa', 'verbose_name_plural': 'Sobre as Casas'},
        ),
        migrations.AlterModelOptions(
            name='abouthousedescription',
            options={'ordering': ['sequence', '-created'], 'verbose_name': 'Descrição (Sobre a Casa)', 'verbose_name_plural': 'Descrições (Sobre a Casa)'},
        ),
        migrations.AlterModelOptions(
            name='abouthouseimage',
            options={'ordering': ['sequence', '-created'], 'verbose_name': 'Imagem (Sobre a Casa)', 'verbose_name_plural': 'Imagens (Sobre a Casa)'},
        ),
        migrations.AlterModelOptions(
            name='card',
            options={'ordering': ['sequence', '-created'], 'verbose_name': 'Cartão', 'verbose_name_plural': 'Cartões'},
        ),
        migrations.AlterModelOptions(
            name='contactinfo',
            options={'ordering': ['sequence', '-created'], 'verbose_name': 'Informação de Contato', 'verbose_name_plural': 'Informações de Contato'},
        ),
        migrations.AlterModelOptions(
            name='mainslider',
            options={'ordering': ['sequence', '-created'], 'verbose_name': 'Banner Principal', 'verbose_name_plural': 'Banners Principais'},
        ),
        migrations.AlterModelOptions(
            name='newsletter',
            options={'ordering': ['name']},
        ),
        migrations.AlterModelOptions(
            name='operatinghours',
            options={'ordering': ['sequence', '-created'], 'verbose_name': 'Horário de Funcionamento', 'verbose_name_plural': 'Horários de Funcionamento'},
        ),
        migrations.AlterModelOptions(
            name='socialnetworkinfo',
            options={'ordering': ['sequence', '-created'], 'verbose_name': 'Rede Social', 'verbose_name_plural': 'Redes Sociais'},
        ),
        migrations.AddField(
            model_name='abouthouse',
            name='sequence',
            field=models.IntegerField(default=0, verbose_name='Ordem'),
        ),
        migrations.AddField(
            model_name='abouthousedescription',
            name='sequence',
            field=models.IntegerField(default=0, verbose_name='Ordem'),
        ),
        migrations.AddField(
            model_name='abouthouseimage',
            name='sequence',
            field=models.IntegerField(default=0, verbose_name='Ordem'),
        ),
        migrations.AddField(
            model_name='card',
            name='sequence',
            field=models.IntegerField(default=0, verbose_name='Ordem'),
        ),
        migrations.AddField(
            model_name='contactinfo',
            name='sequence',
            field=models.IntegerField(default=0, verbose_name='Ordem'),
        ),
        migrations.AddField(
            model_name='operatinghours',
            name='sequence',
            field=models.IntegerField(default=0, verbose_name='Ordem'),
        ),
        migrations.AddField(
            model_name='socialnetworkinfo',
            name='sequence',
            field=models.IntegerField(default=0, verbose_name='Ordem'),
        ),
    ]