const argv = require('yargs')
            .option('d', {
                alias: 'description', 
                type: 'number', 
                describe: 'Aplicación  de consola para la creación de tareas'
            })
            .argv

module.exports = argv;