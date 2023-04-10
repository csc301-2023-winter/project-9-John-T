from django.contrib import admin
from .models import PlayUser
from django.contrib.auth.admin import UserAdmin


class UserAdminConfig(UserAdmin):
    model = PlayUser
    search_fields = ('email', 'first_name', 'last_name')
    list_filter = ('email', 'first_name', 'last_name')
    list_display = ('email', 'first_name', 'last_name', 'avatar', 'city', 'country', 'age', 'grade',
                    'school', 'homeroom_id', 'type')
    ordering = ('email',)
    fieldsets = (
        (None, {'fields': ('email', 'first_name',)}),
        ('Permissions', {'fields': ('is_staff', 'is_active')}),
        ('Personal', {'fields': ('avatar', 'age', 'city', 'country', 'grade', 'school')}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': (
                'email', 'first_name', 'last_name', 'password1', 'password2', 'avatar',
                'age', 'city', 'country', 'grade',
                'school', 'homeroom_id', 'type', 'is_active', 'is_staff')}
         ),
    )


admin.site.register(PlayUser, UserAdminConfig)
