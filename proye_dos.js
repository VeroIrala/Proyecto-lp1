//Se definen las variables
let balas = 10;
const max_balas = 10;  

//Se muestra en la pantalla llamando al elemento con sus respectivos id definido en html
const contadorElemento = document.getElementById ("contador").querySelector(".numero");
const audio = document.getElementById('audio');
const recarga = document.getElementById('recarga');
const detras = document.getElementById('detras');

//Se activa la funcion para actualizar la cantidad de balas 
function actualizarContador() {
    //Aquí le añado cadenas de texto al numero y le añado la opcion que se mantenga en dos digitos siempre
    contadorElemento.textContent = balas.toString().padStart(2, '0'); 
}

//Defino un evento para presionar la tecla "a" y si las balas son menores al maximo las recarga
document.addEventListener('keydown', function(event) {
    if (event.key === 'a' || event.key === 'A') { // Verifica si la tecla "a" es presionada
        if (balas < max_balas) {
            balas = max_balas; // Recargar las balas al máximo
            actualizarContador();
            recarga.play(); /* Se reproduce el audio de recarga*/
            document.getElementById("mensaje").textContent = ""; // Limpiar mensaje si se recargaron
        }
    }
});

//Se ejecuta la funcion del clic sobre el target circle
document.querySelector(".target-circle").addEventListener("click", function(event) {
     
    if (balas > 0) { //Verifica si hay balas disponibles

        audio.play(); //Reproduce el sonido 

        balas--; //Disminuye la cantidad de balas del contador
        actualizarContador();

        //Elimina el mensaje de "sin municion" en caso de que haya balas
        document.getElementById("mensaje").textContent = "";
    } else {
        //Si no hay balas disponibles muestra el mensaje
        document.getElementById("mensaje").textContent = "¡SIN MUNICION!";
        detras.play();
    }
});

actualizarContador();




