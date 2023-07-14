const empleados = [
    {
        id: 1,
        nombre: 'Oscar'
    },
    {
        id: 2,
        nombre: 'Mauricio'
    },
    {
        id: 3,
        nombre: 'Luis'
    }
];

const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1500
    }
];

const getEmpleado = ( id ) => {
    const promesa = new Promise(( resolve, reject ) => {
        const empleado = empleados.find( e => e.id === id )?.nombre;
        if ( empleado ) {
            resolve( empleado );
        }else{
            reject(`No existe empelado con id ${ id }`);
        }
    });
    return promesa;
}

const getSalario = ( id ) => {
    const promesa = new Promise(( resolve, reject ) => {
        const salario = salarios.find( s => s.id === id)?.salario;
        if ( salario ){
            resolve( salario );
        }else{
            reject( `No existe salario con id ${ id }`);
        }
    });
    return promesa;
}

const id = 3;

/*
getEmpleado( id )
    .then( empleado => console.log( empleado ))
    .catch( err => console.log(err));

getSalario( id )
    .then( salario => console.log( salario ))
    .catch( err => console.log(err));
*/
getEmpleado( id )
    .then( empleado => {
        getSalario( id )
            .then( salario =>{
                console.log('El empleado:', empleado, 'tiene un salario de:', salario);
            })
            .catch( err => console.log(err));
    })
    .catch(err => console.log(err));