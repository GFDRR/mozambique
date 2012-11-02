from django.conf.urls.defaults import *
from django.conf import settings
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from geonode.sitemap import LayerSitemap, MapSitemap
import geonode.proxy.urls
import geonode.maps.urls
from geonode.maps.models import Map

# Uncomment the next two lines to enable the admin:
from django.contrib import admin
admin.autodiscover()

js_info_dict = {
    'domain': 'djangojs',
    'packages': ('geonode',)
}

sitemaps = {
    "layer": LayerSitemap,
    "map": MapSitemap
}

maps_queryset = Map.objects.all().order_by('-id')[:5]


urlpatterns = patterns('',

    # Static pages
    url(r'^$', 'django.views.generic.simple.direct_to_template',
                {'template': 'index.html'}, name='home'),
    url(r'^help/$', 'django.views.generic.simple.direct_to_template',
                {'template': 'help.html'}, name='help'),
    url(r'^developer/$', 'django.views.generic.simple.direct_to_template',
                {'template': 'developer.html'}, name='dev'),
    url(r'^terms/$', 'django.views.generic.simple.direct_to_template',
                {'template': 'terms.html'}, name='terms'),
    url(r'^about/$', 'django.views.generic.simple.direct_to_template',
                {'template': 'about.html'}, name='about'),


    # Data views
    (r'^data/', include(geonode.maps.urls.datapatterns)),
    (r'^maps/', include(geonode.maps.urls.urlpatterns)),

    (r'^comments/', include('dialogos.urls')),
    (r'^ratings/', include('agon_ratings.urls')),

    # Accounts
    url(r'^accounts/ajax_login$', 'geonode.views.ajax_login',
                                       name='auth_ajax_login'),
    url(r'^accounts/ajax_lookup$', 'geonode.views.ajax_lookup',
                                       name='auth_ajax_lookup'),
    (r'^accounts/', include('registration.urls')),
    (r'^profiles/', include('profiles.urls')),
    (r'^avatar/', include('avatar.urls')),

    # Meta
    url(r'^lang\.js$', 'django.views.generic.simple.direct_to_template',
         {'template': 'lang.js', 'mimetype': 'text/javascript'}, name='lang'),
    url(r'^jsi18n/$', 'django.views.i18n.javascript_catalog',
                                  js_info_dict, name='jscat'),
    url(r'^sitemap\.xml$', 'django.contrib.sitemaps.views.sitemap',
                                  {'sitemaps': sitemaps}, name='sitemap'),
    (r'^i18n/', include('django.conf.urls.i18n')),
    (r'^admin/', include(admin.site.urls)), 
    (r'^rosetta/', include('rosetta.urls')),

    # Mozambique
    url(r'^adaptation$', 'django.views.generic.simple.direct_to_template',
                   {'template': 'adaptation.html'}, name='adaptation'),
    url(r'^about$', 'django.views.generic.simple.direct_to_template',
                   {'template': 'about.html'}, name='about'),
    url(r'^vulnerability$', 'django.views.generic.simple.direct_to_template',
                   {'template': 'vulnerability.html'}, name='vulnerability'),
    url(r'^resources$', 'django.views.generic.simple.direct_to_template',
                   {'template': 'resources.html'}, name='resources'),

    url(r'^tools$', 'django.views.generic.list_detail.object_list',
                   {'queryset': maps_queryset, 'template_name': 'tools.html'},
                   name='tools'),

    )

urlpatterns += geonode.proxy.urls.urlpatterns

urlpatterns += staticfiles_urlpatterns()
