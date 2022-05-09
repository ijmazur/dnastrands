from rest_framework.response import Response
from rest_framework import viewsets
from rest_framework import status
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework import permissions
from core.models import MainUser, SecondUser
from core.serializers import MainUserSerializer, SecondUserSerializer

# Create your views here.

class MainUserViewSet(viewsets.ModelViewSet):
    queryset = MainUser.objects.all()
    authentication_classes = [JWTAuthentication]
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = MainUserSerializer

class SecondUserViewSet(viewsets.ModelViewSet):
    queryset = SecondUser.objects.all()
    authentication_classes = []
    serializer_class = SecondUserSerializer

class UserInfoView(viewsets.ViewSet):
    authentication_classes = [JWTAuthentication]
    permission_classes = [permissions.IsAuthenticated]
    def get_user_data(self, request):
        user_id = int(request.user.id)
        if MainUser.objects.filter(pk=user_id).exists():
            user = MainUser.objects.get(pk=user_id)
            serializer = MainUserSerializer(user, many=False)
            response = serializer.data
            response['type'] = 'mainuser'
            return Response(response)
        elif SecondUser.objects.filter(pk=user_id).exists():
            user = SecondUser.objects.get(pk=user_id)
            serializer = SecondUserSerializer(user, many=False)
            response = serializer.data
            response['type'] = 'seconduser'
            return Response(response)

# def update_profile(request):
#     args = {}

#     if request.method == 'POST':
#         form = UpdateProfile(request.POST, instance=request.user)
#         form.actual_user = request.user
#         if form.is_valid():
#             form.save()
#     else:
#         form = UpdateProfile()

#     args['form'] = form
#     return render(request, 'profile/', args)