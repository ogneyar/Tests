from django.shortcuts import render
from django.http import HttpResponse


def index(request):
    # return HttpResponse('Hello from Python!')
    return render(request, "index.html")

def test(request):    
    return render(request, "test.html")

