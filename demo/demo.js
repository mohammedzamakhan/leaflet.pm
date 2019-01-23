/* eslint-disable */
// Provide your access token
const accessToken =
    'pk.eyJ1IjoibWFwc29mc3VtaXQiLCJhIjoiY2l1ZDF3dHE5MDAxZDMwbjA0cTR3dG50eSJ9.63Xci-GKFikhAobboF0DVQ';

// set mapbox tile layer
const mapboxTiles1 = L.tileLayer(
    `https://api.mapbox.com/styles/v1/mapbox/streets-v9/tiles/{z}/{x}/{y}?access_token=${accessToken}`,
    {
        attribution:
            '&copy; <a href="https://www.mapbox.com/feedback/">Mapbox</a> &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    },
);
const mapboxTiles2 = L.tileLayer(
    `https://api.mapbox.com/styles/v1/mapbox/streets-v9/tiles/{z}/{x}/{y}?access_token=${accessToken}`,
    {
        attribution:
            '&copy; <a href="https://www.mapbox.com/feedback/">Mapbox</a> &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    },
);
const mapboxTiles3 = L.tileLayer(
    `https://api.mapbox.com/styles/v1/mapbox/streets-v9/tiles/{z}/{x}/{y}?access_token=${accessToken}`,
    {
        attribution:
            '&copy; <a href="https://www.mapbox.com/feedback/">Mapbox</a> &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    },
);

const map2 = L.map('example2')
    .setView([51.505, -0.09], 13)
    .addLayer(mapboxTiles1);
const map3 = L.map('example3')
    .setView([51.505, -0.09], 13)
    .addLayer(mapboxTiles2);
const map4 = L.map('example4')
    .setView([51.505, -0.09], 13)
    .addLayer(mapboxTiles3);
// map2.dragging.disable();

// map2.on('pm:create', function(e) {
//     // alert('pm:create event fired. See console for details');
//     console.log(e);

//     const layer = e.layer;
//     layer.on('pm:cut', function(ev) {
//         console.log('cut event on layer');
//         console.log(ev);
//     });
// });
// map2.on('pm:cut', function(e) {
//     console.log('cut event on map');
//     console.log(e);
// });
// map2.on('pm:remove', function(e) {
//     console.log('pm:remove event fired. See console for details');
//     // alert('pm:remove event fired. See console for details');
//     console.log(e);
// });
// map2.on('pm:drawstart', function(e) {
//     console.log(e);
//     console.log(e.workingLayer);
// });

const m1 = L.circleMarker([51.50313, -0.091223], { radius: 10 });
const m2 = L.marker([51.50614, -0.0989]);
const m3 = L.marker([51.50915, -0.096112], { pmIgnore: true });

const mGroup = L.layerGroup([m1, m2, m3]).addTo(map2);
// mGroup.pm.enable();

map2.pm.addControls({
    drawMarker: false,
    drawPolygon: true,
    editPolygon: false,
    drawPolyline: false,
    deleteLayer: true,
});
// map2.pm.addControls({
//     drawMarker: false,
//     drawPolygon: true,
//     editPolygon: false,
//     drawPolyline: false,
//     deleteLayer: false,
// });
// map2.pm.addControls({
//     drawMarker: true,
//     drawPolygon: false,
//     editPolygon: false,
//     drawPolyline: false,
//     deleteLayer: true,
// });
map2.pm.addControls({
    drawMarker: true,
    drawPolygon: true,
    editPolygon: true,
    drawPolyline: true,
    deleteLayer: true,
});

// map2.pm.disableDraw('Poly');
// map2.pm.enableDraw('Circle', {
//     snappable: true,
//     cursorMarker: true
// });

// map2.pm.enableDraw('Line', { allowSelfIntersection: false });
// map2.pm.enableDraw('Poly', { allowSelfIntersection: false });

map2.on('pm:globaleditmodetoggled', function(e) {
    // console.log(e);
});

// GEOSJON EXAMPLE
const geoJsonData = {
    type: 'FeatureCollection',
    features: [
        {
            type: 'Feature',
            properties: { customGeometry: { radius: 50 } },
            geometry: {
                type: 'Point',
                coordinates: [-0.152843, 51.486742, 77],
            },
        },
        {
            type: 'Feature',
            properties: { customGeometry: { radius: 20 } },
            geometry: {
                type: 'Point',
                coordinates: [-0.151727, 51.487472, 77],
            },
        },
        {
            type: 'Feature',
            properties: { customGeometry: { radius: 80 } },
            geometry: {
                type: 'Point',
                coordinates: [-0.153636, 51.486562, 77],
            },
        },
        {
            type: 'Feature',
            properties: {},
            geometry: {
                type: 'Polygon',
                coordinates: [
                    [
                        [-0.15369, 51.486973, 77],
                        [-0.153853, 51.48686, 77],
                        [-0.154183, 51.486968, 77],
                        [-0.154001, 51.487087, 77],
                        [-0.15369, 51.486973, 77],
                    ],
                ],
            },
        },
        {
            type: 'Feature',
            properties: {},
            geometry: {
                type: 'Polygon',
                coordinates: [
                    [
                        [-0.15252, 51.487201, 77],
                        [-0.152789, 51.487281, 77],
                        [-0.153025, 51.487097, 77],
                        [-0.152633, 51.487002, 77],
                        [-0.152448, 51.487088, 77],
                        [-0.15252, 51.487201, 77],
                    ],
                ],
            },
        },
        {
            type: 'Feature',
            properties: {},
            geometry: {
                type: 'Polygon',
                coordinates: [
                    [
                        [-0.154241, 51.487382, 77],
                        [-0.1545, 51.487608, 77],
                        [-0.154905, 51.487384, 77],
                        [-0.154343, 51.487322, 77],
                        [-0.154241, 51.487382, 77],
                    ],
                ],
            },
        },
        {
            type: 'Feature',
            properties: { customGeometry: { radius: 50 } },
            geometry: {
                type: 'Point',
                coordinates: [-0.153366, 51.487348, 77],
            },
        },
    ],
};

const theCollection = L.geoJson(geoJsonData, {
    pointToLayer: (feature, latlng) => {
        if (feature.properties.customGeometry) {
            return new L.Circle(
                latlng,
                feature.properties.customGeometry.radius,
            );
        } else {
            return new L.Marker(latlng);
        }
    },
    // onEachFeature: (feature, layer) => {
    //     layer.addTo(map2);
    // },
});

theCollection.addTo(map2);

const b = theCollection.getBounds();
map2.fitBounds(b);

console.log(theCollection);

theCollection.on('pm:edit', function(e) {
    console.log(e);
});

theCollection.on('pm:dragstart', function(e) {
    console.log(e);
});

// const geoJsonButton = document.getElementById('test-geojson');
// const geoJsonLayer = L.geoJson(null, { pmIgnore: false });
// geoJsonLayer.addTo(map2);
// geoJsonLayer.addData(geoJsonData);

// geoJsonLayer.pm.toggleEdit({
//     draggable: true,
//     snappable: true,
// });

map3.pm.addControls({
    drawMarker: true,
    drawPolygon: true,
    editPolygon: true,
    deleteLayer: true,
    drawPolyline: true,
});

const markerStyle = {
    opacity: 0.5,
    draggable: false,
};

map3.pm.enableDraw('Poly', {
    snappable: true,
    templineStyle: {
        color: 'blue',
    },
    hintlineStyle: {
        color: 'blue',
        dashArray: [5, 5],
    },
    pathOptions: {
        color: 'red',
        fillColor: 'orange',
        fillOpacity: 0.7,
    },
    markerStyle: markerStyle,
    cursorMarker: false,
    // finishOn: 'contextmenu',
    finishOnDoubleClick: true,
});

var scotland = L.polygon([
    [[60, -13], [60, 0], [50, 4], [50, -13]],
    [[55.7, -4.5], [56, -4.5], [56, -4], [55.7, -4]],
]);
scotland.addTo(map3);

const bounds = scotland.getBounds();

map3.fitBounds(bounds);

// geoJsonLayer.addEventListener('click', function(e) {
//     geoJsonLayer.pm.toggleEdit();
// });

// geoJsonLayer.on('pm:drag', function(e) {
//     console.log(e);
// });

map2.on('pm:drawstart', function(e) {
    var layer = e.workingLayer;
    // console.log(layer);
    layer.on('pm:centerplaced', function(e) {
        // console.log(e);
    });
});
map2.on('pm:create', function(e) {
    var layer = e.layer;
    // console.log(layer);
    layer.on('pm:centerplaced', function(e) {
        // console.log(e);
    });
});

// Rotated Rectangular Polygon Example (Application Input, not built into L.PM.Toolbar.):

map3.on('pm:drawstart', function(e) {
    if (e.shape === 'RotatableRectangularPolygon') {
        L.Util.setOptions(e.workingLayer, {
            angle: 45
        });
    }
});

const rotatedRectangularPolygon1 = L.polygon([
    [51.645294049305406, 6.767578125000001],
    [50.89995055300482, 7.086815701824466],
    [51.17934297928929, 8.745117187500002],
    [51.92018204814259, 8.425879610675537]],
    {angle: 75});

const rotatedRectangularPolygon2 = L.polygon([
    [52.98833725339543, 9.711914062500002],
    [52.5246028925231, 11.039104770746617],
    [53.067626642387374, 11.5576171875],
    [53.52559000995381, 10.230426479253387]],
    {angle: 30});

rotatedRectangularPolygon1.addTo(map3);
rotatedRectangularPolygon2.addTo(map3);

rotatedRectangularPolygon1.on('pm:drag', function(e) {
    // console.log('dragging', e);
});

// Polygon Example

const polygonLayer = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047],
])
    .addTo(map3)
    .addTo(map2);

// polygonLayer.pm.toggleEdit({
//     allowSelfIntersection: false,
//     preventVertexEdit: true,
//     preventMarkerRemoval: false,
// });

polygonLayer.on('pm:update', function(e) {
    console.log(e);
});

polygonLayer.on('pm:intersect', function(e) {
    console.log(e);
});

// map2.pm.toggleGlobalEditMode({
//     allowSelfIntersection: false,
//     preventMarkerRemoval: false,
//     preventVertexEdit: false,
// });
// map2.pm.disableGlobalEditMode();

map2.on('pm:create', function(e) {
    e.layer.pm.enable({ allowSelfIntersection: false });
    // e.layer.pm.disable();
    // console.log(e.layer.pm.hasSelfIntersection());

    e.layer.on('pm:markerdragend', function(e) {
        // console.log(e);
    });

    e.layer.on('pm:update', function(e) {
        console.log(e);
    });

    e.layer.on('pm:cut', function(e) {
        console.log(e);
    });
});

map2.on('pm:drawstart', function(e) {
    var layer = e.workingLayer;
    layer.on('pm:vertexadded', function(e) {
        // console.log(e);
        // console.log(e.workingLayer.pm.hasSelfIntersection());
    });
});

polygonLayer.on('pm:vertexadded', function(e) {
    // console.log(e);
});
polygonLayer.on('pm:vertexremoved', function(e) {
    // console.log(e);
});

polygonLayer.on('pm:markerdragstart', function(e) {
    // console.log(e);
});

// Layer Group Example

const layerGroupItem1 = L.polyline(
    [[51.51, -0.09], [51.513, -0.08], [51.514, -0.11]],
    { pmIgnore: true },
);
const layerGroupItem2 = L.polygon([
    [51.52, -0.06],
    [51.51, -0.07],
    [51.52, -0.05],
]);

const layerGroupItem3 = L.polygon([
    [51.51549835365031, -0.06450164634969281],
    [51.51944818307178, -0.08425079345703125],
    [51.51868369995795, -0.06131630004205801],
    [51.51549835365031, -0.06450164634969281],
]);

const feature = {
    type: 'Feature',
    properties: {},
    geometry: {
        type: 'Polygon',
        coordinates: [
            [
                [72.839012, 19.058873],
                [72.92038, 19.066985],
                [72.856178, 19.019928],
                [72.839012, 19.058873],
            ],
        ],
    },
};

const layerGroup = L.featureGroup([layerGroupItem1]).addTo(map4);
layerGroup.pm.toggleEdit({
    draggable: true,
    snappable: true,
    snapDistance: 30,
});
const someLayer = L.geoJSON(feature);

layerGroup.addLayer(someLayer);

someLayer.addData(feature);

layerGroup.on('pm:snap', function(e) {
    console.log('snap');
    console.log(e);
});
layerGroup.on('pm:unsnap', function(e) {
    console.log('unsnap');
    console.log(e);
});

map4.pm.addControls({
    position: 'topright',
});

map4.pm.enableDraw('Poly', {
    finishOn: 'mouseout',
});
map4.pm.disableDraw('Poly');

map4.pm.enableDraw('Marker', {
    snappable: false,
});
map4.pm.disableDraw('Marker');

// map4.pm.setPathOptions({
//     color: 'orange',
//     fillColor: 'green',
//     fillOpacity: 0.4,
// });

layerGroup.addLayer(layerGroupItem2);
layerGroup.addLayer(layerGroupItem3);
// layerGroup.addLayer(layerGroupItem4);
// layerGroup.addLayer(layerGroupItem5);

layerGroup.on('pm:dragstart', function(e) {
    console.log(e);
});
layerGroup.on('pm:drag', function(e) {
    console.log(e);
});
layerGroup.on('pm:dragend', function(e) {
    console.log(e);
});
layerGroup.on('pm:markerdragstart', function(e) {
    console.log(e);
});
layerGroup.on('pm:markerdragend', function(e) {
    console.log(e);
});

// test with markercluster
// var markers = L.markerClusterGroup();
// markers.addLayer(L.marker([51.505, -0.07]));
// markers.addLayer(L.marker([51.505, -0.08]));
// markers.addLayer(L.marker([51.505, -0.09]));
// map4.addLayer(markers);
