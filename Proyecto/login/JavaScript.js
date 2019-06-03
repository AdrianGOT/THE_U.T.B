var botones = document.getElementsByClassName("btn");
var inicio = document.getElementsByClassName("i");
var pantalla = document.getElementsByClassName("P");
var Tarjeta = document.getElementsByClassName("padre");
var Formulario = document.getElementsByClassName("formulario");
var Back = document.getElementsByClassName("Back");
var B_enviar = document.getElementsByClassName("boton_enviar");

botones[0].onclick = Ap;
botones[1].onclick = ap1;

Tarjeta[0].onclick = ap2;
Tarjeta[1].onclick = ap3;   

Tarjeta[2].onclick = ap4;
Tarjeta[3].onclick = ap5;

Back[0].onclick = Regresar;
Back[1].onclick = Regresar;

B_enviar[1].onclick = Adelante;
B_enviar[2].onclick = Adelante;
B_enviar[0].onclick = Adelante;
B_enviar[3].onclick = Adelante;


function Ap(){
    inicio[0].classList.add('A');
    pantalla[0].classList.toggle('A');
}
function ap1(){
    inicio[0].classList.toggle('A');
    pantalla[1].classList.toggle('A');
}

function ap2(){
    Tarjeta[1].classList.toggle('A');
    Formulario[0].classList.toggle('A');
}
function ap3(){
    Formulario[1].classList.toggle('A');
    Tarjeta[0].classList.toggle('A');
}
function ap4(){
    Formulario[2].classList.toggle('A');
    Tarjeta[3].classList.toggle('A');
}
function ap5(){
    Formulario[3].classList.toggle('A');
    Tarjeta[2].classList.toggle('A');
}
function Regresar(){
    pantalla[0].classList.add('A');
    pantalla[1].classList.add('A');
    inicio[0].classList.toggle('A');
}
