function converterMetroEmPe (m) {
    return m * 3.281
}

function converterPeEmMetro(p) {
    return p / 3.281
}

function converterQuilometroParaMilha(km) {
    return km * 0.621371;
}

function converterCmParaPolegada(cm) {
    return cm * 0.393701;
}

function converterQuilogramaParaLibra(qg) {
    return qg * 2.20462;
}

function converterFarenheitParaCelsius(f) {
    return (f - 32) * 5/9;
}

function converterKelvinParaCelsius(k) {
    return k - 273.15;
}

function converterRealParaDolar(brl) {
    return brl * 0.20;
}

function converterRealParaEuro(brl) {
    return brl * 0.17;
}

function converterRealParaWon(brl) {
    return brl * 292.75;
}

function converterHorasParaMilisegundos(h) {
    return h * 3600000;
}



module.exports = {
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
};