from rest_framework import serializers
from .models import homeroom

class HomeroomSerializer(serializers.ModelSerializer):
    class Meta:
        model = homeroom
        fields = ('homeroom_id', 'teacher_id')

    def create(self, validated_data):
        card = super().create(validated_data)
        card.save()
        return card

    def update(self, instance, validated_data):
        card = super().update(instance, validated_data)
        card.save()
        return card
