'use strict';

function calcularEnvio(subtotal) {
  if (!Number.isSafeInteger(subtotal) || subtotal < 0) {
    throw new RangeError('Ingresa un subtotal entero no negativo en pesos.');
  }

  return subtotal >= 100000 ? 0 : 8000;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { calcularEnvio };
}
