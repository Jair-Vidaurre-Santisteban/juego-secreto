let numeroMaximo = 10;
let numeroIntentos = 0;
let listaNumerosSorteados = [];
let numeroSecreto;



function asignarTextoElemento(elemento, texto) {
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML=texto;

}
function verificarIntento() {

    let numeroIngresado = document.getElementById('valorUsuario').value;

    if (numeroIngresado == numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el numero en ${numeroIntentos} ${(numeroIntentos === 1) ? 'vez' : 'veces'}`);
        
        document.getElementById('reiniciar').removeAttribute('disabled');
        
        
    }else{
        if (numeroIngresado > numeroSecreto) {
            asignarTextoElemento('p', 'El numero es menor');
            
        } else {
            asignarTextoElemento('p', 'El numero es mayor');
            
        }
        numeroIntentos++;
        limpiarCampos();
        
    }
    return;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()* numeroMaximo)+1;

    console.log(numeroGenerado);
    
    if (listaNumerosSorteados.length == numeroMaximo) {
        
        asignarTextoElemento('p','Ya se sortearon todos los numero posibles');
    }else{
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            
            return generarNumeroSecreto();
            
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }

    }

    return numeroGenerado;

}
function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del numero secreto');
    asignarTextoElemento('p', `Indica el numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    numeroIntentos = 1;

}

function limpiarCampos() {
    document.querySelector('#valorUsuario').value = '';
}

function reiniciarJuego() {
    limpiarCampos();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled' ,'true');
    
}

condicionesIniciales();