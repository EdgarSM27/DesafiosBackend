class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }

    getFullName() {
        console.log(`El nombre del usuario es: ${this.nombre} ${this.apellido}`)
    }
    addMascota(mascota) {
        this.mascotas.push(mascota);
    }

    CountMascotas() {
        console.log(`El numero de mascotas es: ${this.mascotas.length} `)
    }

    addBook(nombre, autor){
        this.libros.push({
            nombre: nombre,
            autor: autor
        })
    }
    getBookNames(){

        this.libros.forEach((libro)=> console.log(`El nombre del titulo es: ${libro.nombre}`));
        
    }
}

const usuario = new Usuario(
    "Edgar", "Sanchez", [{nombre:"el llano en llamas", autor:"Juan Rulfo"}, {nombre:"Analisis de fluidos",autor:"Claudio Mataix"}], ["PErro", "Gatp"]
)


usuario.getFullName();
usuario.CountMascotas();
usuario.addMascota("tucan");
usuario.CountMascotas();
usuario.addBook("Termodinamica","Cengel");
usuario.getBookNames();