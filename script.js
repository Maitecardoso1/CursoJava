function calculadora(primerNumero, segundoNumero, operacion) {
    switch (operacion) {
        case "+":
            return primerNumero + segundoNumero;
            break;
        case "-":
            return primerNumero - segundoNumero;
            break;
        case "*":
            return primerNumero * segundoNumero;
            break;
        case "/":
            return primerNumero / segundoNumero;
            break;
        default:
            return 0;
            break;
    }
}
console.log(calculadora(10, 5, "*"));

class Persona {
    constructor(usuario, correo, password){
        this.usuario = usuario;
        this.correo = correo;
        this.password = password;
    }
     
}

// const persona1 = new Persona("Juan", "juan@gmail.com", 1234);

// console.log(persona1)
// alert(persona1.usuario + " " + persona1.password  + " " + persona1.correo)

const persona2 = new Persona(prompt("ingrese su nombre de ususario"), prompt("ingrese su email"), prompt("ingrese su password"));
console.log(persona2)
alert(persona2.usuario + " " + persona2.password  + " " + persona2.correo)

