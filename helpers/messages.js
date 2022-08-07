require('colors')



const listMenu =()=>{
    console.clear();
    console.log('==========================='.grey);
    console.log(   'Seleccione una opción'.bgWhite.black.italic);
    console.log('===========================\n'.grey);
    
    console.log(`${'1.'.green} Crear tarea`);
    console.log(`${'2.'.green} Listar tareas`);
    console.log(`${'3.'.green} Listar tareas completadas`);
    console.log(`${'4.'.green} Listar tareas pendientes`);
    console.log(`${'5.'.green} Completar tarea(s)`);
    console.log(`${'6.'.green} Borrar tarea`);
    console.log(`${'0.'.green} Salir\n`)
    
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    })
    
    readline.question('Seleccione una opción: \n',(opt)=>{
        readline.close();
    })
}

const pause = () =>{
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    })

    readline.question(`Presione ${'Enter'.green} para continuar`,(opt)=>{
        readline.close();
    })
}

module.exports = {
    listMenu,
    pause
}