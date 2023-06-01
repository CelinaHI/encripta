var botonEncriptar = document.querySelector(".botonencriptar");
var botonDesencriptar = document.querySelector(".botondesencriptar");
var muneco = document.querySelector(".dollbox");
var cajatexto = document.querySelector(".texbox2");
var resultado = document.querySelector(".resultado");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

function encriptar(){
    ocultarAdelante();
    var cajadetexto = recuperarTexto();
    resultado.textContent = encriptarTexto(cajadetexto);
}

function desencriptar(){
    ocultarAdelante();
    var cajadetexto = recuperarTexto();
    resultado.textContent = desencriptarTexto(cajadetexto);
}

function recuperarTexto(){
    var cajadetexto = document.querySelector(".texbox");
    return cajadetexto.value;
}

function ocultarAdelante(){
    muneco.classList.add("ocultar");
    cajatexto.classList.add("ocultar");
}

function encriptarTexto(mensaje) {
    var texto=mensaje;
    var textoFinal=""; 

    for(var i = 0; i < texto.length; i ++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai";
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "enter";
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes";
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "ober";
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat";
        }
        else{
            textoFinal=textoFinal + texto[i];
        }    
    }
    return textoFinal;
}

function desencriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0 ; i < texto.length ; i ++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "a";
            i = i + 1;
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "e";
            i = i + 4;
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "i";
            i = i + 3;
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "o";
            i = i + 3;
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "u";
            i = i + 3;
        }
        else{
            textoFinal = textoFinal + texto[i];
        }       
    }
    return textoFinal;
}


const botonCopiar = document.querySelector(".botoncopiar");
botonCopiar.addEventListener("click", copiar = () => {
var contenido = document.querySelector(".resultado").textContent;
navigator.clipboard.writeText(contenido);
console.log("Copiando");    
})