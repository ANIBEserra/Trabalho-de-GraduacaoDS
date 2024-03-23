var StnP = L.marker([-23.443935,-46.923111]).bindPopup('Santana de Parnaíba'),
    Cajamar = L.marker([-23.3565, -46.8769]).bindPopup('Cajamar'),
    barueri    = L.marker([-23.511369, -46.872942]).bindPopup('Barueri'),
    itapevi    = L.marker([-23.549265, -46.933197]).bindPopup('Itapevi'),
    Pirapora    = L.marker([-23.3975, -47.0024]).bindPopup('Pirapora do bom Jesus');

//inserindo cidades em uma única variável
var citiesRadio = L.layerGroup([StnP, Cajamar, barueri, itapevi, Pirapora]);

// Atribuindo a variáveis Mapas base que serão inseridos
var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap'
});
    
var openTopoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: 'Map data: © OpenStreetMap contributors, SRTM | Map style: © OpenTopoMap (CC-BY-SA)'
});

var osmHOT = L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap contributors, Tiles style by Humanitarian OpenStreetMap Team hosted by OpenStreetMap France'
});


//configurações do mapa padrão
var map = L.map('mapid', {
    minZoom: 10,
    maxZoom: 18,
    center: [-23.443935,-46.923111],
    zoom: 11,
    layers: [osm, StnP], 
});

//atribuindo à uma única variável mapas base
var baseMaps = {
    "OpenStreetMap": osm,
    "OpenStreetMap.HOT": osmHOT,
};

//atribuindo à uma única variável Overlayers do mapa
var overlayMaps = {
    "Cities": citiesRadio,
};

//Objeto que permite controlar visualização de mapas layers
var layerControl = L.control.layers(baseMaps, overlayMaps).addTo(map);

//adicionando layers extras: base Open Top Map e over Parks 
layerControl.addBaseLayer(openTopoMap, "OpenTopoMap");

//barra de escala
var scale = L.control.scale();
scale.addTo(map);
