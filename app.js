const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = porHacer.getListado();
        if (listado === undefined || listado.length === 0)  {
            return console.log('No hay tareas por hacer'.red);
        }
        for (let tarea of listado) {
            console.log('=========Por Hacer========'.red);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('=========================='.red);
        }
        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;
    case 'borrar':
        porHacer.borrar(argv.descripcion);
        break;
    default:
        console.log('Comando no es reconocido'.red);
}