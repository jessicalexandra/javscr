// Creamos una base de datos ficticia
let database = [
    { id: 1, name: 'Juan', age: 25 },
    { id: 2, name: 'María', age: 30 },
    { id: 3, name: 'Pedro', age: 35 },
   
];


// Función para crear un nuevo registro
function createRecord(name, age) {
    let id = database.length + 1;
    database.push({ id, name, age });
}

// Función para obtener un registro por su id
function readRecord(id) {
    return database.find(record => record.id === id);
}

// Función para actualizar un registro existente
function updateRecord(id, name, age) {
    let recordIndex = database.findIndex(record => record.id === id);
    if (recordIndex !== -1) {
        database[recordIndex].name = name;
        database[recordIndex].age = age;
    }
}

// Función para eliminar un registro existente
function deleteRecord(id) {
    database = database.filter(record => record.id !== id);
}
