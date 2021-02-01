from django.db import models
import django_tables2 as table
from django.utils.safestring import mark_safe


import django_filters
from django import forms
from crispy_forms.helper import FormHelper
from crispy_forms.layout import Layout, Submit, Row, Column

# Create your models here.
class Daten(models.Model):
	id = models.AutoField(primary_key=True)
	Br = models.FloatField()
	Pumpentyp = models.CharField(max_length=22)
	Qn = models.FloatField()
	Drehzahl = models.FloatField()
	Lrd = models.FloatField()
	NWDS = models.FloatField()
	NWSS = models.FloatField()
	Pn = models.FloatField()
	B = models.FloatField()
	M = models.FloatField()
	V = models.FloatField()
	H1 = models.FloatField()
	Q1 = models.FloatField()
	H2 = models.FloatField()
	Q2 = models.FloatField()
	H3 = models.FloatField()
	Q3 = models.FloatField()
	H4 = models.FloatField()
	Q4 = models.FloatField()
	H5 = models.FloatField()
	Q5 = models.FloatField()
	H6 = models.FloatField()
	Q6 = models.FloatField()
	H7 = models.FloatField()
	Q7 = models.FloatField()
	class Meta:
		db_table = 'Daten'
		managed = False
	def __str__(self):
		return self.Pumpentyp
	def as_json(self):
		return dict(
			id = self.id,
			typ = self.Pumpentyp,
			n = self.Drehzahl,
			h1 = self.H1,
			q1 = self.Q1,
			h2 = self.H2,
			q2 = self.Q2,
			h3 = self.H3,
			q3 = self.Q3,
			h4 = self.H4,
			q4 = self.Q4,
			h5 = self.H5,
			q5 = self.Q5,
			h6 = self.H6,
			q6 = self.Q6,
			h7 = self.H7,
			q7 = self.Q7
		)

class PumpsForm(forms.ModelForm):
    class Meta:
        model = Daten
        fields = ('Pumpentyp',)
        template_name = "dropdown_form.html"
		
		
class ChartsTable(table.Table):
    # def render_name(self, value, record):
    #     url = record.get_absolute_url()
    #     return mark_safe('<a href="%s">%s</a>' % (url, record))
    class Meta:
        model = Daten		
        template_name = "django_tables2/bootstrap.html"
        fields = ('Pumpentyp', 'Drehzahl', 'Qn', )

class ChartsFilter(django_filters.FilterSet):
    # attribute1 = django_filters.NumberFilter(lookup_type='exact')
    Pumpentyp = django_filters.CharFilter(lookup_expr='icontains')
    class Meta:
        model = Daten
        fields = ('Pumpentyp', )

class ChartsFilterFormHelper(FormHelper):
	model = Daten
	form_method = 'GET'
	layout = Layout(
        'Pumpentyp',
        Submit('submit', 'Apply Filter'),
    )