from rest_framework import serializers
from .models import PlayUser


class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(style={'input_type': 'password'}, write_only=True)
    password2 = serializers.CharField(style={'input_type': 'password'}, write_only=True)

    class Meta:
        model = PlayUser
        fields = ('email', 'password', 'password2', 'first_name', 'last_name', 'avatar', 'city',
                  'country', 'age')
        lookup_field = 'email'

    def create(self, validated_data):
        password = validated_data['password']
        password2 = validated_data['password2']

        if password != password2:
            raise serializers.ValidationError({'password': 'Passwords do not match.'})
        else:
            validated_data.pop('password2')
        
        user = super().create(validated_data)
        user.set_password(validated_data['password'])
        user.save()
        return user
    
    def update(self, instance, validated_data):
        user = super().update(instance, validated_data)
        try:
            user.set_password(validated_data['password'])
            user.save()
        except KeyError:
            pass
        return user

class StudentSerializer(serializers.ModelSerializer):
    password = serializers.CharField(style={'input_type': 'password'}, write_only=True)
    password2 = serializers.CharField(style={'input_type': 'password'}, write_only=True)

    class Meta:
        model = PlayUser
        fields = ('email', 'password', 'password2', 'first_name', 'last_name', 'avatar', 'city',
                  'country', 'age', 'grade', 'school')
        lookup_field = 'email'

    def create(self, validated_data):
        password = validated_data['password']
        password2 = validated_data['password2']

        validated_data['type'] = 'student'

        if password != password2:
            raise serializers.ValidationError({'password': 'Passwords do not match.'})
        else:
            validated_data.pop('password2')

        user = super().create(validated_data)
        user.set_password(validated_data['password'])
        user.save()
        return user

    def update(self, instance, validated_data):
        user = super().update(instance, validated_data)
        try:
            user.set_password(validated_data['password'])
            user.save()
        except KeyError:
            pass
        return user


class TeacherSerializer(serializers.ModelSerializer):
    password = serializers.CharField(style={'input_type': 'password'}, write_only=True)
    password2 = serializers.CharField(style={'input_type': 'password'}, write_only=True)

    class Meta:
        model = PlayUser
        fields = ('email', 'password', 'password2', 'first_name', 'last_name', 'avatar', 'city',
                  'country', 'age', 'school')
        lookup_field = 'email'

    def create(self, validated_data):
        password = validated_data['password']
        password2 = validated_data['password2']

        validated_data['type'] = 'teacher'

        if password != password2:
            raise serializers.ValidationError({'password': 'Passwords do not match.'})
        else:
            validated_data.pop('password2')
    
        user = super().create(validated_data)
        user.set_password(validated_data['password'])
        user.save()
        return user

    def update(self, instance, validated_data):
        user = super().update(instance, validated_data)
        try:
            user.set_password(validated_data['password'])
            user.save()
        except KeyError:
            pass
        return user
