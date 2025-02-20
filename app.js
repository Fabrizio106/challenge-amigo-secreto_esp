// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []

function agregarCompa() {
    let nombre = document.querySelector("input").value;
    if (nombre === ""){
        alert("Por favor ingresa un nombre")
        } else {
            amigos.push(nombre);
            document.querySelector("input").value = "";
            console.log(amigos);
            ActualizarAmigos();
    }
}

function ActualizarAmigos(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}



function sortearAmigo(){

    let indice = Math.floor(Math.random()*amigos.length );
    let sorteado = amigos[indice];
    let resultado = document.getElementById("resultado");

    if (amigos.length === 0) {
        alert("No hay amigos para sortear");
    }
    else {

    resultado.innerHTML = `El amigo sorteado es ${sorteado} `;
    listaAmigos.innerHTML = ""

    }
}