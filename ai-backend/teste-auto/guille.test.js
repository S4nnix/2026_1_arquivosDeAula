const guille = require('./guille.js');

test("", () => {
    expect(guille(10, 5, 3)).toBe(18);
});

test("", () => {
    expect(guille(25, 10, 15)).toBe(50);
});

test("", () => {
    expect(guille(8, 2, 0)).toBe(10);
});
