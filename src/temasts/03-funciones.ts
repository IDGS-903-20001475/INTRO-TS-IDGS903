
function suma():void{
    console.log(3+6)
}

function suma2(a:number,b:number):number{
    return a+b
}

interface Mascota{
    nombre:string;
    edad:number;
    mostrarEdad:()=>void;
}

function calcular(mascota:Mascota,x:number):void {
    mascota.edad+=x;
    console.log(mascota)
}

const nuevaMascota:Mascota={
    nombre:'Juan',
    edad:3,
    mostrarEdad() {
        console.log('La edad es : ',this.edad);
    },
}
calcular(nuevaMascota,5)

function multiplicar(n1:number,otronumero:number,nuevonumero=3):number{
    let tem=n1*nuevonumero
    return tem
}

console.log(multiplicar(3,0,2))
console.log(suma2(3,5))

//Funciones anonimas
const funcSumar=function(valor1:number,valor2:number):number{
    return valor1+valor2;
}

console.log(funcSumar(4,5));

//funcion con parametros opcionales
function calcular1(n1:number,n2:number,n3?:number):number{
    if(n3)
        return n1+n2+n3;
    else    
        return n1+n2;
}
console.log(calcular1(3,2,5))
console.log(calcular1(3,2))

//Parametros Rest en funciones
function calcular2(...valores:number[]){
    let suma=0
    for(let x=0;x<valores.length;x++)
        suma+=valores[x]
    return suma
}
console.log(calcular2(10,2,3,4))
console.log(calcular2(1,2))

