"use strict";
document.write('Chicaiza-Bladimir-DS-3A-Mat');
document.write('<br>');
document.write('Programación Visual');
// TAREA CREAR UNA INTERFAZ DE VEHICULO AEREO y declar un clase similiar al ejemplo hecho en clase. 
// Declarar una clase de vehiculo maritimo y de vehiculo aereo
class Camioneta {
    constructor() {
        this.modelo = "4x2";
        this.fabricante = "CASA-VACA";
        this.numeroLlantas = 5;
    }
    conducir() {
        console.log("El vehiculo está siendo conducido");
    }
    encender() {
        console.log("El vehiculo está siendo encendido");
    }
    detener() {
        console.log("El vehiculo está siendo detenido");
    }
    acelerar() {
        console.log("El vehiculo esta acelerando");
    }
    apagar() {
        console.log("El vehiculo esta apagado");
    }
}
function procesar(vehiculo) {
    vehiculo.encender();
    vehiculo.conducir();
}
class Camion {
    constructor() {
        this.modelo = "8x4";
        this.fabricante = "Scania";
        this.numeroLlantas = 8;
    }
    conducir() {
        console.log("El camión está siendo conducido");
    }
    encender() {
        console.log("El camión está siendo encendido");
    }
    detener() {
        console.log("El camión está siendo detenido");
    }
    acelerar() {
        console.log("El camión esta acelerando");
    }
    apagar() {
        console.log("El camión esta apagado");
    }
}
class Barco {
    constructor() {
        this.modelo = "Buque de carga líquida";
        this.fabricante = "Sea Ray";
        this.numeroAnclas = 4;
        this.numeroTripulantes = 500;
    }
    conducir() {
        console.log("El barco está siendo conducido");
    }
    encender() {
        console.log("El barco está siendo encendido");
    }
    detener() {
        console.log("El barco está siendo detenido");
    }
    acelerar() {
        console.log("El barco esta acelerando");
    }
    apagar() {
        console.log("El barco esta apagado");
    }
    navegar() {
        console.log("El barco esta siendo Navegado rumbo al Grand Line");
    }
}
class Yate {
    constructor() {
        this.modelo = "10x4 metros";
        this.fabricante = "Fincantieri";
        this.motor = "Intraborda";
        this.numeroAnclas = 2;
        this.numeroTripulantes = 25;
    }
    conducir() {
        console.log("El yate está siendo conducido");
    }
    encender() {
        console.log("El yate está siendo encendido");
    }
    detener() {
        console.log("El yate está siendo detenido");
    }
    acelerar() {
        console.log("El yate esta acelerando");
    }
    apagar() {
        console.log("El yate esta apagado");
    }
    navegar() {
        console.log("El yate esta siendo Navegado rumbo a Skypea");
    }
}
class Avion {
    constructor() {
        this.modelo = "Boeing 747 – 400 ERF";
        this.fabricante = "Boeing";
        this.numeroTurbinas = 8;
        this.numeroPasajeros = 250;
    }
    conducir() {
        console.log("El avion está siendo conducido");
    }
    encender() {
        console.log("El avion está siendo encendido");
    }
    detener() {
        console.log("El avion está siendo detenido");
    }
    acelerar() {
        console.log("El avion esta acelerando");
    }
    apagar() {
        console.log("El avion esta apagado");
    }
    volar() {
        console.log("El avion esta volando rumbo a Islandia");
    }
}
class Avioneta {
    constructor() {
        this.modelo = "Beechcraft Baron";
        this.fabricante = "Airbus";
        this.numeroTurbinas = 4;
        this.numeroPasajeros = 6;
        this.anoFabricacion = 2014;
    }
    conducir() {
        console.log("La avioneta está siendo conducida");
    }
    encender() {
        console.log("La avioneta está siendo encendida");
    }
    detener() {
        console.log("La avioneta está siendo detenida");
    }
    acelerar() {
        console.log("La avioneta esta acelerando");
    }
    apagar() {
        console.log("La avioneta esta apagada");
    }
    volar() {
        console.log("La avioneta esta volando rumbo a Qatar");
    }
}
// //INSTANCIAR OBJETOS
// let vehiculo1 = new Camioneta();
// // IMPRIMIR LO QUE DICE EN LOS MENSAJES
// console.log('Clase camioneta');
// console.log("El numero de llantas es: " + vehiculo1.numeroLlantas);
// console.log("El fabricante es: " + vehiculo1.fabricante);
// console.log(vehiculo1.conducir());
// console.log(vehiculo1.encender());
// console.log(vehiculo1.acelerar());
// console.log(vehiculo1.apagar());
// let vehiculo2 = new Camion();
// console.log('Clase camión');
// console.log("El numero de llantas es: " + vehiculo2.numeroLlantas);
// console.log("El fabricante es: " + vehiculo2.fabricante);
// console.log("El modelo es: " + vehiculo2.modelo);
// console.log(vehiculo2.conducir());
// console.log(vehiculo2.encender());
// console.log(vehiculo2.acelerar());
// console.log(vehiculo2.apagar());
//INSTANCIAR OBJETO BARCO
// let barco1 = new Barco();
// console.log('Clase barco');
// console.log("Fabricante: ", barco1.fabricante);
// console.log("Modelo: ", barco1.modelo);
// console.log("Número de anclas: ", barco1.numeroAnclas);
// console.log("Número de tripulantes: ", barco1.numeroTripulantes);
// console.log(barco1.encender());
// console.log(barco1.navegar());
// console.log(barco1.apagar());
//INSTANCIAR OBJETO YATE
// let yate = new Yate();
// console.log('Clase Yate');
// console.log("Fabricante: ", yate.fabricante);
// console.log("Modelo: ", yate.modelo);
// console.log("Número de anclas: ", yate.numeroAnclas);
// console.log("Número de tripulantes: ", yate.numeroTripulantes);
// console.log(yate.encender());
// console.log(yate.navegar());
// console.log(yate.apagar());
// INSTANCIAR OBJETO AVION
// let avion = new Avion();
// console.log('Clase Avión');
// console.log("Fabricante: ", avion.fabricante);
// console.log("Modelo: ", avion.modelo);
// console.log("Número de turbinas: ", avion.numeroTurbinas);
// console.log("Número de pasajeros: ", avion.numeroPasajeros);
// console.log(avion.encender());
// console.log(avion.volar());
// console.log(avion.apagar());
// INSTANCIAR OBJETO AVIONETA
let avioneta = new Avioneta();
console.log('Clase Avioneta');
console.log("Fabricante: ", avioneta.fabricante);
console.log("Modelo: ", avioneta.modelo);
console.log("Número de turbinas: ", avioneta.numeroTurbinas);
console.log("Número de pasajeros: ", avioneta.numeroPasajeros);
console.log("Año de fabricación: ", avioneta.anoFabricacion);
console.log(avioneta.encender());
console.log(avioneta.volar());
console.log(avioneta.apagar());
