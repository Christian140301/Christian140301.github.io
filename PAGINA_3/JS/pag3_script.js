let indice = 2;
let enlaces = ["../index.html", "../PAGINA_2/pag2.html", "../PAGINA_3/pag3.html"];
let titulos = ["Inicio", "Carta", "Contactanos"];
let slide = document.querySelector(".slider2");
let secc = document.querySelector(".seccion");
let enlace = secc.querySelector("a");
let titulo = secc.querySelector("h1");

enlace.href = enlaces[indice];
titulo.innerHTML = "Contactanos";

function atras() {
    if (indice > 0) {
        if (indice == 2) {
            slide.classList.replace("slider2", "slider1");
            indice--;
            enlace.href = enlaces[indice];
            titulo.innerHTML = titulos[indice];
        } else if (indice == 1) {
            slide.classList.replace("slider1", "slider0");
            indice--;
            enlace.href = enlaces[indice];
            titulo.innerHTML = titulos[indice];
        }
    } else if (indice == 0) {
        slide.classList.replace("slider0", "slider2");
        indice = 2;
        enlace.href = enlaces[indice];
        titulo.innerHTML = titulos[indice];
    }
}

function siguiente() {
    if (indice < 2) {
        if (indice == 0) {
            slide.classList.replace("slider0", "slider1");
            indice++;
            enlace.href = enlaces[indice];
            titulo.innerHTML = titulos[indice];
        } else if (indice == 1) {
            slide.classList.replace("slider1", "slider2");
            indice++;
            enlace.href = enlaces[indice];
            titulo.innerHTML = titulos[indice];
        }
    } else if (indice == 2) {
        slide.classList.replace("slider2", "slider0");
        indice = 0;
        enlace.href = enlaces[indice];
        titulo.innerHTML = titulos[indice];
    }
}

const error_list = document.getElementById("listado_errores");
const lista_datos = document.getElementById("listado_datos");
let mensaje_final = document.getElementById("mensaje_final");
let campos = ["Nombre", "Apellido", "DNI", "Mail"];
const nom_ape_pattern = /^([A-Za-z]){4,15}$/;
const mail_pattern = /^([A-za-z_.!/*#.\-\d]){2,60}@([A-Za-z_.!/*#.\-\d]){2,20}(\.([A-Za-z]){2,6})+$/;
const textarea_pattern = /^([A-Za-z0-9.,-\s]){100,600}$/;

function validar() {

    error_list.innerHTML = "";
    lista_datos.innerHTML = "";
    mensaje_final.innerHTML = "";

    let fnombre = document.getElementById("fnombre");
    let nombre = fnombre.value.trim();

    let fapellido = document.getElementById("fapellido");
    let apellido = fapellido.value.trim();  
    
    let fdni = document.getElementById("fdni");
    let dni = fdni.value.trim();   

    let fmail = document.getElementById("fmail");
    let mail = fmail.value.trim();   

    let t_area = document.getElementById("t_area");
    let texto_area = t_area.value;
    let lista_errores = [];
    let valor_campos = [];

    if (nombre == "") {
        lista_errores.push("Nombre vacio");
    } else if (!nom_ape_pattern.test(nombre)) {
        lista_errores.push("Nombre no valido");
    } else {
        valor_campos.push(nombre);
    }

    if (apellido == "") {
        lista_errores.push("Apellido vacio");
    } else if (!nom_ape_pattern.test(apellido)){
        lista_errores.push("Apellido no valido");
    } else {
        valor_campos.push(apellido);
    }

    if (dni == "") {
        lista_errores.push("DNI vacio");
    } else if(isNaN(dni) || dni.length > 8 || dni.length < 8){
        lista_errores.push("El DNI ingresado contiene otros caracteres o tiene menos o mas de 8 digitos");
    } else {
        valor_campos.push(dni);
    }

    if (mail == ""){
        lista_errores.push("Mail vacio")
    } else if(!mail_pattern.test(mail)){
        lista_errores.push("Mail no valido")
    } else {
        valor_campos.push(mail);
    }

    if (texto_area == "") {
        lista_errores.push("Debe dejar su comentario para continuar");
    } else if (!textarea_pattern.test(texto_area)){
        lista_errores.push("Su comentario debe tener entre 100 y 600 caracteres");
    }

    if (lista_errores.length > 0) {
        for (let a = 0; a < lista_errores.length; a++) {
            let elem = document.createElement("li");
            elem.innerHTML = lista_errores[a];
            error_list.appendChild(elem);
        }
    } 
    
    if (valor_campos.length > 0 && lista_errores.length == 0) {
        let confirmado = document.createElement("li");
        confirmado.innerHTML = "Datos enviados exitosamente!!!";
        lista_datos.appendChild(confirmado);
        for (let i = 0; i < valor_campos.length; i++) {
            let elem = document.createElement("li");
            elem.innerHTML = campos[i] + ": " + valor_campos[i];
            lista_datos.appendChild(elem);
        }
        mensaje_final.innerHTML = "Gracias por contactarnos, que tenga un buen dia/noche";
    } 
    return false;
}
