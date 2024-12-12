
// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });

// Formulario de contacto: mensaje de confirmación
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', function (e) {
  e.preventDefault(); // Evitar el envío real
  alert('¡Gracias por contactarnos! Pronto responderemos tu mensaje.');
  contactForm.reset(); // Limpia los campos del formulario
});

// Animación al hover en las tarjetas de propiedades
const propertyCards = document.querySelectorAll('.property-card');
propertyCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'scale(1.05)';
    card.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.2)';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'scale(1)';
    card.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)';
  });
});

  });
  