var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var lyr_MDEMichoacn_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "MDE Michoacán",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/MDEMichoacn_0.png",
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-11548075.481548, 2027591.058268, -11138960.891515, 2319822.849257]
                            })
                        });var format_GeoqumicaMich_1 = new ol.format.GeoJSON();
var features_GeoqumicaMich_1 = format_GeoqumicaMich_1.readFeatures(json_GeoqumicaMich_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GeoqumicaMich_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_GeoqumicaMich_1.addFeatures(features_GeoqumicaMich_1);var lyr_GeoqumicaMich_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GeoqumicaMich_1, 
                style: style_GeoqumicaMich_1,
                title: '<img src="styles/legend/GeoqumicaMich_1.png" /> Geoquímica Mich.'
            });var format_Pozo_P_1_2 = new ol.format.GeoJSON();
var features_Pozo_P_1_2 = format_Pozo_P_1_2.readFeatures(json_Pozo_P_1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pozo_P_1_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Pozo_P_1_2.addFeatures(features_Pozo_P_1_2);var lyr_Pozo_P_1_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Pozo_P_1_2, 
                style: style_Pozo_P_1_2,
                title: '<img src="styles/legend/Pozo_P_1_2.png" /> Pozo_P_1'
            });

lyr_MDEMichoacn_0.setVisible(true);lyr_GeoqumicaMich_1.setVisible(true);lyr_Pozo_P_1_2.setVisible(true);
var layersList = [baseLayer,lyr_MDEMichoacn_0,lyr_GeoqumicaMich_1,lyr_Pozo_P_1_2];
lyr_GeoqumicaMich_1.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'FE': 'FE', 'GA': 'GA', 'MG': 'MG', 'MN': 'MN', 'MO': 'MO', 'NI': 'NI', 'AU': 'AU', 'AG': 'AG', 'P': 'P', 'PB': 'PB', 'K': 'K', 'SE': 'SE', 'NA': 'NA', 'SB': 'SB', 'SC': 'SC', 'SN': 'SN', 'SR': 'SR', 'TL': 'TL', 'TE': 'TE', 'AL': 'AL', 'BE': 'BE', 'BI': 'BI', 'BA': 'BA', 'CD': 'CD', 'CA': 'CA', 'CO': 'CO', 'CU': 'CU', 'CR': 'CR', 'U': 'U', 'W': 'W', 'ZN': 'ZN', 'AS_': 'AS_', 'CAR_ID': 'CAR_ID', 'NMUESTRA': 'NMUESTRA', 'NUMEROHOJA': 'NUMEROHOJA', 'NOMBRE': 'NOMBRE', });
lyr_Pozo_P_1_2.set('fieldAliases', {'Temp': 'Temp', 'Litolog�a': 'Litolog�a', 'Geoqu�mica': 'Geoqu�mica', });
lyr_GeoqumicaMich_1.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'FE': 'TextEdit', 'GA': 'TextEdit', 'MG': 'TextEdit', 'MN': 'TextEdit', 'MO': 'TextEdit', 'NI': 'TextEdit', 'AU': 'TextEdit', 'AG': 'TextEdit', 'P': 'TextEdit', 'PB': 'TextEdit', 'K': 'TextEdit', 'SE': 'TextEdit', 'NA': 'TextEdit', 'SB': 'TextEdit', 'SC': 'TextEdit', 'SN': 'TextEdit', 'SR': 'TextEdit', 'TL': 'TextEdit', 'TE': 'TextEdit', 'AL': 'TextEdit', 'BE': 'TextEdit', 'BI': 'TextEdit', 'BA': 'TextEdit', 'CD': 'TextEdit', 'CA': 'TextEdit', 'CO': 'TextEdit', 'CU': 'TextEdit', 'CR': 'TextEdit', 'U': 'TextEdit', 'W': 'TextEdit', 'ZN': 'TextEdit', 'AS_': 'TextEdit', 'CAR_ID': 'TextEdit', 'NMUESTRA': 'TextEdit', 'NUMEROHOJA': 'TextEdit', 'NOMBRE': 'TextEdit', });
lyr_Pozo_P_1_2.set('fieldImages', {'Temp': 'TextEdit', 'Litolog�a': 'TextEdit', 'Geoqu�mica': 'TextEdit', });
lyr_GeoqumicaMich_1.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'FE': 'no label', 'GA': 'no label', 'MG': 'no label', 'MN': 'no label', 'MO': 'no label', 'NI': 'no label', 'AU': 'no label', 'AG': 'no label', 'P': 'no label', 'PB': 'no label', 'K': 'no label', 'SE': 'no label', 'NA': 'no label', 'SB': 'no label', 'SC': 'no label', 'SN': 'no label', 'SR': 'no label', 'TL': 'no label', 'TE': 'no label', 'AL': 'no label', 'BE': 'no label', 'BI': 'no label', 'BA': 'no label', 'CD': 'no label', 'CA': 'no label', 'CO': 'no label', 'CU': 'no label', 'CR': 'no label', 'U': 'no label', 'W': 'no label', 'ZN': 'no label', 'AS_': 'no label', 'CAR_ID': 'no label', 'NMUESTRA': 'no label', 'NUMEROHOJA': 'no label', 'NOMBRE': 'no label', });
lyr_Pozo_P_1_2.set('fieldLabels', {'Temp': 'no label', 'Litolog�a': 'no label', 'Geoqu�mica': 'no label', });
lyr_Pozo_P_1_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});