const Tarea = require("./tarea");

class Tareas{
    _listado = {}
    constructor(){
        // se definen las propiedades siempre aqui, solo se lo define arriba para comprender de forma conceptrual
        this._listado = {};
    }

    get listadoArr(){
        const listado = [];
        Object.keys(this._listado).forEach(key => {
            const tarea = this._listado[key];
            listado.push(tarea);
        })
        return listado;
    }

    crearTarea(des = ''){
        const tarea = new Tarea(des); 
        this._listado[tarea.id] = tarea;        
    }

    cargarTareasFromArray(tareas = []){
       tareas.forEach((value)=>{
           this._listado[value.id] = value;
       })

    }

    listadoCompleto() {
        this.listadoArr.forEach((tarea, i) => {
            const idx = `${i + 1}`.green;
            const {desc, completadoEn} = tarea;
            const estado = (completadoEn)
                                ? 'completado'.green
                                : 'pendiente'.red;
            console.log(`${idx} ${desc}:: ${estado}`);
        });       
    }

    listadoPendienteCompletado(completado = true){
        let contador = 0;
        this.listadoArr.forEach((tarea) => {
            const {desc, completadoEn} = tarea;
            const estado = (completadoEn)
                                ? 'completado'.green
                                : 'pendiente'.red;

            if(completado){
                if (completadoEn){
                    contador += 1;
                    console.log(`${contador.toString().green}. ${desc}:: ${estado} ${completadoEn.green}`);
                }
                
            }else{
                if(!completadoEn){
                    contador += 1;
                    console.log(`${contador.toString().green}. ${desc}:: ${estado} ${completadoEn}`);
                }                
            }           
        });  
    }

    borrarTarea(id = ''){
        if(this._listado[id]){
            delete this._listado[id];
        }
    }

    toggleCompletados(ids = []){
        ids.forEach(id => {
            const tarea = this._listado[id];
            if(!tarea.completadoEn){
                tarea.completadoEn = new Date().toString()
            }
        });

        this.listadoArr.forEach(tarea => {
            if(!ids.includes(tarea.id)){
                this._listado[tarea.id].completadoEn = null;
            }
        });
    }
}

module.exports = Tareas;