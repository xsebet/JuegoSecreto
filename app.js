let numeromax=Number (prompt(`Ingrese maximo número`));
//1let numeromax=Number (0);
let listaNumerosSorteado = [];
let nrosecreto= 0;
let cont = Number (1);
let max_intento = Number (0);


function establecer_juego() {
    AsignatTextoElemento('p', 'Indica maximo de intento');

    const valorUsuario = parseInt(document.getElementById('Usuario').value);
    if (valorUsuario > 0) {
        nrosecreto=generarNumeroSecreto();
        console.log (nrosecreto);
        max_intento = valorUsuario;
        AsignatTextoElemento('p', `Indica un número del 1 al ${numeromax}.  ${cont}/${max_intento}`);
        return true;
    } else {
        AsignatTextoElemento('p', 'Por favor, ingresa un número mayor que 0');
        return false;
    }
};


function inicio() {
    const juegoValido = establecer_juego();

    if (!juegoValido) return; // Si no se ingresó bien, no continúa

    const contenedorBotones = document.querySelector('.chute');
    document.getElementById('btn_confirmar_intento').remove();

    const btnIntentar = document.createElement('button');
    btnIntentar.textContent = 'Intentar';
    btnIntentar.classList.add('container__boton');
    btnIntentar.setAttribute('onclick', 'verificar_Intento();');
    btnIntentar.id = 'intentar';
    contenedorBotones.appendChild(btnIntentar);

    const btnReiniciar = document.createElement('button');
    btnReiniciar.textContent = 'Nuevo juego';
    btnReiniciar.classList.add('container__boton');
    btnReiniciar.setAttribute('onclick', 'reiniciar_juego();');
    btnReiniciar.id = 'reiniciar';
    btnReiniciar.disabled = true; // Se activará cuando se termine el juego
    contenedorBotones.appendChild(btnReiniciar);

    const btnMax = document.createElement('button');
    btnMax.textContent = 'Nuevo Maximo';
    btnMax.classList.add('container__boton');
    btnMax.setAttribute('onclick', 'NuevoMax ();');
    btnMax.id = 'maximo';
    contenedorBotones.appendChild(btnMax);
    limpiarCaja ();
    AsignatTextoElemento('h1',`Juego del numero secreto`);
};


function AsignatTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);

    elementoHTML.innerHTML=texto;
};

//Recursividad 
function generarNumeroSecreto () {
    let nrosecreto2 = Math.floor(Math.random()*numeromax)+1;
    if (listaNumerosSorteado.length>=numeromax) {
        listaNumerosSorteado = []; 
        listaNumerosSorteado.push(nrosecreto2); 
        console.log(listaNumerosSorteado);
        return nrosecreto2
    } else {
        if (listaNumerosSorteado.includes(nrosecreto2)) {
            console.log(listaNumerosSorteado);
            return generarNumeroSecreto ();
        } else {      
            listaNumerosSorteado.push(nrosecreto2);
            console.log(listaNumerosSorteado);
            return nrosecreto2;
        }
    }
};

function limpiarCaja () {
    document.querySelector ('#Usuario').value ='';

}; 


function verificar_Intento() {
    let nroUsuario = parseInt(document.getElementById('Usuario').value);
/*
    console.log(typeof(nroUsuario));
    console.log(typeof(nrosecreto));
    console.log (nroUsuario);
    console.log (nrosecreto);
    
*/
    console.log (nrosecreto===nroUsuario);
    if (nrosecreto===nroUsuario) {
        AsignatTextoElemento ('p',`¡¡¡Acertaste el número!!! Lo hiciste ${cont===1 ? `en ${cont} intento`:` en ${cont} intentos` }`)
        document.getElementById('reiniciar').disabled = false;
        document.getElementById('reiniciar').classList.add('boton-activo'); 
    }else if (cont==max_intento) {
        AsignatTextoElemento ('p',`Incorrecto... Se te acabaron tus intentos`);
        document.getElementById('reiniciar').disabled = false;
        document.getElementById('reiniciar').classList.add('boton-activo');

} else if (nroUsuario>nrosecreto) {
        AsignatTextoElemento ('p',`Incorrecto... Respuesta es menor`) ;
        cont++
    } else {
        AsignatTextoElemento ('p',`Incorrecto... Respuesta es mayor`)
        cont++
    } 
    
    limpiarCaja ();
    AsignatTextoElemento('h1',`Juego del numero secreto`);
};


function reiniciar_juego() {
    nrosecreto= generarNumeroSecreto ();
    cont = Number (1);
    max_intento = Number (0);

    console.log (nrosecreto);

    AsignatTextoElemento('p', 'Ingresa el número máximo de intentos para comenzar');
    AsignatTextoElemento('h1', `Juego del número secreto`);
    limpiarCaja();

    const contenedorBotones = document.querySelector('.chute');

    const btnIntentar = document.getElementById('intentar');
    const btnReiniciar= document.getElementById('reiniciar');
    if (btnReiniciar) btnIntentar.remove();
    if (btnReiniciar) btnReiniciar.remove();

    contenedorBotones.innerHTML = '';

    const btnConfirmar = document.createElement('button');
    btnConfirmar.textContent = 'Confirmar intentos';
    btnConfirmar.classList.add('container__boton');
    btnConfirmar.id = 'btn_confirmar_intento';
    btnConfirmar.setAttribute('onclick', 'inicio();');
    contenedorBotones.appendChild(btnConfirmar);
};

function NuevoMax () {
    numeromax=Number (prompt(`Ingrese maximo número`));
    alert ("Se ha actualizado el maximo")
    reiniciar_juego();
};

AsignatTextoElemento('h1',`Juego del numero secreto`);
AsignatTextoElemento('p', 'Indica maximo de intento');