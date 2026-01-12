
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.http import JsonResponse
import os

def api_root(request):
    codespace_name = os.environ.get('CODESPACE_NAME', 'localhost')
    base_url = f"https://{codespace_name}-8000.app.github.dev" if codespace_name != 'localhost' else "http://localhost:8000"
    return JsonResponse({
        'activities': f'{base_url}/api/activities/',
        'users': f'{base_url}/api/users/',
        'teams': f'{base_url}/api/teams/',
        'leaderboard': f'{base_url}/api/leaderboard/',
        'workouts': f'{base_url}/api/workouts/',
    })

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', api_root),
    # path('api/activities/', ...),
    # path('api/users/', ...),
    # path('api/teams/', ...),
    # path('api/leaderboard/', ...),
    # path('api/workouts/', ...),
]
