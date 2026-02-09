function abrirCarta(){
document.getElementById("sobre").classList.add("abierto");
}

/* contador */
const inicio = new Date("2024-02-09");

function actualizar(){
const hoy = new Date();
const diff = hoy - inicio;
const dias = Math.floor(diff/(1000*60*60*24));

document.getElementById("contador").innerText =
"Llevamos juntos " + dias + " días ❤️";
}

setInterval(actualizar,1000);
actualizar();

/* corazones */
function crearCorazon(){
const heart = document.createElement("div");
heart.classList.add("corazon");
heart.innerHTML="❤";
heart.style.left=Math.random()*100+"vw";
heart.style.animationDuration=3+Math.random()*3+"s";

document.body.appendChild(heart);
setTimeout(()=>heart.remove(),6000);
}

setInterval(crearCorazon,300);

setTimeout(()=>heart.remove(),6000);
}

setInterval(crearCorazon,300);
