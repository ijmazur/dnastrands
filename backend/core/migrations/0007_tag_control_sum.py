# Generated by Django 3.2.13 on 2022-10-05 07:02

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0006_auto_20221001_1056'),
    ]

    operations = [
        migrations.AddField(
            model_name='tag',
            name='control_sum',
            field=models.TextField(default=django.utils.timezone.now),
            preserve_default=False,
        ),
    ]