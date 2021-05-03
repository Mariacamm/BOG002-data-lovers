import data from './data/rickandmorty/rickandmorty.js';

import {filtroEspecie, filtroGenero, az, za, filtrar} from './data.js'

// console.log(data);

const infoRYM = data.results;

function mostrarItems(data) {
    // DATA PERSONAJES
    // Creo un contenedor para la imagen y el nombre de los personajes
    let todosPersonajes = document.getElementById("Pantalla2");
    todosPersonajes.innerHTML = ("");

    for (let i = 0; i < data.length; i++) {
        let contenedorPersonajes = document.createElement("div");
        contenedorPersonajes.className = "contenedorPersonajes";
        todosPersonajes.appendChild(contenedorPersonajes);

        // Creo un elemento (imagen), recorro la data para acceder a ella iterando y la pongo sobre el div    
        let imagenPersonajes = document.createElement("img");
        imagenPersonajes.src = data[i].image;
        imagenPersonajes.className = "imgContenedor";
        contenedorPersonajes.appendChild(imagenPersonajes);

        let nombrePersonajes = document.createElement("p");
        nombrePersonajes.innerHTML = data[i].name;
        nombrePersonajes.className = "Titulos";
        contenedorPersonajes.appendChild(nombrePersonajes);

        // Hover
        let capaInfo = document.createElement("div")
        capaInfo.innerHTML = "<br>"+"Species: "+data[i].species + "<br>Gender: "+data[i].gender+"<br>Status: "+data[i].status+"<br>Location: "+data[i].location.name;
        capaInfo.className = "capa";
        contenedorPersonajes.appendChild(capaInfo)

        // Lo reflejo en pantalla
        document.body.appendChild(todosPersonajes);
    }
}
mostrarItems(infoRYM);

//OCULTAR PRIMERA PANTALLA Y MOSTRAR SEGUNDA
function mostrar() {
    document.getElementById("Filtros").style.display = "block";
    document.getElementById("Principal").style.display = "none";
    let elementos = document.getElementsByClassName("todosPersonajes");
    for (let i = 0; i < elementos.length; i++) {
        elementos[i].style.display = "block";
    }
}

let botonPersonajes = document.getElementById("Personajes");
botonPersonajes.addEventListener("click", mostrar)

// ORGANIZAR ALFABETICAMENTE
function organizar(e) {
    let valor = e.target.value;
    if (valor == "AZ") {
        mostrarItems(az(infoRYM))       
    }
    if (valor == "ZA") {
        mostrarItems(za(infoRYM))
    }
    if (valor == "1") {
        mostrarItems(infoRYM)
    }
}

let botonOrganizaAz = document.getElementById("Organizar");
botonOrganizaAz.addEventListener("change", organizar);

// BARRA DE BÚSQUEDA
let buscador = document.querySelector("#buscador");

buscador.addEventListener("keyup", function (){
    let filtrado = filtrar(buscador.value, infoRYM);
    mostrarItems(filtrado);
});


// Filtro especies enlazado al Select
function organizarEspecies(e) {
    let seleccion = e.target.value;
    mostrarItems(filtroEspecie(seleccion, infoRYM));
}

let botonEspecies = document.getElementById("Especies");
botonEspecies.addEventListener("change", organizarEspecies);

// Filtro genero enlazado al Select
function organizarGenero(e) {
    let opcion = e.target.value;
    mostrarItems(filtroGenero(opcion, infoRYM))
}

let botonGenero = document.getElementById("Genero");
botonGenero.addEventListener("change", organizarGenero);


// Obtener las especies de los personajes
// let especies = [];
// for (let i = 0; i < infoRYM.length; i++) {
//     especies.push(infoRYM[i].species);
// }
// // console.log(especies)

// //   Mostrar las especies únicas sin repetirlas
// let especiesUnic = especies.reduce((acc, item) => {
//     if (!acc.includes(item)) {
//         acc.push(item);
//     }
//     return acc;
// }, [])

// console.log(especiesUnic);

//   Filtrar por especies
// function filtroEspecie(especie) {
//     let filtroE = infoRYM.filter((item) => item.species === especie);
//     console.log(especie)
//     return filtroE
// }

//Filtrar Genero
// let genero = [];
// for (let i = 0; i < infoRYM.length; i++) {
//     genero.push(infoRYM[i].gender);
// }
// console.log(genero)

// let generoUnic = genero.reduce((acc, item) => {
//     if (!acc.includes(item)) {
//         acc.push(item);
//     }
//     return acc;
// }, [])
// // console.log(generoUnic)

// function filtroGenero(genero) {
//     let filtroG = infoRYM.filter((item) => item.gender === genero);
//     console.log(filtroG)
//     return filtroG
// }







