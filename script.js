var botonEncriptar = document.querySelector(".btn-encriptar");
var botonDesencriptar = document.querySelector(".btn-desencriptar");
var muneco = document.querySelector(".contenedor-muneco");
var contenedor = document.querySelector(".contenedor-parrafo");
var resultado = document.querySelector(".texto-resultado");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

function encriptar(){
    ocultarAdelante();
    var cajatexto = recuperarTexto();
    resultado.textContent = encriptarTexto(cajatexto);
}

function desencriptar(){
    ocultarAdelante();
    var cajatexto = recuperarTexto();
    resultado.textContent = desencriptarTexto(cajatexto);
}

function recuperarTexto(){
    var cajatexto = document.querySelector(".boxtext")
    return cajatexto.value
}

function ocultarAdelante(){
    muneco.classList.add("ocultar");
    contenedor.classList.add("ocultar");
}




function encriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal += "ai";
        }
        else if(texto[i] == "e"){
            textoFinal += "enter";
        }
        else if(texto[i] == "i"){
            textoFinal += "imes";
        }
        else if(texto[i] == "o"){
            textoFinal += "ober";
        }
        else if(texto[i] == "u"){
            textoFinal += "ufat"; 
        } else {
            textoFinal += texto[i];
        }
    }
    return textoFinal;
}


function desencriptarTexto(mensaje){
    var texto = mensaje;
    texto = texto.replace(/ai/g, "a");
    texto = texto.replace(/enter/g, "e");
    texto = texto.replace(/imes/g, "i");
    texto = texto.replace(/ober/g, "o");
    texto = texto.replace(/ufat/g, "u");
    return texto;
}


const btnCopiar = document.querySelector(".btn-copiar");
btnCopiar.addEventListener("click", copiar);

function copiar() {
    var contenido = document.querySelector(".texto-resultado").textContent;
    navigator.clipboard.writeText(contenido);
    console.log("Texto copiado: " + contenido);    
}



