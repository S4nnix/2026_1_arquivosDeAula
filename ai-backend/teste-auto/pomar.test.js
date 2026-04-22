const pomar = require('./pomar.js');

test("", () => {
    expect(pomar(100, 60)).toBe(40);
});

test("", () => {
    expect(pomar(250, 180)).toBe(70);
});


test("", () => {
    expect(pomar(80, 80)).toBe(0);
});