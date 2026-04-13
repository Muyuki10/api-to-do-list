const { createTask } = require('../models/taskModels');


let tasks = []
let idCounter = 1;


//criar
const addTAsk = (title) => {
    const task = createTask(idCounter++, title);
    task.push(task);
    return task;
};


//listar
const getTask = () => task;


//atualizar
const updateTask = (id, title) =>{
    const task = task.findIndex(t => t.id == id);
    if (!task) return null;


    task.title = title;
    return task;
}
//deletar
const deleteTask =(id) => {
    const index = task.findIndex(t => t.id ==id);
    if(index === -1) return false
   
    task.splice(index, 1)
    return true
}


module.exports = {
    addTAsk,
    getTask,
    updateTask,
    deleteTask
}
