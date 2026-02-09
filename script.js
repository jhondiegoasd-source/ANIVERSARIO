const musica = document.getElementById("musica");
const carta = document.getElementById("carta");
const boton = document.getElementById("abrirCarta");

let iniciada = false;

function iniciarMusica() {
    if (!iniciada) {
        musica.play().then(() => {
            console.log("Música iniciada");
        }).catch(err => {
            console.log("Error:", err);
        });
        iniciada = true;
    }
}

// Inicia música al primer toque o clic
document.body.addEventListener("click", iniciarMusica);
document.body.addEventListener("touchstart", iniciarMusica);

// abrir carta
boton.addEventListener("click", () => {
    carta.classList.toggle("abierta");
});
