# from django.shortcuts import render

# Home view
# from django.http import HttpResponse
from django.http import Http404
from django.views.generic import ListView, DetailView, CreateView, TemplateView
from django.urls import reverse_lazy
from .models import Daten, ChartsTable, PumpsForm
from .models import ChartsFilterFormHelper, ChartsFilter
from django_tables2 import RequestConfig, SingleTableView

from django.shortcuts import get_object_or_404, render
from django.http import JsonResponse

class PumpenTableView(SingleTableView):
    model = Daten
    table_class = ChartsTable
    template_name = 'charts/charts_table.html'

    def get_queryset(self, **kwargs):
        return Daten.objects.all()

    def get_context_data(self, **kwargs):
        context = super(PumpenTableView, self).get_context_data(**kwargs)
        filter = ChartsFilter(self.request.GET, queryset=self.get_queryset(**kwargs))
        filter.form.helper = ChartsFilterFormHelper()
        table = ChartsTable(filter.qs)
        RequestConfig(self.request).configure(table)
        context['filter'] = filter
        context['table'] = table
        return context

class PumpsView(ListView):
    model = Daten    
    template_name = 'charts/dropdown_form.html'
    # form_class = PumpsForm

def load_pumps(request):
    id = request.GET.get('pumpen')
    pumps = Daten.objects.filter(id=id)
    return render(request, 'charts/graph.html', {'selectedPumps': pumps})

# class Pumpen(ListView):
#     model = Daten
#     context_object_name = 'pumpe_list'
#     selected_id = []

#     def get_selected(self, request, ):
#         choosed_pumps = get_object_or_404(choosed_pumps, pk=selected_id)
#         return render(request, 'charts/daten_list.html', {'choosed_pumps': choosed_pumps})

# class PumpeDetailView(DetailView):
#     model = Daten

# # def graph(request):
# #     return render(request, 'charts/graph.html')

# def choose_pumps(request, pump_id):
#     choosed_pumps = get_object_or_404(Daten, pk=pump_id)
#     return render(request, 'charts/daten_list.html', {'pumpe_list_2': choosed_pumps})

# def apiCallPoints(request):
#     data = Daten.objects.all()
#     return JsonResponse(list(("apple", "banana", "cherry")), safe=False)
    