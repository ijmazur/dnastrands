from urllib.request import Request
from rest_framework.response import Response
from rest_framework import viewsets
from rest_framework import status
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework import permissions
from rest_framework.views import APIView
from rest_framework.generics import get_object_or_404
from generation import simple_tag, bits
from core.models import MainUser, SecondUser, Tag, Bit
from core.serializers import MainUserSerializer, SecondUserSerializer, TagSerializer, BitSerializer

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
        
        print("request user", request.user)
        print("request", request)
        be_data = simple_tag.generate()
        
        print("request user id", request.user.id)
        be_data['owner'] = request.user.id
        serializer = TagSerializer(data = be_data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()


        tags = Tag.objects.all()
        print("tags", tags)
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


class OwnerView(APIView):
    def get(self, request):
        user = request.user
        tags = Tag.objects.filter(owner=user)
        serializer = TagSerializer(tags, many=True)
        return Response({"Tags": serializer.data})


class BitViewSet(APIView):    
    def get(self, request, pk=None):
        if pk:
            bit = get_object_or_404(Bit.objects.all(), pk=pk)
            serializer = BitSerializer(bit)
            return Response({"Bit": serializer.data})
        
        print("request user", request.user)
        print("request", request)
        be_data = bits.generate()
        
        print("request user id", request.user.id)
        be_data['owner'] = request.user.id
        serializer = BitSerializer(data = be_data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()

        bitss = Bit.objects.all()
        print("bits", bitss)
        serializer = BitSerializer(bitss, many=True)
        return Response({"Bits": serializer.data})

    def post(self, request):
        bit = request.data.get('Bit')
        serializer = BitSerializer(data=bit)
        if serializer.is_valid(raise_exception=True):
            tag_saved = serializer.save()
        return Response({"success": "Bit '{}' created successfully".format(tag_saved.verification_codes)})

    def delete(self, request, pk):
        bit = get_object_or_404(Bit.objects.all(), pk=pk)
        bit.delete()
        return Response({"message": "Bit with id `{}` has been deleted.".format(pk)},status=204)


class BitOwnerView(APIView):
    def get(self, request):
        user = request.user
        bit = Bit.objects.filter(owner=user)
        serializer = BitSerializer(bit, many=True)
        return Response({"Bis": serializer.data})