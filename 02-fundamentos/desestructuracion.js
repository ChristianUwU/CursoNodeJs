const Deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    edad: 50,
    getNombre() {
        return `${ this.nombre } ${ this.apellido } ${ this.poder }`
    }
}

   // console.log( Deadpool.getNombre() );

   function imprimirHeroe( heroe ) {
    const { nombre, apellido, poder, edad = 0 } = heroe;
    console.log(nombre, apellido, poder, edad );
   }

   imprimirHeroe( Deadpool );