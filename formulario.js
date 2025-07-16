document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contactForm');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value.trim();
    const name = document.getElementById('name').value.trim();
    const lastname = document.getElementById('lastname').value.trim();
    const numberphone = document.getElementById('numberphone').value.trim();
    const service = document.getElementById('service').value;

    // Número de WhatsApp del negocio (poner el real con código país sin símbolos)
    const businessNumber = '5492920610464';

    // Mensaje personalizado que se enviará por WhatsApp
    const message = 
      `Hola Pez Negro!%0A` +
      `Quiero consultar sobre el servicio de *${service}*.%0A` +
      `Mi nombre es ${name} ${lastname}.%0A` +
      `Email: ${email}%0A` +
      `Teléfono: ${numberphone}`;

    // URL para enviar mensaje a WhatsApp
    const whatsappUrl = `https://wa.me/${businessNumber}?text=${message}`;

    // Abre WhatsApp en nueva pestaña
    window.open(whatsappUrl, '_blank');
  });
});
