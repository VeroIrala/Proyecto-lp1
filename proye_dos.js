let balas = 10;
const max_balas = 10;  

const contadorElemento = document.getElementById ("contador").querySelector(".numero");
const audio = document.getElementById('audio');
const recarga = document.getElementById('recarga');

function actualizarContador() {
    contadorElemento.textContent = balas.toString().padStart(2, '0'); 
}

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

document.querySelector(".target-circle").addEventListener("click", function(event) {
     
    if (balas > 0) {

    audio.play();

    
    balas--;
    actualizarContador();

    document.getElementById("mensaje").textContent = "";
    } else {
        document.getElementById("mensaje").textContent = "¡SIN MUNICION!"
    }
});

actualizarContador();




