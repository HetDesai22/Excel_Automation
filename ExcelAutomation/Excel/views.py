from django.shortcuts import render,redirect

# Create your views here.
def home(request):
    if request.method == 'POST':
        selected_task = request.POST.get('Operation')
        if selected_task == 'vlookup':
            return redirect('vlookup')
        elif selected_task == 'sum':
            return redirect('sum')
    return render(request, 'Excel/home.html')

def vlookup_view(request):
    return render(request,'Excel/vlookup.html')