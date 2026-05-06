const {
    converterMetroEmPe,
    converterPeEmMetro,
    converterQuilometroParaMilha,
    converterMilhaParaQuilometro,
    converterCmParaPolegada,
    converterPolegadaParaCm,
    converterQuilogramaParaLibra,
    converterLibraParaQuilograma,
    converterFarenheitParaCelsius,
    converterCelsiusParaFarenheit,
    converterKelvinParaCelsius,
    converterCelsiusParaKelvin,
    converterRealParaDolar,
    converterDolarParaReal,
    converterRealParaEuro,
    converterEuroParaReal,
    converterRealParaWon,
    converterWonParaReal,
    converterHorasParaMilisegundos,
    converterMilisegundosParaHoras,
} = require('./conversores');

describe('Metro ↔ Pé', () => {
    test('1 metro vira 3.281 pés', () => {
        expect(converterMetroEmPe(1)).toBe(3.281);
    });
    test('0 metro vira 0 pés', () => {
        expect(converterMetroEmPe(0)).toBe(0);
    });
    test('10 metros viram 32.81 pés', () => {
        expect(converterMetroEmPe(10)).toBe(32.81);
    });
    test('100 metros viram 328.1 pés', () => {
        expect(converterMetroEmPe(100)).toBe(328.1);
    });

    test('3.281 pés viram 1 metro', () => {
        expect(converterPeEmMetro(3.281)).toBeCloseTo(1, 2);
    });
    test('0 pés viram 0 metros', () => {
        expect(converterPeEmMetro(0)).toBe(0);
    });
    test('32.81 pés viram 10 metros', () => {
        expect(converterPeEmMetro(32.81)).toBeCloseTo(10, 2);
    });
    test('9.843 pés viram 3 metros', () => {
        expect(converterPeEmMetro(9.843)).toBeCloseTo(3, 2);
    });
});

describe('Quilômetro ↔ Milha', () => {
    test('1 km vira 0.621371 milhas', () => {
        expect(converterQuilometroParaMilha(1)).toBe(0.621371);
    });
    test('0 km vira 0 milhas', () => {
        expect(converterQuilometroParaMilha(0)).toBe(0);
    });
    test('10 km viram 6.21371 milhas', () => {
        expect(converterQuilometroParaMilha(10)).toBeCloseTo(6.21371, 4);
    });
    test('42.195 km viram 26.219 milhas (maratona!)', () => {
        expect(converterQuilometroParaMilha(42.195)).toBeCloseTo(26.219, 2);
    });

    test('1 milha vira 1.60934 km', () => {
        expect(converterMilhaParaQuilometro(1)).toBeCloseTo(1.60934, 2);
    });
    test('0 milhas viram 0 km', () => {
        expect(converterMilhaParaQuilometro(0)).toBe(0);
    });
    test('5 milhas viram 8.0467 km', () => {
        expect(converterMilhaParaQuilometro(5)).toBeCloseTo(8.0467, 2);
    });
});


describe('Centímetro ↔ Polegada', () => {
    test('1 cm vira 0.393701 polegadas', () => {
        expect(converterCmParaPolegada(1)).toBe(0.393701);
    });
    test('0 cm vira 0 polegadas', () => {
        expect(converterCmParaPolegada(0)).toBe(0);
    });
    test('2.54 cm viram 1 polegada (exato!)', () => {
        expect(converterCmParaPolegada(2.54)).toBeCloseTo(1, 3);
    });
    test('30 cm viram 11.811 polegadas', () => {
        expect(converterCmParaPolegada(30)).toBeCloseTo(11.811, 2);
    });

    test('1 polegada vira 2.54 cm', () => {
        expect(converterPolegadaParaCm(1)).toBeCloseTo(2.54, 2);
    });
    test('0 polegadas viram 0 cm', () => {
        expect(converterPolegadaParaCm(0)).toBe(0);
    });
    test('12 polegadas (1 pé) viram 30.48 cm', () => {
        expect(converterPolegadaParaCm(12)).toBeCloseTo(30.48, 2);
    });
});

describe('Quilograma ↔ Libra', () => {
    test('1 kg vira 2.20462 lb', () => {
        expect(converterQuilogramaParaLibra(1)).toBe(2.20462);
    });
    test('0 kg vira 0 lb', () => {
        expect(converterQuilogramaParaLibra(0)).toBe(0);
    });
    test('70 kg viram 154.32 lb', () => {
        expect(converterQuilogramaParaLibra(70)).toBeCloseTo(154.323, 2);
    });
    test('100 kg viram 220.46 lb', () => {
        expect(converterQuilogramaParaLibra(100)).toBeCloseTo(220.462, 2);
    });

    test('1 lb vira 0.4536 kg', () => {
        expect(converterLibraParaQuilograma(1)).toBeCloseTo(0.453592, 3);
    });
    test('0 lb vira 0 kg', () => {
        expect(converterLibraParaQuilograma(0)).toBe(0);
    });
    test('10 lb viram 4.5359 kg', () => {
        expect(converterLibraParaQuilograma(10)).toBeCloseTo(4.5359, 2);
    });
});

describe('Fahrenheit ↔ Celsius', () => {
    test('32°F vira 0°C (ponto de fusão)', () => {
        expect(converterFarenheitParaCelsius(32)).toBe(0);
    });
    test('212°F vira 100°C (ponto de ebulição)', () => {
        expect(converterFarenheitParaCelsius(212)).toBe(100);
    });
    test('98.6°F vira 37°C (temperatura do corpo)', () => {
        expect(converterFarenheitParaCelsius(98.6)).toBeCloseTo(37, 2);
    });
    test('-40°F vira -40°C (o ponto que se igualam!)', () => {
        expect(converterFarenheitParaCelsius(-40)).toBe(-40);
    });

    test('0°C vira 32°F', () => {
        expect(converterCelsiusParaFarenheit(0)).toBe(32);
    });
    test('100°C vira 212°F', () => {
        expect(converterCelsiusParaFarenheit(100)).toBe(212);
    });
    test('37°C vira 98.6°F', () => {
        expect(converterCelsiusParaFarenheit(37)).toBeCloseTo(98.6, 2);
    });
});

describe('Kelvin ↔ Celsius', () => {
    test('0 K vira -273.15°C (zero absoluto!)', () => {
        expect(converterKelvinParaCelsius(0)).toBe(-273.15);
    });
    test('273.15 K vira 0°C', () => {
        expect(converterKelvinParaCelsius(273.15)).toBe(0);
    });
    test('373.15 K vira 100°C', () => {
        expect(converterKelvinParaCelsius(373.15)).toBeCloseTo(100, 2);
    });
    test('310.15 K vira 37°C (corpo humano)', () => {
        expect(converterKelvinParaCelsius(310.15)).toBeCloseTo(37, 2);
    });

    test('0°C vira 273.15 K', () => {
        expect(converterCelsiusParaKelvin(0)).toBe(273.15);
    });
    test('-273.15°C vira 0 K', () => {
        expect(converterCelsiusParaKelvin(-273.15)).toBe(0);
    });
    test('100°C vira 373.15 K', () => {
        expect(converterCelsiusParaKelvin(100)).toBe(373.15);
    });
});


describe('Real ↔ Dólar', () => {
    test('R$ 1 vira US$ 0.20', () => {
        expect(converterRealParaDolar(1)).toBe(0.20);
    });
    test('R$ 0 vira US$ 0', () => {
        expect(converterRealParaDolar(0)).toBe(0);
    });
    test('R$ 5 viram US$ 1.00', () => {
        expect(converterRealParaDolar(5)).toBe(1.00);
    });
    test('R$ 100 viram US$ 20', () => {
        expect(converterRealParaDolar(100)).toBe(20);
    });

    test('US$ 1 vira R$ 5', () => {
        expect(converterDolarParaReal(1)).toBe(5);
    });
    test('US$ 0 vira R$ 0', () => {
        expect(converterDolarParaReal(0)).toBe(0);
    });
    test('US$ 10 viram R$ 50', () => {
        expect(converterDolarParaReal(10)).toBe(50);
    });
});

describe('Real ↔ Euro', () => {
    test('R$ 1 vira € 0.17', () => {
        expect(converterRealParaEuro(1)).toBe(0.17);
    });
    test('R$ 0 vira € 0', () => {
        expect(converterRealParaEuro(0)).toBe(0);
    });
    test('R$ 100 viram € 17', () => {
        expect(converterRealParaEuro(100)).toBe(17);
    });
    test('R$ 50 viram € 8.50', () => {
        expect(converterRealParaEuro(50)).toBeCloseTo(8.50, 2);
    });

    test('€ 1 vira R$ 5.88', () => {
        expect(converterEuroParaReal(1)).toBeCloseTo(5.882, 2);
    });
    test('€ 0 vira R$ 0', () => {
        expect(converterEuroParaReal(0)).toBe(0);
    });
    test('€ 17 viram R$ 100', () => {
        expect(converterEuroParaReal(17)).toBeCloseTo(100, 2);
    });
});


describe('Real ↔ Won Coreano', () => {
    test('R$ 1 vira ₩ 292.75', () => {
        expect(converterRealParaWon(1)).toBe(292.75);
    });
    test('R$ 0 vira ₩ 0', () => {
        expect(converterRealParaWon(0)).toBe(0);
    });
    test('R$ 10 viram ₩ 2927.5', () => {
        expect(converterRealParaWon(10)).toBe(2927.5);
    });
    test('R$ 100 viram ₩ 29275', () => {
        expect(converterRealParaWon(100)).toBe(29275);
    });

    test('₩ 292.75 viram R$ 1', () => {
        expect(converterWonParaReal(292.75)).toBeCloseTo(1, 2);
    });
    test('₩ 0 vira R$ 0', () => {
        expect(converterWonParaReal(0)).toBe(0);
    });
    test('₩ 2927.5 viram R$ 10', () => {
        expect(converterWonParaReal(2927.5)).toBeCloseTo(10, 2);
    });
});

describe('Horas ↔ Milissegundos', () => {
    test('1 hora vira 3.600.000 ms', () => {
        expect(converterHorasParaMilisegundos(1)).toBe(3_600_000);
    });
    test('0 horas viram 0 ms', () => {
        expect(converterHorasParaMilisegundos(0)).toBe(0);
    });
    test('24 horas viram 86.400.000 ms (1 dia!)', () => {
        expect(converterHorasParaMilisegundos(24)).toBe(86_400_000);
    });
    test('0.5 hora vira 1.800.000 ms (30 min)', () => {
        expect(converterHorasParaMilisegundos(0.5)).toBe(1_800_000);
    });

    test('3.600.000 ms viram 1 hora', () => {
        expect(converterMilisegundosParaHoras(3_600_000)).toBe(1);
    });
    test('0 ms viram 0 horas', () => {
        expect(converterMilisegundosParaHoras(0)).toBe(0);
    });
    test('86.400.000 ms viram 24 horas', () => {
        expect(converterMilisegundosParaHoras(86_400_000)).toBe(24);
    });
});