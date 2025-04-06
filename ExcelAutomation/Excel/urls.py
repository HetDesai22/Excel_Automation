from django.urls import path
from . import views

urlpatterns = [
    path('',views.home, name='home'),
    path('vlookup/',views.vlookup_view,name='vlookup')
]