from rest_framework.response import Response
from rest_framework import viewsets
from rest_framework import status
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework import permissions
from rest_framework.views import APIView
from rest_framework.generics import get_object_or_404
from generation import simple_tag
from core.models import MainUser, SecondUser, Tag
from core.serializers import MainUserSerializer, SecondUserSerializer, TagSerializer

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


class TagViewSet(APIView):
    # def get(self, request,):
    #     response = simple_tag.return_to_api()
    #     print("response", response)
    #     return Response(response)
        
    def get(self, request, pk=None):
        if pk:
            tag = get_object_or_404(Tag.objects.all(), pk=pk)
            serializer = TagSerializer(tag)
            return Response({"Tag": serializer.data})
        tags = Tag.objects.all()
        serializer = TagSerializer(tags, many=True)
        return Response({"Tags": serializer.data})

    def post(self, request):
        tag = request.data.get('Tag')
        serializer = TagSerializer(data=tag)
        if serializer.is_valid(raise_exception=True):
            tag_saved = serializer.save()
        return Response({"success": "Tag '{}' created successfully".format(tag_saved.verification_codes)})

    def delete(self, request, pk):
        tag = get_object_or_404(Tag.objects.all(), pk=pk)
        tag.delete()
        return Response({"message": "Tag with id `{}` has been deleted.".format(pk)},status=204)
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