function junin(sMensal, dTrabalhados) {
    const diario = sMensal / dTrabalhados
    const semanal = diario * 5; 
    return { diario, semanal };
}

module.exports = junin;