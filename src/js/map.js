/* BOTON MENU DESPLEGABLE */
const toggleBtn = document.querySelector('.nav-toggle-btn');
const navbarList = document.querySelector('.navbar-list');

toggleBtn.addEventListener('click', () => {
  toggleBtn.classList.toggle('active');
  navbarList.classList.toggle('active');
});

document.querySelectorAll('.navbar-link').forEach(link => {
  link.addEventListener('click', () => {
    toggleBtn.classList.remove('active');
    navbarList.classList.remove('active');
  });
});

/* MAPA */
document.addEventListener("DOMContentLoaded", function () {
  const map = L.map("map").setView([40.4168, -3.7038], 13);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '© <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
  }).addTo(map);

  const locations = [
    {
      name: "Clínica Dental",
      lat: 40.4168,
      lon: -3.7038,
      googleMapsLink: "https://www.google.com/maps?q=40.4168,-3.7038",
    }
  ];

  locations.forEach(location => {
    const marker = L.marker([location.lat, location.lon]).addTo(map);

    marker
      .bindPopup(`
        <strong>${location.name}</strong><br>
        <a href="${location.googleMapsLink}" target="_blank">Ver en Google Maps</a>
      `)
      .openPopup();
  });
});



