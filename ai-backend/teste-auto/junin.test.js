const junin = require('./junin.js');

test("", () => {
    expect(junin(3000, 20)).toEqual({ diario: 150, semanal: 750 });
});

test("", () => {
    expect(junin(4500, 22)).toEqual({ diario: 204.54545454545453, semanal: 1022.7272727272726 });
});

test("", () => {
    expect(junin(2000, 10)).toEqual({ diario: 200.00, semanal: 1000.00 });
});

test("", () => {
    expect(junin(3000, 0)).toEqual({ diario: Infinity, semanal: Infinity });
});

test("", () => {
    expect(junin(0, 20)).toEqual({ diario: 0, semanal: 0 });
});

test("", () => {
    expect(junin(0, 0)).toEqual({ diario: NaN, semanal: NaN });
});

test("", () => {
    expect(junin(5000, 31)).toEqual({ diario: 161.29032258064515, semanal: 806.4516129032257 });
});