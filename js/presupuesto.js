document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('presupuestoForm');
  const productoSelect = document.getElementById('producto');
  const extrasCheckboxes = document.querySelectorAll('input[type="checkbox"]');
  const plazoInput = document.getElementById('plazo');
  const totalParagraph = document.getElementById('total');

  // Función para calcular el total
  function calcularTotal() {
    let total = 0;

    // Añadir el precio del producto seleccionado
    const productoPrecio = parseFloat(productoSelect.value);
    total += productoPrecio;

    // Añadir el precio de los extras seleccionados
    extrasCheckboxes.forEach((checkbox) => {
      if (checkbox.checked && checkbox.id !== "privacidad") {
          total += parseFloat(checkbox.value);
      }
    });
    
    // Ajustar por el plazo (si aplica lógica adicional, puedes modificar esta sección)
    const plazo = parseInt(plazoInput.value);
    if (plazo > 1) {
      total += productoPrecio * 0.05 * (plazo - 1); // Ejemplo: un recargo del 5% mensual
    }

    // Actualizar el total en el párrafo
    totalParagraph.textContent = `Total: $${total.toFixed(2)}`;
  }

  // Event listeners para recalcular el total cuando cambien los valores
  productoSelect.addEventListener('change', calcularTotal);
  extrasCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', calcularTotal);
  });
  plazoInput.addEventListener('input', calcularTotal);

  // Prevenir el envío del formulario para propósitos de demostración
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Formulario enviado. Verifique el total: ' + totalParagraph.textContent);
  });

  // Calcular total inicial
  calcularTotal();
});

function validarCampos(){
const campos = [
  { input: document.getElementById('campo1'), error: document.getElementById('error-campo1') },
  { input: document.getElementById('campo2'), error: document.getElementById('error-campo2') },
  { input: document.getElementById('campo3'), error: document.getElementById('error-campo3') }
];

let formValido = true;

// Limpiamos mensajes previos
campos.forEach(campo => campo.error.textContent = '');

// Validamos cada campo
campos.forEach(campo => {
  if (campo.input.value.trim() === '') {
    campo.error.textContent = 'Este campo es obligatorio.';
    formValido = false;
  }
});
const successMessage = document.getElementById('success-message');
if (formValido) {
  if (document.getElementById("privacidad").checked){
  successMessage.textContent = '¡Formulario enviado correctamente!';
} else {
  alert("No has aceptado las condiciones de privacidad")
  successMessage.textContent = '';
}
}
}
// Mostramos mensaje de éxito si todos los campos están llenos


 