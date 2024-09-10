// Contador regresivo
const eventDate = new Date("2024-12-01T12:00:00").getTime();
const countdown = document.getElementById('countdown');

function updateCountdown() {
    const now = new Date().getTime();
    const distance = eventDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdown.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (distance < 0) {
        clearInterval(timer);
        countdown.innerHTML = "¡La boda ha comenzado!";
    }
}

const timer = setInterval(updateCountdown, 1000);

// API de Google Maps
function initMap() {
    const location = { lat: 40.712776, lng: -74.005974 }; // Cambia estas coordenadas por la ubicación de la boda
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: location
    });
    const marker = new google.maps.Marker({
        position: location,
        map: map
    });
}

window.onload = function() {
    initMap();
};

// Confirmación de asistencia
document.getElementById('rsvp-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert(`Gracias por confirmar tu asistencia, ${document.getElementById('name').value}`);
});
