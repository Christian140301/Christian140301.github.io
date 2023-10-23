var indice = 0;
var enlaces = ["../PAGINA_2/pag2.html", "../PAGINA_3/pag3.html", "../index.html"];
var titulos = ["Carta", "Contactanos", "Inicio"];
var slide = document.querySelector(".slider0");
var secc = document.querySelectorAll(".seccion");
var enlace = secc[indice].querySelector("a");
var titulo = secc[indice].querySelector("h1");

let a = document.createElement("a");
let s = document.createElement("h1");


console.log(a);
console.log(s);

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
}
