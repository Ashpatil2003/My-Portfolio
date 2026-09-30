from django.shortcuts import render, redirect
from django.contrib import messages
from .models import ContactMessage


def home(request):

    if request.method == "POST":

        name = request.POST.get("name")
        email = request.POST.get("email")
        subject = request.POST.get("subject")
        message = request.POST.get("message")

        if name and email and message:

            ContactMessage.objects.create(
                name=name,
                email=email,
                subject=subject,
                message=message,
            )

            messages.success(
                request,
                "Thank you! Your message has been sent successfully."
            )

        else:
            messages.error(
                request,
                "Please fill in all required fields."
            )

        return redirect("home")

    return render(request, "portfolio/index.html")