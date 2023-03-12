from rest_framework import serializers
from .models import Answer


class AnswerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Answer
        fields = ["answer_1", "answer_2", "answer_3", "answer_4", "User"]

    def create(self, validated_data):
        return Answer.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.answer_1 = validated_data.get("answer_1", instance.answer_1)
        instance.answer_2 = validated_data.get("answer_2", instance.answer_2)
        instance.answer_3 = validated_data.get("answer_3", instance.answer_3)
        instance.answer_4 = validated_data.get("answer_4", instance.answer_4)
        instance.save()
        return instance
