
interface Alumno{
    matricula:number;
    nombre:string;
    email:string
}

const alumno:Alumno={
    nombre:'Yair',
    matricula:20001475,
    email:'yair0227@gmail.com'
}

let mascotas=['perro','gato','perico']
mascotas[1]='shhh'
mascotas.push('sssss')

let tem:(number|string)[]=[]
tem.push('nombre')
tem.push(224)

console.table(alumno)
console.log(mascotas)

