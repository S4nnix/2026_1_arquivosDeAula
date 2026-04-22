const pepe = require('./pepe.js');

test("", () => {
    expect(pepe(120, 10)).toBe(1200);
});

test("", () => {
    expect(pepe(85, 5)).toBe(425);
});

test("", () => {
    expect(pepe(199.90, 3)).toBe(599.70);
});
