document.addEventListener('DOMContentLoaded', () => {
    // Foro de opiniones
    const opinionForm = document.getElementById('opinion-form');
    const opinionText = document.getElementById('opinion-text');
    const opinionesList = document.getElementById('opiniones-list');

    opinionForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (opinionText.value.trim()) {
            const li = document.createElement('li');
            li.textContent = opinionText.value.trim();
            opinionesList.appendChild(li);
            opinionText.value = '';
        }
    });

    // Formulario dinámico de pedidos
    const pedidoForm = document.getElementById('pedido-form');
    const horaInput = document.getElementById('hora');
    const mensajeConfirmacion = document.getElementById('mensaje-confirmacion');

    pedidoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const hora = horaInput.value;
        if (hora >= '07:00' && hora <= '12:00') {
            mensajeConfirmacion.style.display = 'block';
            pedidoForm.reset();
            setTimeout(() => {
                mensajeConfirmacion.style.display = 'none';
            }, 5000);
        } else {
            alert('Por favor, selecciona un horario entre 7:00 AM y 12:00 PM.');
        }
    });
});