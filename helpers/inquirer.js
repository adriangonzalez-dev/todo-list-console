const inquirer = require('inquirer');
require('colors');

const menuOptions = [
    {
        type: 'list',
        name: 'option',
        message: '¿Que desea hacer?',
        choices: [
            {
                value: '1',
                name: `${'1.'.green} Crear tarea`
            },
            {
                value: '2',
                name: `${'2.'.green} Listar tareas`
            },
            {
                value: '3',
                name: `${'3.'.green} Listar tareas completadas`
            },
            {
                value: '4',
                name: `${'4.'.green} Listar tareas pendientes`
            },
            {
                value: '5',
                name: `${'5.'.green} Completar tarea(s)`
            },
            {
                value: '6',
                name: `${'6.'.green} Borrar tarea`
            },
            {
                value: 0,
                name: `${'0.'.green} Salir`
            }
        ]
    }
]

const inquirerMenu = async () =>{
    //console.clear();
    console.log('==========================='.grey);
    console.log('Seleccione una opción'.bgWhite.black.italic);
    console.log('===========================\n'.grey);
    
    const {option} = await inquirer.prompt(menuOptions)
    return option
}

const pauseOption = [
    {
        type: 'input',
        name: 'exitEnter',
        message: `Presione ${'Enter'.green} para continuar`,
    }
]


const pause = async () =>{
    const {exitEnter} = await inquirer.prompt(pauseOption)
    return exitEnter
}

const readInput = async (message) =>{
    const questions = [
        {
            type:'input',
            name: 'desc',
            message,
            validate(value){
                if(value.length === 0){
                    return 'Ingrese un valor'
                }
                return true
            }
        }
    ];

    const {desc} = await inquirer.prompt(questions);
    return desc
}

const listadoTareasABorrar = async (tareas) =>{
    const choices = tareas.map((tarea,i)=>{

        const idx = `${i + 1}`.green
        return {
            value: tarea.id,
            name: `${idx} ${tarea.description}`
        }
    });

    choices.unshift({
        value: '0',
        name: '0.'.green + ' Cancelar'
    })

    const questions = [
        {
            type:'list',
            name:'id',
            message: 'Borrar',
            choices
        }
    ]

    const { id } = await inquirer.prompt(questions) 
    return id
}

const confirm = async (message) =>{

    const question = [
        {
            type: 'confirm',
            name:'ok',
            message
        }
    ];

    const { ok } = await inquirer.prompt(question) 
    return ok

}


module.exports = {
    inquirerMenu,
    pause,
    readInput,
    listadoTareasABorrar,
    confirm
}