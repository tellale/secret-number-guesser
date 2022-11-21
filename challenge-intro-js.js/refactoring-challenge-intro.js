import readline from 'readline';


function printTable(){
  console.log('table')
}


// Listado Inicial
const students = [{
    age: 32,
    examScores: [],
    gender: 'male',
    name: 'edu'
  },
  {
    age: 29,
    examScores: [],
    gender: 'female',
    name: 'silvia'
  }]
  
  // Utilidades de Apoyo
  const availableMaleNames = ['pepe', 'juan', 'victor', 'Leo', 'francisco', 'carlos'];
  const availableFemaleNames = ['cecilia', 'ana', 'luisa', 'silvia', 'isabel', 'virginia'];
  const availableGenders = ['male', 'female'];

  // Ejercicio:



// Una vez la ejecución termine, volveremos a mostrar el listado de requisitos para que el usuario pueda seleccionar otro. 
// pulse el 0 o un número no contemplado, la aplicación terminará.

// Requisitos para imprimir
const Requisitos = {
1: 'Mostrar en formato de tabla todos los alumnos.',
2: 'Mostrar por consola la cantidad de alumnos que hay en clase.',
3: 'Mostrar por consola todos los nombres de los alumnos.',
4: 'Eliminar el último alumno de la clase.',
5: 'Eliminar un alumno aleatoriamente de la clase.',
6: 'Mostrar por consola todos los datos de los alumnos que son chicas.',
7: 'Mostrar por consola el número de chicos y chicas que hay en la clase.',
8: 'Mostrar true o false por consola si todos los alumnos de la clase son chicas.',
9: 'Mostrar por consola los nombres de los alumnos que tengan entre 20 y 25 años.',
10: 'Añadir un alumno nuevo',
11: 'Mostrar por consola el nombre de la persona más joven de la clase.',
12: 'Mostrar por consola la edad media de todos los alumnos de la clase.',
13: 'Mostrar por consola la edad media de las chicas de la clase.',
14: 'Añadir nueva nota a los alumnos. Por cada alumno de la clase, tendremos que calcular una nota de forma aleatoria(número entre 0 y 10)',
15: 'Ordenar el array de alumnos alfabéticamente según su nombre.'
}

// aparecerá el listado completo de requisitos.
for (const key of Object.keys(Requisitos)) {
    console.log(key + " : " + Requisitos[key])
}

const actionRequirements = {
  '1': printTable,
  //2: totalStudentsNumber(),
  //'3': allStudentsName,
  //'4': deleteLastStudent,
}

// El usuario debe pulsar el número correspondiente a ese requisito para que se ejecute. 
// configuramos la utilidad de node para que los datos se pidan y se muestren por consola.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  function selectAction() {
    const promise = new Promise((resolve, reject) => {
      // nos permite hacer una pregunta por consola al usuario. Ojo que es un proceso asíncrono.
      rl.question('Introduce el número: ', (num) => {
        rl.pause();
        resolve(num)
        // si el usuario mete un número, resolvemos la promesa con ese número.
        // si el usuario mete una letra, debemos rechazar/rejectear la promesa.
      })
    })
    return promise
  }
// consumidor
async function fecthSelectedAction(){
  try{
    let action = await selectAction()
    console.log(action)
for (let key of Object.keys(actionRequirements)) {
  console.log(key)
  if ((action) == key){
    actionRequirements[key]()
  } else {
    console.log('error')
  }
    
}
  }
  // review this to add the finish process action.
  catch(error){
    console.log(error)
  }
}


// Ejecucion



// Requisitos para Ejecutar


// Loops the dict and calls fuctions.
// let action = await fecthSelectedAction()
// for (let key of Object.entries(actionRequirements)) {
//   if ((action) == key){
//     actionRequirements.key()
//   } else {
//     console.log('error')
//   }
    
// }
    
fecthSelectedAction()



// Requisitos
//   1- Mostrar en formato de tabla todos los alumnos.
//   2- Mostrar por consola la cantidad de alumnos que hay en clase.
//   3- Mostrar por consola todos los nombres de los alumnos.
//   4- Eliminar el último alumno de la clase.
//   5- Eliminar un alumno aleatoriamente de la clase.
//   6- Mostrar por consola todos los datos de los alumnos que son chicas.
//   7- Mostrar por consola el número de chicos y chicas que hay en la clase.
//   8- Mostrar true o false por consola si todos los alumnos de la clase son chicas.
//   9- Mostrar por consola los nombres de los alumnos que tengan entre 20 y 25 años.
//   10- Añadir un alumno nuevo con los siguientes datos:
//   nombre aleatorio.
//   edad aleatoria entre 20 y 50 años.
//   género aleatorio.
//   listado de calificaciones vacío.
//   ¡OJO!, el nombre y el género tienen que ir acordes.
//   11- Mostrar por consola el nombre de la persona más joven de la clase.
//   ¡OJO!, si varias personas de la clase comparten la edad más baja, cualquiera de ellos es una respuesta válida.
//   12- Mostrar por consola la edad media de todos los alumnos de la clase.
//   13- Mostrar por consola la edad media de las chicas de la clase.
//   14- Añadir nueva nota a los alumnos. Por cada alumno de la clase, tendremos que calcular una nota de forma aleatoria(número entre 0 y 10) y añadirla a su listado de notas.
//   15- Ordenar el array de alumnos alfabéticamente según su nombre.
  