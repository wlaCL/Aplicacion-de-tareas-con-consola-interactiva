require('colors');

const { inquireMenu, pausa, leerInput, listadoTareasBorrrar, confirmar,mostrarListadoChecklist } = require('./helpers/inquirer');
//
const { mostrarMenu, Pausa } = require('./helpers/mensajes');
const Tareas = require('./models/tareas');
const Tarea = require('./models/tarea');
const { guardarDb, leerDb } = require('./helpers/guardarArchivo');

const main = async() =>{    
    let opt = '';
    const tareas = new Tareas();
    const leerTareas = leerDb(); 
    //await pausa();   
    if (leerTareas){
        // aqui cargar tareas
        tareas.cargarTareasFromArray(leerTareas);
    }
    do{
       opt = await inquireMenu();    
       console.log(opt);   
       switch (opt) {
           case '1':
               const desc = await leerInput('Descripción : ');
               console.log(desc)
               tareas.crearTarea(desc);
           break;
           case '2':
               //console.log(tareas.listadoArr);
               tareas.listadoCompleto()
            break;

            case '3':
                tareas.listadoPendienteCompletado();               
            break;

            case '4':
                tareas.listadoPendienteCompletado(false);
               
            break;

            case '5': // completado | pendiente
               const ids = await mostrarListadoChecklist(tareas.listadoArr);
               tareas.toggleCompletados(ids)
            break;

            case '6':
                const id = await listadoTareasBorrrar(tareas.listadoArr); 
                if (id !== '0'){
                    const ok = await confirmar('¿Estás seguro?');
                    if (ok) {
                        tareas.borrarTarea(id);
                        console.log("Tarea borrada");
                    }
                }             
            break;
            case '7':
            break;
           
       } 
       
       guardarDb(tareas.listadoArr)
       await pausa();   
       
    }while(opt !== '0'); 
    
    //tareas._listado[tarea.id] = tarea;
    //console.log(tareas);
    
    

}
main();







/*
let opt
const main = async () => {
    do{
        console.log('probando app');
        opt = await mostrarMenu();    
        console.log(opt) 
        if (opt !=='0') await Pausa();

    }while(opt !== '0');
    
}
main();
*/