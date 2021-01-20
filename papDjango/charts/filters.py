# from django.contrib.auth.models import User

import django_filters
import crispy_forms

class ChartsFilter(django_filters.FilterSet):
    attribute1 = django_filters.NumberFilter(lookup_type='exact')

    class Meta:
        model = Daten
        fields = ('Pumpentyp', )

class ChartsFilterFormHelper(crispy_forms.helper.FormHelper):
    form_method = 'GET'
    layout = Layout(
        'name',
        'attribute1',
        Submit('submit', 'Apply Filter'),
    )

# class UserFilter(django_filters.FilterSet):
#     class Meta:
#         model = User
#         fields = ['username', 'first_name', 'last_name', ]