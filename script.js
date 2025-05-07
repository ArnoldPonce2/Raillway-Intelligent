// 🌍 Inicializa el mapa
const map = L.map('map').setView([21.8823, -102.2826], 13); // Aguascalientes

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

L.marker([21.8823, -102.2826]).addTo(map).bindPopup('Origen').openPopup();

// 📊 Inicializa el gráfico KPI
const ctx = document.getElementById('kpiChart').getContext('2d');
const kpiChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Día 1', 'Día 2', 'Día 3', 'Día 4', 'Día 5'],
    datasets: [{
      label: 'Volumen transportado (toneladas)',
      data: [100, 120, 90, 130, 110],
      borderColor: 'blue',
      fill: false
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

// 🚚 Simulación animada (puede ser reemplazada con visualización real después)
document.getElementById('animar').addEventListener('click', () => {
  anime({
    targets: '#animar',
    translateX: 250,
    duration: 1000,
    direction: 'alternate',
    loop: 2,
    easing: 'easeInOutSine'
  });
});
