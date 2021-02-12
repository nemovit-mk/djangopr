"""papDjango URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))"""
# from django.contrib import admin
from django.urls import path, include
from django.conf.urls import url
from . import views

# from django.contrib.auth.models import User
# from rest_framework import routers, serializers, viewsets, permissions

# Routers provide an easy way of automatically determining the URL conf.
# router = routers.DefaultRouter()
# router.register(r'pumps', views.UserViewSet, basename="pumps")

app_name = 'charts'
urlpatterns = [    
    # path('', include(router.urls)),
    path('', views.PumpenTableView.as_view(), name='index'),    
    path('npsh/', views.PumpenTableViewNPSH.as_view(), name='npsh'),  
    # path('/<int:pk>', views.PumpeDetailView.as_view(), name='pump-detail'),
    # path('<int:pumps_id>/select/', views.choose_pumps, name='select'),    
    path('cart/', views.cartView.as_view(), name='cart'),
    path('cart/add/<int:pk>/', views.item_add, name='item_add'),
    path('cart/add_npsh/<int:pk>/', views.npsh_add, name='npsh_add'),
    path('cart/remove/<int:pk>/', views.item_remove, name='item_remove'),
    path('cart/clear/', views.cart_clear, name='cart_clear'),
    
    path('pumps/', views.get_dots, name='get_dots'),
    path('npshList/', views.get_npsh, name='get_npsh'),
    
    # path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),

    path('jstest/', views.jsView.as_view(), name='jstest'),
    path('jstest/<int:pk>/', views.jsView.as_view(), name='jstest-id'),
    path('graph/', views.PumpsView.as_view(), name='select'),
    path('ajax/load-pumps/', views.load_pumps, name='ajax_load_pumps'),
    # path('api/call_points/', views.apiCallPoints, name='apiCallPoints'),
    # path('add/', views.PumpCreateView.as_view(), name='get_pump'),
]