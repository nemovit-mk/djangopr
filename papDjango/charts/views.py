# from django.shortcuts import render

# Home view
# from django.http import HttpResponse
from django.http import Http404
from django.views.generic import ListView, DetailView, CreateView, TemplateView
from django.urls import reverse_lazy
from .models import Cart, Item, Daten, ChartsTable, PumpsForm
from .models import ChartsFilterFormHelper, ChartsFilter
from django_tables2 import RequestConfig, SingleTableView
from django.core import serializers
from django.contrib.auth.mixins import LoginRequiredMixin
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from django.contrib.auth.backends import BaseBackend

from django.shortcuts import get_object_or_404, render
from django.shortcuts import redirect
from django.http import JsonResponse

from django.http import HttpResponse

# from rest_framework import viewsets
# from rest_framework import permissions
# from .serializers import UserSerializer
# from rest_framework.response import Response
# from rest_framework import generics

class cartView(LoginRequiredMixin, BaseBackend, SingleTableView):
    model = Cart
    context_object_name = 'pumpe_list'
    template_name = 'charts/js.html' 
    def get_queryset(self, **kwargs):
        cart, created = Cart.objects.get_or_create(user = self.request.user)
        cart.refresh_from_db()
        try:
            items = Item.objects.select_related('pump').filter(cart = cart)
            return items#Daten.objects.select_related('id__').filter(cart = cart)
        except Item.DoesNotExist:
            return None

class activeCart(object):           
    def __init__(self, request):
        self.cart, created = Cart.objects.get_or_create(user = request.user)
        self.cart.refresh_from_db()
    def add(self, pump_id):
        pump = Daten.objects.filter(id=pump_id).first()
        item = Item.objects.create(cart=self.cart, pump=pump)
    def remove(self, item_id):
        item = Item.objects.get(cart=self.cart, id=item_id)
        if item:
            item.delete()
    def clear(self):
        self.cart.item_set.all().delete()
    def get(self):        
        items = Item.objects.select_related('pump').filter(cart=self.cart)
        if items:
                return [item.pump for item in items]

@login_required(login_url="/accounts/login")
def get_dots(request):    
    cart = activeCart(request)    
    items = cart.get()
    data = serializers.serialize("json", items)
    return HttpResponse(data, content_type="application/json")

@login_required(login_url="/accounts/login")
def cart_clear(request):    
    cart = activeCart(request)
    cart.clear()
    return redirect('charts:cart')
            
@login_required(login_url="/accounts/login")
def item_add(request, pk):
    cart = activeCart(request)
    cart.add(pump_id=pk)
    return redirect('charts:cart')

@login_required(login_url="/accounts/login")
def item_remove(request, pk):
    cart = activeCart(request)
    cart.remove(item_id=pk)
    return redirect('charts:cart')
    # path('cart/add/<int:pk>/', views.item_add, name='item_add'),
    # path('cart/remove/<int:pk>/', views.item_remove, name='item_remove'),
    # path('cart/clear/', views.cart_clear, name='cart_clear'),


# @login_required(login_url="/accounts/login")
# def get_pumps_from_cart(request):    
#     cart = activeCart(request)
#     cart.get()
#     return redirect('charts:cart')

class PumpenTableView(LoginRequiredMixin, SingleTableView):
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

class jsView(LoginRequiredMixin, ListView):
    model = Daten    
    template_name = 'charts/js.html'
    # form_class = PumpsForm
    pkList = [3,4,5]    
    
    def get_context_data(self, **kwargs):
        # Call the base implementation first to get a context
        context = super().get_context_data(**kwargs)
        
        # Add in a QuerySet of all the books
        if self.pkList:
            pointsList = []
            for pk in self.pkList:
                point = Daten.objects.get(pk=pk)
                pointsList.append(point)
            context['pumps'] = serializers.serialize('json', pointsList)
        return context    
    # def post(self, request, *args, **kwargs):
    #     ids = self.request.POST.get('ids', "")
    #     # ids if string like "1,2,3,4"
    #     ids = ids.split(",")
    #     try:
    #         # Check ids are valid numbers
    #         ids = map(int, ids)
    #     except ValueError as e:
    #         return JsonResponse(status=400)
    #     # delete items
    #     self.model.objects.filter(id__in=ids)
    #     return JsonResponse({"status": "ok"}, status=204)

@login_required
def load_pumps(request):
    id = request.GET.get('pumpen')
    pumps = Daten.objects.filter(id=id)
    return render(request, 'charts/graph.html', {'selectedPumps': pumps})

# ViewSets define the view behavior.
# class UserViewSet(generics.ListAPIView): #viewsets.ModelViewSet):
#     # queryset = activeCart(context['request'])
#     serializer_class = UserSerializer    
#     permission_classes = [permissions.IsAuthenticated]
    
#     def get_queryset(self):
#         cart = activeCart(self.request)
#         items = cart.get()
#         return items 


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
    