require('colors')
const Tarea = require('./Tarea')

class Tareas {
    _listado = {}

    get listadoArr(){
        const listado = []
        Object.keys(this._listado).forEach(key=>{
            const tarea = this._listado[key]
            listado.push(tarea)
        })

        return listado
    }

    constructor(){
        this._listado = {}
    }

    crearTarea(description = ''){
        const tarea = new Tarea(description);

        this._listado[tarea.id] = tarea
    }
    cargarTarea(tareas = []){
        tareas.forEach(tarea =>{
            this._listado[tarea.id] = tarea
        })
    }

    listarTareas(){
        console.log('\n')
        this.listadoArr.forEach((tarea,i)=>{
            const idx = `${i + 1}.`.green;
            const pending = 'Pendiente'.red;
            const complete = 'Completada'.green
            console.log(`${idx} ${tarea.description} :: ${tarea.complete==null ? pending : complete}`)
        })
    }

    borrarTarea(id){
        if(this._listado[id]){
            delete this._listado[id]
        }
    }

    listarPendientesCompletadas(boolean){
        console.log('\n');
        if(boolean){
            const completada = this.listadoArr.filter((tarea)=>tarea.complete !== null)

            completada.forEach((tarea,i)=>{
            const idx = `${i + 1}.`.green;
            const complete = 'Completada'.green
            console.log(`${idx} ${tarea.description} :: ${complete}`)
            })
        } else if(!boolean){
            const noCompletada = this.listadoArr.filter((tarea)=>tarea.complete === null)

            noCompletada.forEach((tarea,i)=>{
            const idx = `${i + 1}.`.green;
            const pending = 'Pendiente'.red;
            console.log(`${idx} ${tarea.description} :: ${pending}`)
            })
        }
    }

    marcarCompletado(ids){
        ids.forEach(id=>{
            const tarea = this._listado[id]
            if(tarea.complete === null){
                tarea.complete = new Date().toISOString()
            }
        })

        this.listadoArr.forEach(tarea =>{
            if(!ids.includes(tarea.id)){
                this._listado[tarea.id].complete = null
            }
        })
    }

}

module.exports = Tareas