/*
    ===== Código de TypeScript =====
*/

function sumar (a: number, b:number) {
    return a + b;
}

const sumarFlecha = (a:number, b:number):number => {
    return a + b;
}

function multiplicar( numero: number, otroNumero?: number, base:number = 2): number {
    return numero * base;
}

interface PersonaLotR {
    nombre: string
    pv: number;    
}

function curar( personaje: PersonaLotR, curarX:number): void {
    personaje.pv += curarX;

    console.log(personaje);
}

const nuevoPersonaje: PersonaLotR = {
    nombre: 'Frodo',
    pv: 50,
}

curar( nuevoPersonaje, 20)