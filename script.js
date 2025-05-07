// Inicializa el mapa
const map = L.map('map').setView([21.8823, -102.2826], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// Cargar y simular rutas
fetch('data.json')
  .then(res => res.json())
  .then(data => {
    data.forEach(item => {
      const latlngs = item.ruta.map(p => [p.lat, p.lng]);

      // Dibujar la línea de ruta
      L.polyline(latlngs, { color: 'red' }).addTo(map);

      // Crear marcador móvil
      const marker = L.circleMarker(latlngs[0], {
        radius: 8,
        color: 'blue'
      }).addTo(map).bindPopup(item.vehiculo);

      // Simular movimiento con anime.js
      let index = 0;
      const interval = setInterval(() => {
        if (index < latlngs.length) {
          marker.setLatLng(latlngs[index]);
          index++;
        } else {
          clearInterval(interval);
        }
      }, 1500); // cambia cada 1.5 segundos
    });
  });
