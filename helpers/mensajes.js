require('colors');

const mostrarMenu = () =>{
    return new Promise((resolve) =>{
        console.clear();
        console.log('==============='.green);
        console.log('Seleccone una opción'.green); 
        console.log('==============\n'.green);
    
        console.log(`${'1.'.green} Crear tarea`);
        console.log(`${'2.'.green} Listar tareas`);
        console.log(`${'3.'.green} Listar tareas compleatas`);
        console.log(`${'4.'.green} Listar tareas pendientes`);
        console.log(`${'5.'.green} Completar tareas(s)`);
        console.log(`${'6.'.green} Borar tarea`);
        console.log(`${'0.'.green} Salir \n`);
    
        const readline = require('readline').createInterface({
            input : process.stdin, 
            output: process.stdout
        });
    
        readline.question('seleccione una opcion: ', (opt) =>{
            readline.close()
            resolve(opt)
        });
    }); 
}

const Pausa = () => {
    return new Promise((resolve)=>{
        const readline = require('readline').createInterface({
            input : process.stdin, 
            output: process.stdout
        });
    
        readline.question(`Presione ${'ENTER'.blue} para continuar  `, () =>{       
            readline.close()
            resolve();
        });        
    });    
}

module.exports = {
    mostrarMenu, 
    Pausa
}