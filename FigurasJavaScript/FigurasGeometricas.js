function perimetroCuadrado(l) {
    console.log("Cuadrado Perimetro!");
    return l*4;
}

function areaCuadrado(l) {
    console.log("Cuadrado area!");
    return l*l;
}

function perimetroTriangulo(l,l2,l3) {
    console.log("Triangulo Perimetro!");
    return l+l2+l3;
}

function areaTriangulo(b,h) {
    console.log("Triangulo area!");
    return (b*h)/2;
}

function circunferencia(r) {
    console.log("Circunferencia!");
    return r*2*Math.PI;
}

function areaCirculo(r) {
    console.log("Circulo area!")
    return Math.PI*(r**2);
}

function figurasGeometricas(lado=-1, lado1Base=-1, lado2=-1,lado3=-1,altura=-1, radio=-1) {
    if (lado!=-1) {
        console.group("Cuadrado");
        console.log(perimetroCuadrado(lado));
        console.log(areaCuadrado(lado));
        console.groupEnd();
    }

    console.group("Triangulo");
    if ( (lado1!=-1) && (lado2!=-1) && (lado3!=-1) ) {
        console.log(perimetroTriangulo(lado1Base,lado2,lado3));
    }

    if ( (lado1!=-1) && (altura!=-1)) {
        console.log(areaTriangulo(lado1Base,altura));
    }
    console.groupEnd();

    console.group("Circulo");
    if (radio!=-1) {
        console.log(circunferencia(radio));
        console.log(areaCirculo(radio));
    }
    console.groupEnd();
}

const lado = 5;             //Cuadrado
const base = 5, altura = 8, lado1 = base, lado2 = 9, lado3 = 9; //Triangulo
const radio = 9;            //Circulo

figurasGeometricas(lado,base,lado2,lado3,altura,radio);

//Html
function Cuadrado() {
    console.log(document.getElementById("inputCuadrado"));  //Qué se esta recuperando gracias a la func?
    var side = document.getElementById("inputCuadrado");    //Guardarlo en una variable
    console.log(side.value);                                //Conseguir solo valor del input
    alert(perimetroCuadrado(side.value));
}

function aCuadrado() {
    console.log(document.getElementById("inputCuadrado"));  //Qué se esta recuperando gracias a la func?
    var side = document.getElementById("inputCuadrado");    //Guardarlo en una variable
    console.log(side.value);                                //Conseguir solo valor del input
    alert(areaCuadrado(side.value));
}

function Triangulo() {
    var side1 = document.getElementById("inputTriangulo1");
    var side2 = document.getElementById("inputTriangulo2");
    var side3 = document.getElementById("inputTriangulo3");
    side1 = parseInt(side1.value);//Estaba obteniendo como string
    side2 = parseInt(side2.value);
    side3 = parseInt(side3.value);
    alert(perimetroTriangulo(side1, side2, side3));
}

function aTriangulo() {
    var side1 = parseInt(document.getElementById("inputTriangulo1").value);
    var height = parseInt(document.getElementById("inputTrianguloAltura").value);
    alert(areaTriangulo(side1,height));
}

function Circulo() {
    var r = document.getElementById("inputCirculo1").value;
    alert(circunferencia(r));
}

function aCirculo() {
    var r = document.getElementById("inputCirculo1").value;
    alert(areaCirculo(r));
}

function reset() {
    document.querySelector("#form-square").reset();
    document.querySelector("#form-triangle").reset();
    document.querySelector("#form-circle").reset();
}