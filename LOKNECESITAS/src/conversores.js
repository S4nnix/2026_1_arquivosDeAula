function converterMetroEmPe(m) {
    return m * 3.281;
}

function converterPeEmMetro(p) {
    return p / 3.281;
}

function converterQuilometroParaMilha(km) {
    return km * 0.621371;
}

function converterMilhaParaQuilometro(mi) {
    return mi / 0.621371;
}

function converterCmParaPolegada(cm) {
    return cm * 0.393701;
}

function converterPolegadaParaCm(pol) {
    return pol / 0.393701;
}


function converterQuilogramaParaLibra(kg) {
    return kg * 2.20462;
}

function converterLibraParaQuilograma(lb) {
    return lb / 2.20462;
}


function converterFarenheitParaCelsius(f) {
    return (f - 32) * 5 / 9;
}

function converterCelsiusParaFarenheit(c) {
    return (c * 9 / 5) + 32;
}

function converterKelvinParaCelsius(k) {
    return k - 273.15;
}

function converterCelsiusParaKelvin(c) {
    return c + 273.15;
}


function converterRealParaDolar(brl) {
    return brl * 0.20;
}

function converterDolarParaReal(usd) {
    return usd / 0.20;
}

function converterRealParaEuro(brl) {
    return brl * 0.17;
}

function converterEuroParaReal(eur) {
    return eur / 0.17;
}

function converterRealParaWon(brl) {
    return brl * 292.75;
}

function converterWonParaReal(won) {
    return won / 292.75;
}


function converterHorasParaMilisegundos(h) {
    return h * 3_600_000;
}

function converterMilisegundosParaHoras(ms) {
    return ms / 3_600_000;
}



module.exports = {
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
};