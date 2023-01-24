/*
    ===== Código de TypeScript =====
*/

let habilidades = ['Bash', 'Counter', 'Healing '];

interface Personaje {
    nombre: string;
    hp: number;
    habilidades: string[]
    pueboNatal?: string;
}

const personaje = {
    nombre: 'Trancos',
    hp: 100,
    habilidades: ['Bash', 'Counter', 'Healing ']
}