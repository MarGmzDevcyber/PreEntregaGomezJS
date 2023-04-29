let costoPlacaVideo = parseInt(prompt("Ingrese el costo de la placa de video:"));
let costoPlacaMadre = parseInt(prompt("Ingrese el costo de la Placa Madre:"));
let costoRAM = parseInt(prompt("Ingrese el costo de la memoria RAM:"));
let costoDiscoDuro = parseInt(prompt("Ingrese el costo del disco duro:"));
let costoGabinete = parseInt(prompt("Ingrese el costo del gabinete:"));

let confirmar = prompt(`¿Desea confirmar los costos de la Placa de Video ${costoPlacaVideo}, Placa Madre ${costoPlacaMadre}, RAM ${costoRAM}, disco duro ${costoDiscoDuro} y gabinete ${costoGabinete}? si || no`);

while (confirmar === "no") {
    costoPlacaVideo = parseInt(prompt("Ingrese el costo de la CPU:"));
    costoPlacaMadre = parseInt(prompt("Ingrese el costo de la GPU:"));
    costoRAM = parseInt(prompt("Ingrese el costo de la memoria RAM:"));
    costoDiscoDuro = parseInt(prompt("Ingrese el costo del disco duro:"));
    costoGabinete = parseInt(prompt("Ingrese el costo del monitor:"));
    confirmar = prompt(`¿Desea confirmar los costos de la placa de video ${costoPlacaVideo}, Placa Madre ${costoPlacaMadre}, RAM ${costoRAM}, disco duro ${costoDiscoDuro} y gabinete ${costoGabinete}? si || no`);
    }

    function calcularCostoTotal(costoPlacaVideo, costoPlacaMadre, costoRAM, costoDiscoDuro, costoGabinete) {
    const costoTotal = costoPlacaVideo + costoPlacaMadre+ costoRAM + costoDiscoDuro + costoGabinete;
    return costoTotal;
    }

    const costoTotal= calcularCostoTotal(costoPlacaVideo, costoPlacaMadre, costoRAM, costoDiscoDuro, costoGabinete);
    alert(`El costo total de la PC es de ${costoTotal} Pesos.`);
