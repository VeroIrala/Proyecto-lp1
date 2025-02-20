let balas = 10;

const contadorElemento = document.getElementById ("contador");
const audio = document.getElementById('audio');

function actualizarContador() {
    contadorElemento.textContent = `Balas restantes: ${balas.toString().padStart(2, '0')}`; 
}


document.querySelector(".target-circle").addEventListener("click", function(event) {
     
    if (balas > 0) {

    audio.play();

    balas--;
    actualizarContador();

    document.getElementById("mensaje").textContent = "";
    } else {
        document.getElementById("mensaje").textContent = "SIN MUNICION"
    }
});

actualizarContador();


