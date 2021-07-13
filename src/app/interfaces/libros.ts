export interface Libros {
    id:number;
    nombre:string;
    imagen: string;
    autor: string;
    paginas: number;
}

export const listaLibros:Array<Libros>=
[
    {
        id:1,
        nombre: "Mi planta naranja-lima",
        imagen:"../../assets/interfaz/Libro 1.jpg",
        autor:"José Mauro",
        paginas:178,
    },
    {
        id:2,
        nombre: "Harry Potter y la piedra filosofal",
        imagen:"../../assets/interfaz/Libro 2.jpg",
        autor:"J.K. Rowling",
        paginas:315,
    },
    {
        id:3,
        nombre: "Harry Potter y la camara secreta",
        imagen:"../../assets/interfaz/Libro 3.jpg",
        autor:"J.K. Rowling",
        paginas:316,
    },
    {
        id:4,
        nombre: "Harry Potter y el prisionero de Azkaban",
        imagen:"../../assets/interfaz/Libro 4.jpg",
        autor:"J.K. Rowling",
        paginas:317,
    },
    {
        id:5,
        nombre: "Harry Potter y el caliz de fuego",
        imagen:"../../assets/interfaz/Libro 5.jpg",
        autor:"J.K. Rowling",
        paginas:318,
    },
    {
        id:6,
        nombre: "Harry Potter y la orden del Fénix",
        imagen:"../../assets/interfaz/Libro 6.jpg",
        autor:"J.K. Rowling",
        paginas:319,
    },
    {
        id:7,
        nombre: "Harry Potter y el misterio del príncipe mestizo",
        imagen:"../../assets/interfaz/Libro 7.jpg",
        autor:"J.K. Rowling",
        paginas:320,
    },
    {
        id:8,
        nombre: "Harry Potter y las reliquias de la Muerte",
        imagen:"../../assets/interfaz/Libro 8.jpg",
        autor:"J.K. Rowling",
        paginas:321,
    },
    {
        id:9,
        nombre: "Harry Potter and the cursed child",
        imagen:"../../assets/interfaz/Libro 9.jpg",
        autor:"J.K. Rowling",
        paginas:322,
    },
    {
        id:10,
        nombre: "El hombre en busca de sentido",
        imagen:"../../assets/interfaz/Libro 10.jpg",
        autor:"Victor Frankl",
        paginas:168,
    },
    {
        id:11,
        nombre: "El túnel",
        imagen:"../../assets/interfaz/Libro 11.jpg",
        autor:"Ernesto Sabato",
        paginas:155,
    },
    {
        id:12,
        nombre: "Cuentos de buenas noches para niñas rebeldes",
        imagen:"../../assets/interfaz/Libro 12.jpg",
        autor:"Francesca Cavallo, Elena Favilli",
        paginas:244,
    }

]