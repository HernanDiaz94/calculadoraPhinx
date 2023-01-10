 function tomarValor(x){
    //console.log("Hhoifsd")
    //console.log(x)
    document.getElementById('Resultado').innerHTML += x;
}

function limpiarInput(){
    document.getElementById('Resultado').innerHTML = "";
}

function calcularResultado(){
    var resultado = eval(document.getElementById('Resultado').innerHTML);
    document.getElementById('Resultado').innerHTML = resultado;
}

var cero = document.getElementById('cero');
var coma = document.getElementById('coma');

var uno = document.getElementById('uno');
var dos = document.getElementById('dos');
var tres = document.getElementById('tres');
var cuatro = document.getElementById('cuatro');
var cinco = document.getElementById('cinco');
var seis = document.getElementById('seis');
var siete = document.getElementById('siete');
var ocho = document.getElementById('ocho');
var nueve = document.getElementById('nueve');

var suma = document.getElementById('suma');
var resta = document.getElementById('resta');
var multiplicacion = document.getElementById('multiplicacion');
var division = document.getElementById('division');
var igual = document.getElementById('igual');
var Borrar = document.getElementById('Borrar');

cero.addEventListener("click", function(){
    tomarValor(0);
})
punto.addEventListener("click", function(){
    tomarValor(".");
})

uno.addEventListener("click", function(){
    tomarValor(1);
})
dos.addEventListener("click", function(){
    tomarValor(2);
})
tres.addEventListener("click", function(){
    tomarValor(3);
})
cuatro.addEventListener("click", function(){
    tomarValor(4);
})
cinco.addEventListener("click", function(){
    tomarValor(5);
})
seis.addEventListener("click", function(){
    tomarValor(6);
})
siete.addEventListener("click", function(){
    tomarValor(7);
})
ocho.addEventListener("click", function(){
    tomarValor(8);
})
nueve.addEventListener("click", function(){
    tomarValor(9);
})



suma.addEventListener("click", function(){
    tomarValor("+");
})
resta.addEventListener("click", function(){
    tomarValor("-");
})
multiplicacion.addEventListener("click", function(){
    tomarValor("*");
})
division.addEventListener("click", function(){
    tomarValor("/");
})



igual.addEventListener("click", function(){
    calcularResultado();
})
Borrar.addEventListener("click", function(){
    limpiarInput();
})

 

/* class Calculadora{
    constructor(x,y){ //declaro el constructor
        this.x= x;
        this.y= y;
    }

    //declaro metodo estatico para sumar
    static area(a,b){ 
        return a + b;
    }
    //declaro metodo estatico restar
    static perimetro(a,b){
        return a - b;
    }
    //declaro metodo estatico multiplicar
    static perimetro(a,b){
        return a * b;
    }
    //declaro metodo estatico dividir
    static perimetro(a,b){
        return a / b;
    }

} */