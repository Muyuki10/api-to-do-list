const { createTask } = require('../models/taskModels');




let tasks = []
let idCounter = 1;




//criar
const addTAsk = (title) => {
    const newtask = createTask(idCounter++, title);
    tasks.push(newtask);
    return newtask;
};




//listar
const getTask = () => tasks;


const getTaskSpecify = (id) => tasks[id];




//atualizar
const updateTask = (id, title) =>{
    const index = tasks.findIndex(t => t.id == id);
    if (index === -1) return null;




    tasks[index].title = title;
    return tasks[index];
}
//deletar
const deleteTask =(id) => {
    const index = tasks.findIndex(t => t.id ==id);
    if(index === -1) return false
   
    tasks.splice(index, 1)
    return true
}


const completedTask = (id) => {
    const index = tasks.findIndex(t => t.id == id);
    if(index === -1) return null;


    tasks[index].completed = true;
    return tasks[index];


}




module.exports = {
    addTAsk,
    getTask,
    updateTask,
    deleteTask,
    completedTask,
    getTaskSpecify
}



