'use strict';

const formulario = document.querySelector('#calculadora');
const subtotal = document.querySelector('#subtotal');
const resultado = document.querySelector('#resultado');
const formatoCOP = new Intl.NumberFormat('es-CO');

formulario.addEventListener('submit', (evento) => {
  evento.preventDefault();
  const entrada = subtotal.value.trim();
  const monto = /^\d+$/.test(entrada) ? Number(entrada) : NaN;

  try {
    const costo = calcularEnvio(monto);
    subtotal.removeAttribute('aria-invalid');
    resultado.textContent = 'Envío: ' + formatoCOP.format(costo) + ' COP';
  } catch (error) {
    if (!(error instanceof RangeError)) {
      throw error;
    }
    subtotal.setAttribute('aria-invalid', 'true');
    resultado.textContent = error.message;
  }
});
