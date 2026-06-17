const scenes = {

    intro_01: {

    titulo: "Prólogo",

    imagen: "imagenes/prologo/inicio.png",

    texto: `Nunca vi la Tierra.

Nadie de mi generación la vio.

La conocemos por archivos incompletos...`,

    opciones: [
        {
            texto: "Continuar",
            siguiente: "intro_02"
        }
    ]
},

        //////////////////////
        ///* INTRODUCCION *///
        //////////////////////

    inicio: {
        titulo: "Introducción",
        imagen: "imagenes/prologo/inicio.png",
        texto: `Año 174 D.H.
(Después de la Huida)
Nunca vi la Tierra.
Nadie de mi generación la vio.
La conocemos por archivos incompletos, grabaciones dañadas y relatos transmitidos durante generaciones
como si fueran leyendas.`,
        opciones: [
            {
                texto: "Continuar",
                siguiente: "inicio2"
            }
        ]
    },

    inicio2: {
        titulo: "Introducción",
        imagen: "imagenes/prologo/inicio.png",
        texto: `Océanos, bosques, lluvia, animales, ciudades que se extendían hasta donde alcanzaba la vista.
A veces nos preguntabamos si realmente existió.`,
        opciones: [
            {
                texto: "Atrás",
                siguiente: "inicio"
            },
            {
                texto: "Continuar",
                siguiente: "estacion"
            }
        ]
    },

    estacion: {
        titulo: "Introducción",
        imagen: "imagenes/prologo/estacion.png",
        texto: `La humanidad vive dispersa entre estaciones espaciales y colonias construidas en mundos lejanos. Pequeños refugios suspendidos en la oscuridad.
La nuestra se llama Nueva Esperanza.
Un nombre optimista para un lugar que apenas sobrevive.
La estación orbita una estrella sin nombre en una región olvidada del espacio conocido. Estamos tan lejos de la Tierra que ni siquiera aparece en nuestros mapas.
Y sin embargo, todavía pensamos en ella.
Todavía soñamos con ella.

Todavía la extrañamos.
Aunque nunca la hayamos visto.`,
        opciones: [
            {
                texto: "Atrás",
                siguiente: "inicio2"
            },
            {
                texto: "Siguiente",
                siguiente: "estacion2"
            }
        ]
    },

     estacion2: {
        titulo: "Introducción",
        imagen: "imagenes/prologo/estacion.png",
        texto: `Yo era operador de comunicaciones.
Un trabajo aburrido.
Escuchar ruido, analizar transmisiones,
revisar sistemas, completar informes,
volver a empezar.
Ciclo tras ciclo.

Nada cambiaba jamás.`,
        opciones: [
            {
                texto: "Atrás",
                siguiente: "estacion"
            },
            {
                texto: "Siguiente",
                siguiente: "senal"
            }
        ]
    },

    senal: {
        titulo: "Introducción",
        imagen: "imagenes/prologo/senal.png",
        texto: `Hasta aquella alarma, ese sonido que nunca antes pensamo escuchar, sonó.

No sabiamos de que se trataba, pero sí sabiamos que desde ese momento
ya nada sería igual`,
        opciones: [
            {
                texto: "Atrás",
                siguiente: "estacion"
            },
            {
                texto: "Comenzar",
                siguiente: "intro_final"
            }
        ]
    },
    intro_final: {
    titulo: "Identificación",
    imagen: "imagenes/prologo/placeholder.png",
    texto: `Antes de acceder a los registros de comunicaciones debe identificarse.`,
    opciones: [
    {
        texto: "Identificarme",
        siguiente: "crear_personaje"
    }
]
},





        ////////////////////
        ///* Capitulo 1 *///
        ////////////////////


    capitulo1: {
        titulo: "Buen dia",
        imagen: "imagenes/placeholder.png",
        texto: `Un día cualquiera
Abrí los ojos antes de que sonara la alarma.
La iluminación artificial de mi módulo personal acababa de cambiar del azul nocturno al blanco tenue que simulaba un amanecer.
No existían amaneceres reales en Nueva Esperanza.
Ni atardeceres, ni estaciones, ni lluvia. Todo era una simulación diseñada para que nuestros cerebros
no olvidaran que alguna vez pertenecimos a un planeta.
Me quedé observando el techo durante unos segundos.
Otro ciclo.
Otro día exactamente igual al anterior.`,
        opciones: [
            {
                texto: "Siguiente",
                siguiente: "desayuno"
            },
            
        ]
    },

    desayuno: {
        titulo: "Buen dia",
        imagen: "imagenes/placeholder.png",
        texto: `Un día cualquiera
Abrí los ojos antes de que sonara la alarma.
La iluminación artificial de mi módulo personal acababa de cambiar del azul nocturno al blanco tenue que simulaba un amanecer.
No existían amaneceres reales en Nueva Esperanza.
Ni atardeceres, ni estaciones, ni lluvia.
`,
        opciones: [
            {
                texto: "Atrás",
                siguiente: "capitulo1"
            },
            {
                texto: "Continuar",
                siguiente: "desayunar"
            }
        ]
    },



};
