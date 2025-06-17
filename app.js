// Arreglo de objetos que representan cada imagen del carrusel con su URL, nombre y descripción
let imagenes = [
    {
        "url": "Imagenes/nosotros.jpg",                  // Ruta de la imagen
        "nombre": "Razon N°1",                           // Título que se muestra
        "descripcion": "Me gusta ver cómo te esfuerzas día a día y siempre das lo mejor de ti, aunque no siempre tengas los mejores días. Sé que luchas por seguir adelante." // Texto descriptivo
    },
    {
        "url": "Imagenes/carrusel 1.jpg",
        "nombre": "Razon N°2",
        "descripcion": "Me gusta estar contigo porque en esos momentos me haces la persona más feliz del mundo. Compartimos momentos únicos: las risas, las conversaciones profundas y hasta los silencios juntos tienen un valor muy especial contigo."
    },
    {
        "url": "Imagenes/carrusel 2.jpg",
        "nombre": "Razon N°3",
        "descripcion": "Me aceptas tal y como soy, a pesar de mis muchos defectos, y me haces querer ser mejor día a día."
    },
    {
        "url": "Imagenes/carrusel 3.jpg",
        "nombre": "Razon N°4",
        "descripcion": "Me gusta que siempre te preocupas si he comido; hasta en el más mínimo detalle estás pendiente, haciéndome sentir muy especial."
    },
    {
        "url": "Imagenes/primera.jpg",
        "nombre": "Razon N°5",
        "descripcion": "Me gusta que eres una niña hermosa, increíble, maravillosa y excepcional. Eres perfecta."
    },
]

// Se obtienen los elementos HTML necesarios por su ID
let atras = document.getElementById('atras');        // Botón para ir a la imagen anterior
let adelante = document.getElementById('adelante');  // Botón para ir a la imagen siguiente
let imagen = document.getElementById('img');         // Contenedor donde se muestra la imagen actual
let puntos = document.getElementById('puntos');      // Contenedor de los puntos indicadores
let texto = document.getElementById('texto');        // Contenedor para el nombre y la descripción

let actual = 0; // Índice actual en el carrusel (empieza en la primera imagen)

// Se carga la posición inicial del carrusel
posicionCarrusel();

// Evento: al hacer clic en el botón "atras"
atras.addEventListener('click', function() {
    actual -= 1; // Va a la imagen anterior

    // Si el índice es menor que 0, vuelve al final del arreglo
    if (actual == -1){
        actual = imagenes.length - 1;
    }

    // Muestra la imagen correspondiente en el contenedor
    imagen.innerHTML = ` 
        <img class="img" src="${imagenes[actual].url}" alt="logo pagina" loading="lazy">
    `;

    // Muestra el texto (nombre y descripción)
    texto.innerHTML = `
        <h3>${imagenes[actual].nombre}</h3>
        <p>${imagenes[actual].descripcion}</p>
    `;

    // Actualiza los puntos del carrusel
    posicionCarrusel();
});

// Evento: al hacer clic en el botón "adelante"
adelante.addEventListener('click', function() {
    actual += 1; // Va a la siguiente imagen

    // Si llega al final, vuelve a la primera imagen
    if (actual == imagenes.length){
        actual = 0;
    }

    // Actualiza imagen
    imagen.innerHTML = ` 
        <img class="img" src="${imagenes[actual].url}" alt="logo pagina" loading="lazy">
    `;

    // Actualiza texto
    texto.innerHTML = `
        <h3>${imagenes[actual].nombre}</h3>
        <p>${imagenes[actual].descripcion}</p>
    `;

    // Actualiza los puntos
    posicionCarrusel();
});

// Función que actualiza los puntos indicadores debajo del carrusel
function posicionCarrusel() {
    puntos.innerHTML = ""; // Limpia los puntos existentes

    // Recorre cada imagen para agregar un punto
    for (var i = 0; i < imagenes.length; i++) {
        if (i == actual) {
            // Punto resaltado para la imagen actual
            puntos.innerHTML += '<p class="bold">.</p>';
        } else {
            // Punto normal para las otras imágenes
            puntos.innerHTML += '<p>.</p>';
        }
    }
}

// Variables para controlar el gesto táctil
let touchStartX = 0;
let touchEndX = 0;

// Detecta cuando empieza el toque
imagen.addEventListener('touchstart', function(e) {
    touchStartX = e.changedTouches[0].screenX;
}, false);

// Detecta cuando termina el toque y calcula la dirección
imagen.addEventListener('touchend', function(e) {
    touchEndX = e.changedTouches[0].screenX;
    handleGesture();
}, false);

// Función para determinar si fue deslizamiento a la izquierda o derecha
function handleGesture() {
    let delta = touchEndX - touchStartX;
    if (Math.abs(delta) > 50) { // Solo cuenta si fue un deslizamiento real
        if (delta > 0) {
            // Deslizó hacia la derecha (imagen anterior)
            atras.click();
        } else {
            // Deslizó hacia la izquierda (imagen siguiente)
            adelante.click();
        }
    }
}

const frameworks = [
    {
        name:"16 de Junio:",
        descripcion:"Aquí fue donde todo empezó para mí. Recuerdo ese día en el que me conmoví al escuchar el dolor en tu corazón por alguna situación que estabas atravesando. Más tarde, te envié un mensaje. No recuerdo exactamente lo que escribí en él, pero lo que más quería era que supieras que podías contar conmigo para lo que fuera.",
        imagen: "Imagenes/pequeña en la silla.jpg"
    },
    {
        name:"Dias despues:",
        descripcion:"Con el pasar de los días, nuestra relación se fue volviendo más linda. Recuerdo que hablábamos por mensajes y nos preguntábamos cómo estábamos y cómo habían sido nuestros días.",
        imagen: "Imagenes/con su papa y hermanos.jpg"
    },
    {
        name:"Alguien se fue de tarro:",
        descripcion:"En esta historia también está la Anto, ya que ella me hizo entender muchas cosas. Además, me decía que tú estabas empezando a sentir algo por mí. Al principio no le creía, pero veía cómo, día a día, nuestra relación de amigos se iba fortaleciendo.",
        imagen: "Imagenes/colegio de niña.jpg"
    },
    {
        name:"8 de Julio:",
        descripcion:"En este día todo cambió, como solíamos hacer y ya era habitual en nosotros, nos vinimos juntos desde San Felipe; mientras íbamos en el colectivo, recuerdo que quería comparar el tamaño de mi mano con la tuya y, en ese momento, me tomaste la mano, mi corazón se aceleró y no sabía qué hacer o qué pensar, ya que era algo nuevo para mí, y al llegar a Los Andes me dijiste que había algo que querías contarme, ese fue el momento en que me confesaste que te sentías atraída por mí (yo quedé... hielo, completamente paralizado), pero fue muy lindo el hecho de que te sinceraras conmigo, a decir verdad, no podía creerlo.",
        imagen: "Imagenes/5.jpg"
    },
    {
        name:"Despues de:",
        descripcion:"Aquí las cosas se pusieron raras, ya que se sentía extraño no poder estar tan cerca el uno del otro cuando estábamos en la iglesia, y me acuerdo que, cada vez que nos mirábamos, no podíamos evitar ponernos nerviosos (¿cómo no me iba a poner nervioso si la niña más hermosa no paraba de mirarme?).",
        imagen:"Imagenes/cuestaarriba1.jpg"
    },
    {
        name:"12 de Julio:",
        descripcion:"Aquí sucedió algo que nunca me imaginé que pudiera pasar; ese día fue la primera vez en mi vida que le dije 'te amo' a alguien, y se sintió aún más especial por el hecho de que tú eras esa persona única y especial a la cual se lo dije.",
        imagen:"Imagenes/especial.jpg"
    },
    {
        name:"La apuesta:",
        descripcion:"Pasa que Ibai hizo la Velada del año, entonces yo aposté contigo que si ganaba ElMariana tú me dabas un beso, pero si ganaba Plex, yo te lo daba a ti.",
        imagen:"Imagenes/carrusel0.jpg"
    },
    {
        name:"Habia que cumplir:",
        descripcion:"Plex había ganado la pelea, lo que significaba que tenía que darte un beso. No sabía cómo, ni dónde, ni cuándo, pero un día, caminando hacia la universidad, te dije que tenía que cumplir con la apuesta. Recuerdo que estaba muy nervioso, porque por primera vez en mi vida le iba a dar un beso a alguien (por ahí alguien me recomendó practicar primero con la mano). Entonces, te lo di, y fue un momento que siempre guardaré en mi corazón y que nunca olvidaré.",
        imagen:"Imagenes/ella con su sobrino.jpg"
    },
     {
        name:"Momentos dificiles:",
        descripcion:"No puedo dejar de lado el hecho de que tú eres una persona que me alienta a seguir. Muchas veces tenía días no muy buenos, pero entendí que podía contarte lo que me pasaba.",
        imagen:"Imagenes/manos.jpg"
    },
     {
        name:"Primera vez que fuimos a comer:",
        descripcion:"Un día, como cualquier otro, estando en San Felipe, recuerdo haberte preguntado si habías almorzado, a lo que me respondiste que no habías comido. Ahí fue cuando te pregunté qué querías comer, y me diste una respuesta muy propia de ti, tu infaltable: “no sé”. La cosa es que fuimos a comer a un lugar que no recuerdo bien, lo único que sé es que dejaste sin servilletas todo el local. Además, sentí el corazón lleno al poder tener un pequeño detalle contigo, especialmente porque el día anterior habías estado con tu papá en el hospital. En resumen, no era tu mejor momento y quería hacer todo lo posible para estar contigo (estaba cerca la Santa Cena).",
        imagen:"Imagenes/fav.jpg"
    },
     {
        name:"Le conte al siervo:",
        descripcion:"Ojalá ese día de estudio bíblico te hubieras quedado a tomar té en la iglesia. Recuerdo que ese día, como nunca, estaba solo y me quedé tomando té en la casa pastoral. Ahí fue cuando le conté a mi pastor Daniel y a la hermana Sarita que tú me gustabas. Quizá no fue la respuesta que esperaba, pero eso no me hizo cambiar ni siquiera dudar de lo que sentía por ti.",
        imagen:"Imagenes/yo chiquito animado.jpg"
    },
     {
        name:"Diciembre a dias de tu Cumpleaños:",
        descripcion:"Aquí fue un día muy importante para mí. No estaba siendo mi mejor día, ya que me había ido a un examen, pero eso no quitaba el hecho de que se acercaba tu cumpleaños, y eso me tenía feliz. Saber que la niña que era todo para mí pronto cumpliría años realmente me llenaba de alegría. Ese día te llamé porque no sabía cómo entregarte tu regalo. Recuerdo que me dijiste que nos juntáramos en Los Andes, y fue ahí cuando te di un regalo muy sencillo por mi parte, pero me conmovió ver que salieran lágrimas de tus ojitos.",
        imagen:"Imagenes/pulsera animada.jpg"
    },
     {
        name:"Navidad:",
        descripcion:"Esa noche y al día siguiente recuerdo que pudimos pasar mucho tiempo juntos, y eso me encantó. A decir verdad, no es normal la felicidad que tú me das, además de que me hiciste una carta hermosa (tú, mi 24 de diciembre).",
        imagen:"Imagenes/lampara1.jpg"
    },
     {
        name:"Año Nuevo:",
        descripcion:"Ese día no pudimos vernos, pero fuiste la primera persona en la que pensé y a quien abracé.",
        imagen:"Imagenes/navidad animada.jpg"
    },
    {
        name:"Paso del tiempo:",
        descripcion:"Después estuvimos un par de semanas lejos. Me costaba entenderlo, pero lo importante era que tú estabas bien, y como dicen, el amor todo lo espera, así que solo tocaba esperar.",
        imagen:"Imagenes/dedo.jpg"
    },
    {
        name:"Te veo despues de harto tiempo:",
        descripcion:"El día que te volví a ver sentí muchas cosas. Quería abrazarte, besarte y no soltarte, pero estábamos en la iglesia. Además, yo estaba todo sucio porque estábamos pintando la casa pastoral. Pero recuerdo verte, y en un momento se te salió una lágrima; después me explicaste que era de emoción.",
        imagen:"Imagenes/pasotime.jpg"
    },
    {
        name:"Salida al cerro:",
        descripcion:"Nos pusimos de acuerdo para subir el Cerro de la Virgen porque, según alguien, es más seguro. Ya estando en el cerro, pudimos tomar desayuno, pero más allá de la actividad o de la comida, disfruté poder pasar tiempo junto a ti.",
        imagen:"Imagenes/cerro.jpg"
    },
    {
        name:"29 de Mayo:",
        descripcion:"Recuerdo haber tenido una conversación contigo en la que te decía que no quería que mi cumpleaños fuera uno normal, que solo quería estar tranquilo y sin ningún tipo de celebración. Pero gracias a ti y a otras personas, recuerdo que me hicieron sentir muy querido y especial, a pesar de que no estaba pasando por mis mejores días. Ese día en específico, gracias a ti y a los demás, lo pasé bien (con la caja tan linda, casi pensé que venía un anillo de compromiso).",
        imagen:"Imagenes/cumple.jpg"
    },
    {
        name:"Actualidad:",
        descripcion:"A día de hoy puedo decir que te amo con la misma intensidad que al principio. No sé qué pasará más adelante, pero eres lo que siempre soñé. Puedo decir que contigo estoy viviendo un sueño que no quiero que nunca se acabe. Eres mi complemento, la persona que me hace feliz, y le pido a Dios que me siga dando momentos a tu lado. Gracias por amarme, por soportarme y por hacerme sentir que tengo importancia en este mundo.",
        imagen:"Imagenes/primera.jpg"
    },
]

// Render HTML
var html = "";
frameworks.forEach(e => {
    html += `
        <div class='child'>
            <div class='content'>
                <img src='${e.imagen}' alt='${e.name}' class='img-timeline'>
                <h4>${e.name}</h4>
                <p>${e.descripcion}</p>
            </div>
        </div>
    `;
});
timeline.innerHTML = html;

// Animación al hacer scroll
const showOnScroll = () => {
    const scroll = document.documentElement.scrollTop;
    const items = document.querySelectorAll(".child");

    items.forEach(elem => {
        if (elem.offsetTop < scroll + window.innerHeight * 0.85) {
            elem.classList.add('_show');
        }
    });
};

// Ejecutar al cargar y al hacer scroll
window.addEventListener("scroll", showOnScroll);
window.addEventListener("load", showOnScroll);

function drag(event){
    event.dataTransfer.setData('text',event.target.id)
}

function allowDrop(event){
    event.preventDefault();
}

function drop(event){
    event.preventDefault();
    let data = event.dataTransfer.getData('text');
    event.target.appendChild(document.getElementById(data));

    // Verifica si el puzzle está en orden correcto
    verificarPuzzle();
} 

onload = function(){
    let parent = document.getElementById('drag');
    let frag = document.createDocumentFragment();
    while (parent.children.length){
        frag.appendChild(parent.children[Math.floor(Math.random() * parent.children.length)]);
    }
    parent.appendChild(frag);
}

const envoltura = document.querySelector(".envoltura-sobre");
const carta = document.querySelector(".carta");

document.addEventListener("click", (e) => {
    if (e.target.matches(".sobre") || 
        e.target.matches(".solapa-derecha") ||
        e.target.matches(".solapa-izquierda") ||
        e.target.matches(".corazon")) {
        envoltura.classList.toggle("abierto");
        envoltura.classList.add("desactivar-sobre")

        if (!carta.classList.contains("abierta")) {
            setTimeout(() => {
                carta.classList.add("mostrar-carta");

                setTimeout(() => {
                    carta.classList.remove("mostrar-carta");
                    carta.classList.add("abierta");
                }, 500);
            }, 1000);
        }
    } else if (e.target.matches(".envoltura-sobre *")) {
        envoltura.classList.remove("abierto");
        envoltura.classList.remove("desactivar-sobre")
        if (carta.classList.contains("abierta")) {
            carta.classList.add("cerrando-carta");

            setTimeout(() => {
                carta.classList.remove("cerrando-carta");
                carta.classList.remove("abierta")
            }, 500);
        }
    }
})