let contadorLecturas = 0;
let sumaBPM = 0;
let alertaInusuales = 0;
let alertaCritica = 0;

while (true) {
    let bpm = parseFloat(prompt("ingrese el ritmo cardiaco del astronauta (BPM), si es número negativo se cierra el sistema:"))

    if (isNaN(bpm)) {
        console.log("Error: El ritmo cardiaco debe ser un número válido.");
        continue;
    }
    if (bpm < 0) {
        break;
    }
    sumaBPM += bpm;
    contadorLecturas++;

    if (bpm > 100 && bpm < 130) {
        console.log("Alerta: Taquicardia leve. BPM: " + bpm);
        alertaInusuales++;
    } else if (bpm >= 60 && bpm <= 100) {
        console.log("Ritmo cardiaco normal. BPM: " + bpm);
    } else if (bpm >= 40 && bpm < 60) {
        console.log("Alerta: Hipotermia o Bradicardia leve. BPM: " + bpm);
        alertaInusuales++;
    } else if (bpm < 40 || bpm > 130) {
        console.log("Alerta: astronauta esta en peligro. BPM: " + bpm);
        alertaCritica++;
        if (alertaCritica === 3) {
            console.log("ESTADO CRÍTICO: CAMINATA ABORTADA");
            break;
        }
    }
}

let promedioBPM = sumaBPM / contadorLecturas;
console.log("===== INFORME DE RITMO CARDIACO =====");
console.log("Número total de lecturas: " + contadorLecturas);
console.log("Promedio de BPM: " + promedioBPM);
console.log("Número de alertas inusuales: " + alertaInusuales);
console.log("Número de alertas críticas: " + alertaCritica);
