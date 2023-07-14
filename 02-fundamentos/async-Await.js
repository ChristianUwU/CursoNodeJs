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

const getInfoUsuario = async( id ) => {
    try{
        const empleado = await getEmpleado( id );
        const salario = await getSalario( id );

        return `El salario del empleado: ${ empleado } es de: ${ salario }`;
    } catch (error) {
        throw error;   
    }
}

const id = 3;

getInfoUsuario( id )
    .then( msg => {
        console.log('TODO BIEN')
        console.log(msg)
    })
    .catch( err =>{
        console.log('TODO MAL')
        console.log(err)
    });