var indice = 0;
var enlaces = ["../PAGINA_3/pag3.html", "../index.html", "../PAGINA_2/pag2.html"];
var titulos = ["Contactanos", "Inicio", "Carta"];
var slide = document.querySelector(".slider0");
var secc = document.querySelectorAll(".seccion");
var enlace = secc[indice].querySelector("a");
var titulo = secc[indice].querySelector("h1");

function atras(){
    if (indice > 0){
        if (indice == 2){
            slide.classList.replace("slider2", "slider1");
            indice--;
            enlace.href = enlaces[indice];
            titulo.innerHTML = titulos[indice];
        } else if (indice == 1){          
            slide.classList.replace("slider1", "slider0");
            indice--;
            enlace.href = enlaces[indice];
            titulo.innerHTML = titulos[indice];
        }   
    } else if (indice == 0){
        slide.classList.replace("slider0", "slider2");
        indice = 2;
        enlace.href = enlaces[indice];
        titulo.innerHTML = titulos[indice];
    }
    console.log(indice);
}

function siguiente(){ 
    if (indice < 2) {
        if (indice == 0){
            slide.classList.replace("slider0", "slider1");
            indice++;
            enlace.href = enlaces[indice];
            titulo.innerHTML = titulos[indice];
        } else if (indice == 1){
            slide.classList.replace("slider1", "slider2");
            indice++;
            enlace.href = enlaces[indice];
            titulo.innerHTML = titulos[indice];
        } 
    } else if (indice == 2){
        slide.classList.replace("slider2", "slider0");
        indice = 0;
        enlace.href = enlaces[indice];
        titulo.innerHTML = titulos[indice];
    }
    console.log(indice);
}
/*
let i = document.querySelector(".contenedor");
let a = document.createElement("h1").innerHTML = "hola";
*/
function valid_datos(){
    const nom = document.getElementById("fname");
    const ape = document.getElementById("fapellido");
    const dni = document.getElementById("fdni");
    const area = document.getElementById("t_area");
    return false;
}
