document.getElementById("sim").addEventListener("click", function() {
    const costoPlacaVideo = parseInt(document.getElementById("costoPlacaVideo").value);
    const costoPlacaMadre = parseInt(document.getElementById("costoPlacaMadre").value);
    const costoRAM = parseInt(document.getElementById("costoRAM").value);
    const costoDiscoDuro = parseInt(document.getElementById("costoDiscoDuro").value);
    const costoGabinete = parseInt(document.getElementById("costoGabinete").value);

    const costoTotal = calcularCostoTotal(costoPlacaVideo, costoPlacaMadre, costoRAM, costoDiscoDuro, costoGabinete);

    const resultadoHTML = document.getElementById("resultado");
    resultadoHTML.innerHTML = `El costo total de la PC es de ${costoTotal} Pesos.`;

    // Almacenar datos en el LocalStorage como JSON
    const datos = {
        costoPlacaVideo,
        costoPlacaMadre,
        costoRAM,
        costoDiscoDuro,
        costoGabinete
    };
    localStorage.setItem("datos", JSON.stringify(datos));
});

  // Función para calcular  costo total
    function calcularCostoTotal(costoPlacaVideo, costoPlacaMadre, costoRAM, costoDiscoDuro, costoGabinete) {
        const costoTotal = costoPlacaVideo + costoPlacaMadre + costoRAM + costoDiscoDuro + costoGabinete;
            return costoTotal;
    }

    // Carga de datos almacenados en el LocalStorage al cargar pagina

    window.addEventListener("load", function() {

        const datos = localStorage.getItem("datos");
            if (datos) {
                const { costoPlacaVideo, costoPlacaMadre, costoRAM, costoDiscoDuro, costoGabinete } = JSON.parse(datos);
                document.getElementById("costoPlacaVideo").value = costoPlacaVideo;
                document.getElementById("costoPlacaMadre").value = costoPlacaMadre;
                document.getElementById("costoRAM").value = costoRAM;
                document.getElementById("costoDiscoDuro").value = costoDiscoDuro;
                document.getElementById("costoGabinete").value}})