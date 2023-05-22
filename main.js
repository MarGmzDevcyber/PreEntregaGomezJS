function sim() {
        //entrada con prompt
        let costoPlacaVideo = parseInt(prompt("Ingrese el costo de la placa de video:"));
        let costoPlacaMadre = parseInt(prompt("Ingrese el costo de la Placa Madre:"));
        let costoRAM = parseInt(prompt("Ingrese el costo de la memoria RAM:"));
        let costoDiscoDuro = parseInt(prompt("Ingrese el costo del disco duro:"));
        let costoGabinete = parseInt(prompt("Ingrese el costo del gabinete:"));
    
        let confirmar = prompt(`¿Desea confirmar los costos de la Placa de Video ${costoPlacaVideo}, Placa Madre ${costoPlacaMadre}, RAM ${costoRAM}, disco duro ${costoDiscoDuro} y gabinete ${costoGabinete}? si || no`);
    
        while (confirmar === "no") {
        costoPlacaVideo = parseInt(prompt("Ingrese el costo de la placa de video:"));
        costoPlacaMadre = parseInt(prompt("Ingrese el costo de la Placa Madre:"));
        costoRAM = parseInt(prompt("Ingrese el costo de la memoria RAM:"));
        costoDiscoDuro = parseInt(prompt("Ingrese el costo del disco duro:"));
        costoGabinete = parseInt(prompt("Ingrese el costo del gabinete:"));
        confirmar = prompt(`¿Desea confirmar los costos de la Placa de Video ${costoPlacaVideo}, Placa Madre ${costoPlacaMadre}, RAM ${costoRAM}, disco duro ${costoDiscoDuro} y gabinete ${costoGabinete}? si || no`);
        }
    
        //funcion que calcula el costo total
        function calcularCostoTotal(costoPlacaVideo, costoPlacaMadre, costoRAM, costoDiscoDuro, costoGabinete) {
        const costoTotal = costoPlacaVideo + costoPlacaMadre + costoRAM + costoDiscoDuro + costoGabinete;
        return costoTotal;
        }
    
        //utilizo un llamado a la funcion para calcular el total
        const costoTotal = calcularCostoTotal(costoPlacaVideo, costoPlacaMadre, costoRAM, costoDiscoDuro, costoGabinete);
    
        // el resultado sale en un alert
        alert(`El costo total de la PC es de ${costoTotal} Pesos.`);
    }
    
        // llamada función principal
    sim();
    