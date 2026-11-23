'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const { calcularEnvio } = require('./envios.js');

test('99.999 COP paga 8.000 COP de envío', () => {
  assert.equal(calcularEnvio(99999), 8000);
});

test('100.000 COP recibe envío gratis', () => {
  assert.equal(calcularEnvio(100000), 0);
});

test('100.001 COP recibe envío gratis', () => {
  assert.equal(calcularEnvio(100001), 0);
});

test('un subtotal negativo produce RangeError', () => {
  assert.throws(() => calcularEnvio(-1), RangeError);
});

test('un subtotal decimal produce RangeError', () => {
  assert.throws(() => calcularEnvio(50000.5), RangeError);
});
