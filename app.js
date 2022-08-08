require('colors');
const {inquirerMenu ,pause, readInput, listadoTareasABorrar, completarTarea, confirm} = require('./helpers/inquirer');
const { saveInDB,readDB } = require('./helpers/saveFile');
const Tareas = require('./models/Tareas');


console.clear();

const main = async () =>{

    let opt ='';

    const tareas = new Tareas();

    const tareasDB = readDB()

    if(tareasDB){
        tareas.cargarTarea( tareasDB )
    }



    do {
        opt = await inquirerMenu();

        switch(opt){
            case '1':
                const desc = await readInput('Descipción: ')
                tareas.crearTarea(desc)
                break;
            case '2':
                tareas.listarTareas()
                //console.log(tareas.listadoArr)
                break;
            case '3':
                tareas.listarPendientesCompletadas(true)
                break;
            case '4':
                tareas.listarPendientesCompletadas(false)
                break;

            case '5':
                const ids = await completarTarea(tareas.listadoArr);
                console.log(ids)
                break;
            case '6':
                const id = await listadoTareasABorrar(tareas.listadoArr)
                
                if(id !== '0'){
                const ok = await confirm('Está seguro?') 
                
                if(ok){
                    tareas.borrarTarea(id);
                    console.log('Tarea eliminada!')
                }
                }
                
                break;
        }

        saveInDB(tareas.listadoArr)
        await pause()
    } while (opt !== '0');
}

main();