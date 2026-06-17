const scenes = {

    inicio: {
        texto: `Año 2478.

La humanidad abandonó la Tierra hace siglos.

Los Arquitectos dominaron el planeta y nadie volvió a saber de él.`,

        opciones: [
            {
                texto: "Continuar",
                siguiente: "estacion"
            }
        ]
    },

    estacion: {
        texto: `La estación espacial Nueva Esperanza orbita silenciosamente alrededor de una estrella distante.

Todo parece normal.`,

        opciones: [
            {
                texto: "Continuar",
                siguiente: "senal"
            }
        ]
    },

    senal: {
        texto: `Hasta que una alarma rompe el silencio.

Una señal desconocida acaba de ser detectada.`,

        opciones: []
    }

};
