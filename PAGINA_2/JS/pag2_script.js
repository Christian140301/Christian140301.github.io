let indice = 1;
let enlaces = ["../index.html", "../PAGINA_2/pag2.html", "../PAGINA_3/pag3.html"];
let titulos = ["Inicio", "Carta", "Contactanos"];
let slide = document.querySelector(".slider1");
let secc = document.querySelector(".seccion");
let enlace = secc.querySelector("a");
let titulo = secc.querySelector("h1");

enlace.href = enlaces[indice];
titulo.innerHTML = titulos[indice];

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
