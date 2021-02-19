# Generated by Django 3.0.11 on 2020-12-28 20:27

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Daten',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('Br', models.FloatField()),
                ('Pumpentyp', models.CharField(max_length=22)),
                ('Qn', models.FloatField()),
                ('Drehzahl', models.FloatField()),
                ('Lrd', models.FloatField()),
                ('NWDS', models.FloatField()),
                ('NWSS', models.FloatField()),
                ('Pn', models.FloatField()),
                ('B', models.FloatField()),
                ('M', models.FloatField()),
                ('V', models.FloatField()),
            ],
            options={
                'db_table': 'Daten',
            },
        ),
    ]
