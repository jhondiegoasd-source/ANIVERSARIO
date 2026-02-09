function iniciarPagina(){
document.getElementById("inicio").style.display="none";

document.querySelector(".contenido").classList.add("visible");

document.getElementById("musica").play();

/* fotos aparecen */
setTimeout(()=>{
document.querySelector(".galeria").classList.add("visible");
},1000);

/* carta se abre */
setTimeout(()=>{
document.getElementById("sobre").classList.add("abierto");
},2500);

/* mensaje final */
setTimeout(()=>{
document.getElementById("mensajeFinal").classList.add("visible");
},5000);
}

/* contador */
const inicioFecha = new Date("2024-02-09");

function actualizar(){
const hoy = new Date();
const diff = hoy - inicioFecha;
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
