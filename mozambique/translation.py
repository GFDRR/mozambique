from modeltranslation.translator import translator, TranslationOptions
from flatblocks.models import FlatBlock
from geonode.maps.models import Layer


class FlatBlockTO(TranslationOptions):
    fields = ('content',)


class LayerTO(TranslationOptions):
    fields = (
             'title',
             'edition',
             'abstract',
             'purpose',
             'constraints_other',
             'distribution_description',
             'data_quality_statement',
             'supplemental_information',
             )


translator.register(FlatBlock, FlatBlockTO)
#translator.register(Layer, LayerTO)

class ForceDefaultLanguageMiddleware(object):
    """
    Ignore Accept-Language HTTP headers

    This will force the I18N machinery to always choose settings.LANGUAGE_CODE
    as the default initial language, unless another one is set via sessions or cookies

    Should be installed *before* any middleware that checks request.META['HTTP_ACCEPT_LANGUAGE'],
    namely django.middleware.locale.LocaleMiddleware
    """
    def process_request(self, request):
        if request.META.has_key('HTTP_ACCEPT_LANGUAGE'):
            del request.META['HTTP_ACCEPT_LANGUAGE']
