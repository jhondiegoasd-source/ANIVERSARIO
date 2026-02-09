function abrirCarta(){
  document.getElementById("carta").classList.add("abrir");
}

function crearCorazon(){
  const heart=document.createElement("div");
  heart.className="heart";
  heart.innerHTML="❤";
  heart.style.left=Math.random()*100+"vw";
  heart.style.animationDuration=3+Math.random()*2+"s";
  document.querySelector(".hearts").appendChild(heart);

  setTimeout(()=>heart.remove(),5000);
}

setInterval(crearCorazon,300);

const inicio = new Date("2024-02-09"); // cambia fecha

function actualizarTiempo(){
  const ahora = new Date();
  const diff = ahora - inicio;
  const dias = Math.floor(diff/(1000*60*60*24));

  document.getElementById("contador").innerHTML =
  "Llevamos juntos " + dias + " días ❤️";
}

setInterval(actualizarTiempo,1000);
actualizarTiempo();
