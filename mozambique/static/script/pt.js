/**
 * @requires GeoExt/Lang.js
 */

GeoExt.Lang.add("pt", {

    "gxp.menu.LayerMenu.prototype": {
        layerText: "Camada"
    },

    "gxp.plugins.AddLayers.prototype": {
        addActionMenuText: "Adicionar Camadas",
        addActionTip: "Adicionar Camadas",
        addServerText: "Add a New Server",
        addButtonText: "Adicionar um novo servidor",
        untitledText: "Sem título",
        addLayerSourceErrorText: "Erro ao obter recursos de WMS ({msg}). \ NPor favor, verifique a url e tente novamente.",
        availableLayersText: "Camadas disponíveis",
        expanderTemplateText: "Resumo <p> <b>: </ b> {abstract} </ p>",
        panelTitleText: "Título",
        layerSelectionText: "Ver dados disponíveis a partir de:",
        doneText: "Feito",
        uploadText: "Carregar camadas"
    },
    
    "gxp.plugins.BingSource.prototype": {
        title: "Camadas Bing",
        roadTitle: "Estradas do Bing",
        aerialTitle: "Bing aérea",
        labeledAerialTitle: "Bing Aerial With Labels"
    },

    "gxp.plugins.FeatureEditor.prototype": {
        splitButtonText: "Editar",
        createFeatureActionText: "Criar",
        editFeatureActionText: "Modificar",
        createFeatureActionTip: "Criar um novo recurso",
        editFeatureActionTip: "Editar recurso existente"
    },
    
    "gxp.plugins.FeatureGrid.prototype": {
        displayFeatureText: "Mostrar no mapa",
        firstPageTip: "Primeira página",
        previousPageTip: "Página anterior",
        zoomPageExtentTip: "Ampliar a extensão da página",
        nextPageTip: "Próxima página",
        lastPageTip: "Última página",
        totalMsg: "Itens {1} para {2} de {0}"
    },

    "gxp.plugins.GoogleEarth.prototype": {
        menuText: "Espectador 3D",
        tooltip: "Mudar para 3D Viewer"
    },
    
    "gxp.plugins.GoogleSource.prototype": {
        title: "Camadas do Google",
        roadmapAbstract: "Mostrar mapa de ruas",
        satelliteAbstract: "Mostrar imagens de satélite",
        hybridAbstract: "Mostrar imagens com nomes de ruas",
        terrainAbstract: "Espectáculo de rua mapa com o terreno"
    },

    "gxp.plugins.LayerProperties.prototype": {
        menuText: "Propriedades da Camada",
        toolTip: "Propriedades da Camada"
    },
    
    "gxp.plugins.LayerTree.prototype": {
        shortTitle: "Camadas",
        rootNodeText: "Camadas",
        overlayNodeText: "Sobreposições",
        baseNodeText: "Camadas de base"
    },

    "gxp.plugins.Legend.prototype": {
        menuText: "Mostrar legenda",
        tooltip: "Mostrar legenda"
    },

    "gxp.plugins.LoadingIndicator.prototype": {
        loadingMapMessage: "Carregando mapa..."
    },

    "gxp.plugins.MapBoxSource.prototype": {
        title: "Camadas MapBox",
        blueMarbleTopoBathyJanTitle: "Blue Marble Topography & Bathymetry (January)",
        blueMarbleTopoBathyJulTitle: "Blue Marble Topography & Bathymetry (July)",
        blueMarbleTopoJanTitle: "Blue Marble Topography (January)",
        blueMarbleTopoJulTitle: "Blue Marble Topography (July)",
        controlRoomTitle: "Control Room",
        geographyClassTitle: "Geography Class",
        naturalEarthHypsoTitle: "Natural Earth Hypsometric",
        naturalEarthHypsoBathyTitle: "Natural Earth Hypsometric & Bathymetry",
        naturalEarth1Title: "Natural Earth I",
        naturalEarth2Title: "Natural Earth II",
        worldDarkTitle: "World Dark",
        worldLightTitle: "World Light",
        worldPrintTitle: "World Print"
    },

    "gxp.plugins.Measure.prototype": {
        buttonText: "Medir",
        lengthMenuText: "Comprimento",
        areaMenuText: "Área",
        lengthTooltip: "Comprimento medida",
        areaTooltip: "Área medida",
        measureTooltip: "Medir"
    },

    "gxp.plugins.Navigation.prototype": {
        menuText: "Pan mapa",
        tooltip: "Pan mapa"
    },

    "gxp.plugins.NavigationHistory.prototype": {
        previousMenuText: "Para ampliar Extensão Anterior",
        nextMenuText: "Para ampliar próxima extensão",
        previousTooltip: "Para ampliar Extensão Anterior",
        nextTooltip: "Para ampliar próxima extensão"
    },

    "gxp.plugins.OSMSource.prototype": {
        title: "OpenStreetMap Camadas",
        mapnikAttribution: "Dados CC-By-SA por <a href='http://openstreetmap.org/'>OpenStreetMap</a>",
        osmarenderAttribution: "Dados CC-By-SA por <a href='http://openstreetmap.org/'>OpenStreetMap</a>"
    },

    "gxp.plugins.Print.prototype": {
        buttonText:"Imprimir",
        menuText: "Imprimir Mapa",
        tooltip: "Imprimir Mapa",
        previewText: "Visualizar Impressão",
        notAllNotPrintableText: "Nem todas as camadas pode ser impresso",
        nonePrintableText: "Nenhuma de suas camadas de mapas atuais pode ser impresso"
    },

    "gxp.plugins.MapQuestSource.prototype": {
        title: "MapQuest Camadas",
        osmAttribution: "Tiles cortesia de <a href='http://open.mapquest.co.uk/' target='_blank'>MapQuest</a> <img src='http://developer.mapquest.com/content/osm/mq_logo.png' border='0'>",
        osmTitle: "MapQuest OpenStreetMap",
        naipAttribution: "Tiles cortesia de <a href='http://open.mapquest.co.uk/' target='_blank'>MapQuest</a> <img src='http://developer.mapquest.com/content/osm/mq_logo.png' border='0'>",
        naipTitle: "MapQuest Imagens"
    },

    "gxp.plugins.QueryForm.prototype": {
        queryActionText: "Consulta",
        queryMenuText: "Consultar a camada",
        queryActionTip: "Consultar a camada selecionada",
        queryByLocationText: "Consulta por extensão atual do mapa",
        queryByAttributesText: "Consulta por atributos",
        queryMsg: "Consultando ...",
        cancelButtonText: "Cancelar",
        noFeaturesTitle: "Nenhuma ocorrência encontrada",
        noFeaturesMessage: "Sua consulta não retornou nenhum resultado."
    },

    "gxp.plugins.RemoveLayer.prototype": {
        removeMenuText: "Remover camada",
        removeActionTip: "Remover camada"
    },
    
    "gxp.plugins.Styler.prototype": {
        menuText: "Editar estilos",
        tooltip: "Gerenciar estilos de camada"

    },

    "gxp.plugins.WMSGetFeatureInfo.prototype": {
        buttonText:"Identificar",
        infoActionTip: "Obter informações Característica",
        popupTitle: "Informações característica"
    },

    "gxp.plugins.Zoom.prototype": {
        zoomMenuText: "Zoom caixa",
        zoomInMenuText: "Zoom in",
        zoomOutMenuText: "Zoom out",
        zoomTooltip: "Zoom arrastando uma caixa",
        zoomInTooltip: "Zoom in",
        zoomOutTooltip: "Zoom out"
    },
    
    "gxp.plugins.ZoomToExtent.prototype": {
        menuText: "Ampliar a Max Extensão",
        tooltip: "Ampliar a Max Extensão"
    },
    
    "gxp.plugins.ZoomToDataExtent.prototype": {
        menuText: "Ampliar a extensão da dados",
        tooltip: "Ampliar a extensão da dados"
    },

    "gxp.plugins.ZoomToLayerExtent.prototype": {
        menuText: "Ampliar a extensão da camada",
        tooltip: "Ampliar a extensão da camada"
    },
    
    "gxp.plugins.ZoomToSelectedFeatures.prototype": {
        menuText: "Zoom para recursos selecionados",
        tooltip: "Zoom para recursos selecionados"
    },

    "gxp.FeatureEditPopup.prototype": {
        closeMsgTitle: "Salvar alterações?",
        closeMsg: "Esta característica tem alterações não salvas. Gostaria de salvar as alterações?",
        deleteMsgTitle: "Excluir recurso?",
        deleteMsg: "Tem certeza de que quer apagar este recurso?",
        editButtonText: "Editar",
        editButtonTooltip: "Faça esse recurso editável",
        deleteButtonText: "Excluir",
        deleteButtonTooltip: "Excluir este recurso",
        cancelButtonText: "Cancelar",
        cancelButtonTooltip: "Parar de editar, descartar as alterações",
        saveButtonText: "Salvar",
        saveButtonTooltip: "Salvar alterações"
    },
    
    "gxp.FillSymbolizer.prototype": {
        fillText: "Preencher",
        colorText: "Cor",
        opacityText: "Opacidade"
    },
    
    "gxp.FilterBuilder.prototype": {
        builderTypeNames: ["qualquer", "todos", "nenhum", "nem todos"],,
        preComboText: "Combinar"
        postComboText: "dos seguintes:",
        addConditionText: "adicionar condição",
        addGroupText: "adicionar grupo",
        removeConditionText: "remover condição"
    },
    
    "gxp.grid.CapabilitiesGrid.prototype": {
        nameHeaderText : "Nome",
        titleHeaderText : "Título",
        queryableHeaderText : "Cuestinable",
        layerSelectionLabel: "Ver dados disponíveis a partir de:",
        layerAdditionLabel: "ou adicionar um novo servidor.",
        expanderTemplateText: "<p><b>Abstrato:</b> {abstract}</p>"
    },
    
    "gxp.PointSymbolizer.prototype": {
        graphicCircleText: "círculo",
        graphicSquareText: "praça",
        graphicTriangleText: "triângulo",
        graphicStarText: "estrela",
        graphicCrossText: "cruz",
        graphicXText: "x",
        graphicExternalText: "externo",
        urlText: "URL",
        opacityText: "Opacidade",
        symbolText: "Símbolo,
        sizeText: "Tamanho",
        rotationText: "Rotação"
    },

    "gxp.QueryPanel.prototype": {
        queryByLocationText: "Consulta por localização",
        currentTextText: "Extensão atual",
        queryByAttributesText: "Consulta por atributos",
        layerText: "Camada"
    },
    
    "gxp.RulePanel.prototype": {
        scaleSliderTemplate: "{scaleType} Escala 1:{scale}",
        labelFeaturesText: "Características da etiqueta",
        labelsText: "Etiqueta",
        basicText: "Básico",
        advancedText: "Avançado",
        limitByScaleText: "Limitar por escala",
        limitByConditionText: "Limitar por condição",
        symbolText: "Símbolo",
        nameText: "Nome"
    },
    
    "gxp.ScaleLimitPanel.prototype": {
        scaleSliderTemplate: "{scaleType} Escala 1:{scale}",
        minScaleLimitText: "Limite de escala mínima",
        maxScaleLimitText: "Limite máximo de escala"
    },
    
    "gxp.StrokeSymbolizer.prototype": {
        solidStrokeName: "sólido",
        dashStrokeName: "traço",
        dotStrokeName: "ponto",
        titleText: "Golpe",
        styleText: "Estilo",
        colorText: "Cor",
        widthText: "Largura",
        opacityText: "Opacidade"
    },
    
    "gxp.StylePropertiesDialog.prototype": {   
        titleText: "Geral",
        nameFieldText: "Nome",
        titleFieldText: "Título",
        abstractFieldText: "Abstrato"
    },
    
    "gxp.TextSymbolizer.prototype": {
        labelValuesText: "Valores de rótulo",
        haloText: "Halo",
        sizeText: "Tamanho"
    },
    
    "gxp.WMSLayerPanel.prototype": {
        aboutText: "Sobre",
        titleText: "Título",
        nameText: "Nome",
        descriptionText: "Descrição",
        displayText: "Exibir",
        opacityText: "Opacidade",
        formatText: "Formato",
        transparentText: "Transparente",
        cacheText: "Esconderijo",
        cacheFieldText: "Use a versão em cache",
        stylesText: "Estilos",
        infoFormatText: "Formato de informação",
        infoFormatEmptyText: "Selecione um formato"
    },

    "gxp.EmbedMapDialog.prototype": {
        publishMessage: "O seu mapa está pronto para ser publicado na web! Basta copiar o seguinte código HTML para incorporar o mapa no seu site:",
        heightLabel: 'Altura',
        widthLabel: 'Largura',
        mapSizeLabel: 'Tamanho do mapa',
        miniSizeLabel: 'Minúsculo',
        smallSizeLabel: 'Pequeno',
        premiumSizeLabel: 'Prêmio',
        largeSizeLabel: 'Grande'
    },
    
    "gxp.WMSStylesDialog.prototype": {
         addStyleText: "Adicionar",
         addStyleTip: "Adicionar um novo estilo",
         chooseStyleText: "Escolha o estilo",
         deleteStyleText: "Remover",
         deleteStyleTip: "Excluir o estilo selecionado",
         editStyleText: "Editar",
         editStyleTip: "Editar o estilo selecionado",
         duplicateStyleText: "Duplicar",
         duplicateStyleTip: "Duplicar o estilo selecionado",
         addRuleText: "Adicionar",
         addRuleTip: "Adicionar uma nova regra",
         newRuleText: "Nova Regra",
         deleteRuleText: "Remover",
         deleteRuleTip: "Excluir a regra selecionada",
         editRuleText: "Editar",
         editRuleTip: "Editar a regra selecionada",
         duplicateRuleText: "Duplicar",
         duplicateRuleTip: "Duplicar a regra selecionada",
         cancelText: "Cancelar",
         saveText: "Salvar",
         styleWindowTitle: "Estilo do usuário: {0}",
         ruleWindowTitle: "Regra estilo: {0}",
         stylesFieldsetTitle: "Estilos",
         rulesFieldsetTitle: "Regras"
    },

    "gxp.LayerUploadPanel.prototype": {
        titleLabel: "Título",
        titleEmptyText: "Título camada",
        abstractLabel: "Descrição",
        abstractEmptyText: "Descrição camada",
        fileLabel: "Dados",
        fieldEmptyText: "Procurar por arquivo de dados ...",
        uploadText: "Carregar",
        waitMsgText: "Upload de seus dados...",
        invalidFileExtensionText: "Extensão do arquivo deve ser: ",
        optionsText: "Opções",
        workspaceLabel: "Espaço de trabalho",
        workspaceEmptyText: "Espaço de trabalho padrão",
        dataStoreLabel: "Loja",
        dataStoreEmptyText: "Criar nova loja",
        defaultDataStoreEmptyText: "Loja de dados padrão"
    },
    
    "gxp.NewSourceDialog.prototype": {
        title: "Adicionar Novo Servidor...",
        cancelText: "Cancelar",
        addServerText: "Adicionar servidor",
        invalidURLText: "igite uma URL válida para um ponto final de WMS (por exemplo http://example.com/geoserver/wms)",
        contactingServerText: "Contatando servidor ..."
    },

    "gxp.ScaleOverlay.prototype": { 
        zoomLevelText: "Nível de zoom"
    }

});
