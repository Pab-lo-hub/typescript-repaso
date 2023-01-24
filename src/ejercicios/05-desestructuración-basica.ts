/*
    ===== Código de TypeScript =====
*/

interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles {
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: "Walk",
    detalles: {
        autor: 'Foo',
        anio: 2015
    }
}

const {volumen, segundo, cancion, detalles } = reproductor;
const {autor} = detalles;

//console.log('Volumen', volumen);
//console.log('Segundo', segundo);
//console.log('La canción es', reproductor.cancion);
//console.log('El Autor es', autor);

const onePiece: string[] = ['Luffy', 'Franky', 'Zoro'];

const [ p1, , p3 ] = onePiece;

console.log(p1);
console.log(p3);