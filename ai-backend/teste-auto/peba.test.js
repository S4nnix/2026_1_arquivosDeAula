const calcularPuntos = require('./peba.js');

test("", () => {
    expect(calcularPuntos(10, 5)).toBe(35);
});


test("", () => {
    expect(calcularPuntos(3, 2)).toBe(11);
});


test("", () => {
    expect(calcularPuntos(0, 7)).toBe(7);
});


test("", () => {
    expect(calcularPuntos(0, 0)).toBe(0);
});


test("", () => {
    expect(calcularPuntos(5, 0)).toBe(15);
});


test("", () => {
    expect(calcularPuntos(0, 10)).toBe(10);
});


test("", () => {
    expect(calcularPuntos(100, 50)).toBe(350);
});
