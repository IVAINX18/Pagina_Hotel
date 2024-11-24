//Login
const loginBtn = document.getElementById('login-btn');
const loginPopup = document.getElementById('login-popup');
const popupOverlay = document.getElementById('popup-overlay');

// Mostrar la ventana emergente
loginBtn.addEventListener('click', () => {
    loginPopup.style.display = 'block';
    popupOverlay.style.display = 'block';
});

// Ocultar la ventana emergente al hacer clic en el fondo oscuro
popupOverlay.addEventListener('click', () => {
    loginPopup.style.display = 'none';
    popupOverlay.style.display = 'none';
});


// Desplazamiento suave para enlaces
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });