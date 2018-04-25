from django.shortcuts import render
from django.http import Http404


def sample(request, html_file):

    try:
        return render(request, 'sample/' + html_file)
    except Exception:
        raise Http404()
