from django.urls import include, path
from rest_framework import routers
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from core import views
from generation import simple_tag as tagging


router = routers.DefaultRouter()
router.register(r'mainuser', views.MainUserViewSet)
router.register(r'seconduser', views.SecondUserViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/token/user/', views.UserInfoView.as_view({'get': 'get_user_data'})),
    path('simple-tag/', views.TagViewSet.as_view(), name='generated_tag'),
    path('simple-tag/my-tags', views.OwnerView.as_view()),
    path('simple-tag/my-tags/<int:pk>', views.TagViewSet.as_view()),
]