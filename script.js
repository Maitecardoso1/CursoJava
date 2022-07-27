alert("Buenos días, mi nombre es Maite y te ayudaré a elegir el mejor producto. ¿Cómo es tu nombre? ");

let nombre = prompt("Por favor, ingresá tu nombre: ");

function saludar(){
    alert("Bienvenido/a " + nombre + " a EstePan!");
}

saludar();

alert("Ahora, necesito que me digas un número del 1 al 50, y te ganarás un beneficio: ");

let numero = parseInt(prompt("Ingresa un número del 1 al 50"));

alert("Excelente, recibiste un descuento de:  " + numero + "  %.");
