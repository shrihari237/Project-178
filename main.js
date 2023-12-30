let latitude = 22.7868542, longitude = 88.3643296

mapboxgl.accessToken = 'pk.eyJ1IjoiYXBvb3J2ZWxvdXMiLCJhIjoiY2ttZnlyMDgzMzlwNTJ4a240cmEzcG0xNyJ9.-nSyL0Gy2nifDibXJg4fTA'


var map = new mapboxgl.Map({
    container:'map',
    style:'mapbox://styles/mapbox/streets-v11',
    center:[longitude,latitude],
    zoom: 4
})

var img1 = document.querySelector("#amber")
var marker1 = new mapboxgl.Marker({
    element:img1
})
.setLngLat([75.85133,26.98547])
.addTo(map);

var img2 = document.querySelector("#burj-khalifa")
var marker2 = new mapboxgl.Marker({
    element:img2
})
.setLngLat([55.2744,25.1972])
.addTo(map);

var img3 = document.querySelector("#statue-unity")
var marker3 = new mapboxgl.Marker({
    element:img3
})
.setLngLat([73.7191,21.8380])
.addTo(map);

var img4 = document.querySelector("#pyramid")
var marker4 = new mapboxgl.Marker({
    element:img4
})
.setLngLat([31.1342,29.9792])
.addTo(map);

var img5 = document.querySelector("#taj-mahal")
var marker5 = new mapboxgl.Marker({
    element:img5
})
.setLngLat([78.0421,27.1751])
.addTo(map);


map.addControl(
    new MapboxGeocoder({
        accessToken:mapboxgl.accessToken,
        mapboxgl:mapboxgl
    })
)