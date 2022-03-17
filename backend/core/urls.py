from django.urls import include, path
from rest_framework import routers
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from core import views

router = routers.DefaultRouter()
router.register(r'mainuser', views.MainUserViewSet)
router.register(r'seconduser', views.SecondUserViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/token/user', views.UserInfoView.as_view({'get': 'get_user_data'})),
    # path('squads/my-squads', views.SquadViewSet.as_view({'get': 'get_my_squads'}))
]