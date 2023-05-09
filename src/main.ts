document.write('Chicaiza-Bladimir-DS-3A-Mat');
document.write('<br>');
document.write('Programación Visual');

interface IVehiculo {
    //"I" es opcional
    readonly modelo: string;
    readonly fabricante: string;
    encender(): void; // void NO retorna nada
    apagar(): void;
    acelerar(): void;
}

interface IVehiculoTerrestre extends IVehiculo {
    numeroLlantas: number;
    conducir(): void;
}

interface IVehiculoMaritimo extends IVehiculo {
    numeroAnclas: number;
    navegar(): void;
}

interface IVehiculoAereo extends IVehiculo {
    numeroTurbinas: number;
    volar(): void;
}

// TAREA CREAR UNA INTERFAZ DE VEHICULO AEREO y declar un clase similiar al ejemplo hecho en clase. 
// Declarar una clase de vehiculo maritimo y de vehiculo aereo

class Camioneta implements IVehiculoTerrestre {
    modelo: string = "4x2";
    fabricante: string = "CASA-VACA";
    numeroLlantas: number = 5;
    placa!: string;
    conducir(): void {
        console.log("El vehiculo está siendo conducido");
    }
    encender(): void {
        console.log("El vehiculo está siendo encendido");
    }
    detener(): void {
        console.log("El vehiculo está siendo detenido");
    }
    acelerar(): void {
        console.log("El vehiculo esta acelerando");
    }
    apagar(): void {
        console.log("El vehiculo esta apagado");
    }
}

function procesar(vehiculo: IVehiculoTerrestre) {
    vehiculo.encender();
    vehiculo.conducir();
}

class Camion implements IVehiculoTerrestre {
    modelo: string = "8x4";
    fabricante: string = "Scania";
    numeroLlantas: number = 8;
    placa!: string;
    conducir(): void {
        console.log("El camión está siendo conducido");
    }
    encender(): void {
        console.log("El camión está siendo encendido");
    }
    detener(): void {
        console.log("El camión está siendo detenido");
    }
    acelerar(): void {
        console.log("El camión esta acelerando");
    }
    apagar(): void {
        console.log("El camión esta apagado");
    }
}

class Barco implements IVehiculoMaritimo {
    modelo: string = "Buque de carga líquida";
    fabricante: string = "Sea Ray";
    numeroAnclas: number = 4;
    numeroTripulantes: number = 500;
    conducir(): void {
        console.log("El barco está siendo conducido");
    }
    encender(): void {
        console.log("El barco está siendo encendido");
    }
    detener(): void {
        console.log("El barco está siendo detenido");
    }
    acelerar(): void {
        console.log("El barco esta acelerando");
    }
    apagar(): void {
        console.log("El barco esta apagado");
    }
    navegar(): void {
        console.log("El barco esta siendo Navegado rumbo al Grand Line");
    }
}

class Yate implements IVehiculoMaritimo {
    modelo: string = "10x4 metros";
    fabricante: string = "Fincantieri";
    motor: string = "Intraborda";
    numeroAnclas: number = 2;
    numeroTripulantes: number = 25;
    conducir(): void {
        console.log("El yate está siendo conducido");
    }
    encender(): void {
        console.log("El yate está siendo encendido");
    }
    detener(): void {
        console.log("El yate está siendo detenido");
    }
    acelerar(): void {
        console.log("El yate esta acelerando");
    }
    apagar(): void {
        console.log("El yate esta apagado");
    }
    navegar(): void {
        console.log("El yate esta siendo Navegado rumbo a Skypea");
    }
}

class Avion implements IVehiculoAereo {
    modelo: string = "Boeing 747 – 400 ERF";
    fabricante: string = "Boeing";
    numeroTurbinas: number = 8;
    numeroPasajeros: number = 250;
    conducir(): void {
        console.log("El avion está siendo conducido");
    }
    encender(): void {
        console.log("El avion está siendo encendido");
    }
    detener(): void {
        console.log("El avion está siendo detenido");
    }
    acelerar(): void {
        console.log("El avion esta acelerando");
    }
    apagar(): void {
        console.log("El avion esta apagado");
    }
    volar(): void {
        console.log("El avion esta volando rumbo a Islandia");
    }
}

class Avioneta implements IVehiculoAereo {
    modelo: string = "Beechcraft Baron";
    fabricante: string = "Airbus";
    numeroTurbinas: number = 4;
    numeroPasajeros: number = 6;
    anoFabricacion: number = 2014;
    conducir(): void {
        console.log("La avioneta está siendo conducida");
    }
    encender(): void {
        console.log("La avioneta está siendo encendida");
    }
    detener(): void {
        console.log("La avioneta está siendo detenida");
    }
    acelerar(): void {
        console.log("La avioneta esta acelerando");
    }
    apagar(): void {
        console.log("La avioneta esta apagada");
    }
    volar(): void {
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