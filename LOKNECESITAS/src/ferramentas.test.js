const {
  converterMetroEmPe,
  converterPeEmMetro,
  converterQuilometroParaMilha,
  converterCmParaPolegada,
  converterQuilogramaParaLibra,
  converterFarenheitParaCelsius,
  converterKelvinParaCelsius,
  converterRealParaDolar,
  converterRealParaEuro,
  converterRealParaWon,
  converterHorasParaMilisegundos
} = require('./ferramentas');


test('1 metro vira 3.281', () => {
  expect(converterMetroEmPe(1)).toBe(3.281);
});
test('10 metros viram 32.81', () => {
  expect(converterMetroEmPe(10)).toBe(32.81);
});
test('0 metros viram 0', () => {
  expect(converterMetroEmPe(0)).toBe(0);
});

test('1 pé vira 0.3048', () => {
  expect(converterPeEmMetro(1)).toBeCloseTo(0.3048, 3);
});
test('10 pés viram 3.048', () => {
  expect(converterPeEmMetro(10)).toBeCloseTo(3.048, 3);
});
test('0 pés viram 0', () => {
  expect(converterPeEmMetro(0)).toBe(0);
});

test('1 quilômetro vira 0.621 milha', () => {
  expect(converterQuilometroParaMilha(1)).toBeCloseTo(0.621, 3);
});

test('0 quilômetros viram 0', () => {
  expect(converterQuilometroParaMilha(0)).toBe(0);
});

test('1 cm vira 0.394 polegada', () => {
  expect(converterCmParaPolegada(1)).toBeCloseTo(0.394, 3);
});

test('0 cm viram 0', () => {
  expect(converterCmParaPolegada(0)).toBe(0);
});

test('1 kg vira 2.205 libras', () => {
  expect(converterQuilogramaParaLibra(1)).toBeCloseTo(2.205, 3);
});


test('32°F vira 0°C', () => {
  expect(converterFarenheitParaCelsius(32)).toBe(0);
});
test('212°F vira 100°C', () => {
  expect(converterFarenheitParaCelsius(212)).toBe(100);
});
test('98.6°F vira 37°C', () => {
  expect(converterFarenheitParaCelsius(98.6)).toBe(37);
});


test('273.15 K vira 0°C', () => {
  expect(converterKelvinParaCelsius(273.15)).toBe(0);
});
test('373.15 K vira 100°C', () => {
  expect(converterKelvinParaCelsius(373.15)).toBe(100);
});
test('0 K vira -273.15°C', () => {
  expect(converterKelvinParaCelsius(0)).toBe(-273.15);
});


test('0 reais viram 0 dólares', () => {
  expect(converterRealParaDolar(0)).toBe(0);
});
test('5 reais retornam um número positivo', () => {
  expect(converterRealParaDolar(5)).toBeGreaterThan(0);
});
test('10 reais é o dobro de 5 reais em dólares', () => {
  expect(converterRealParaDolar(10)).toBeCloseTo(converterRealParaDolar(5) * 2, 5);
});


test('0 reais viram 0 euros', () => {
  expect(converterRealParaEuro(0)).toBe(0);
});
test('5 reais retornam um número positivo em euros', () => {
  expect(converterRealParaEuro(5)).toBeGreaterThan(0);
});
test('10 reais é o dobro de 5 reais em euros', () => {
  expect(converterRealParaEuro(10)).toBeCloseTo(converterRealParaEuro(5) * 2, 5);
});

test('0 reais viram 0 wons', () => {
  expect(converterRealParaWon(0)).toBe(0);
});
test('1 real retorna um número positivo em wons', () => {
  expect(converterRealParaWon(1)).toBeGreaterThan(0);
});
test('10 reais é o dobro de 5 reais em wons', () => {
  expect(converterRealParaWon(10)).toBeCloseTo(converterRealParaWon(5) * 2, 5);
});


test('1 hora vira 3600000 ms', () => {
  expect(converterHorasParaMilisegundos(1)).toBe(3600000);
});
test('0 horas viram 0 ms', () => {
  expect(converterHorasParaMilisegundos(0)).toBe(0);
});
test('2 horas viram 7200000 ms', () => {
  expect(converterHorasParaMilisegundos(2)).toBe(7200000);
});