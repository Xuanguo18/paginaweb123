const form = document.getElementById('presupuestoForm');
const totalElement = document.getElementById('total');

form.addEventListener('change', () => {
  const producto = parseFloat(form.producto.value);
  const extras = Array.from(form.querySelectorAll('input[type="checkbox"]:checked'))
                      .reduce((sum, checkbox) => sum + parseFloat(checkbox.value), 0);
  const plazo = parseInt(form.plazo.value);
  const descuento = plazo >= 6 ? 0.1 : 0;

  const total = (producto + extras) * (1 - descuento);
  totalElement.textContent = `Total: $${total.toFixed(2)}`;
});
