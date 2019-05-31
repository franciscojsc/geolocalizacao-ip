function criarMapa(lat, lon) {
	var coordinates = [ lat, lon ];
	var initialZoomLevel = 10;

	var map = L.map('map').setView(coordinates, initialZoomLevel);

	L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
		attribution: '&copy; Contribuidores do <a href="http://osm.org/copyright">OpenStreetMap</a>'
	}).addTo(map);

	var markerMessage = 'O servidor fica aqui!';

	L.marker(coordinates).addTo(map).bindPopup(markerMessage).openPopup();
}
