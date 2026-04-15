const { resolve } = require('dns');
const taskService = require('../services/taskServices');
const { rejects } = require('assert');
const { json } = require('stream/consumers');




//funcao auxiliar para ler body
const getRequestBody = (req) => {
    return new Promise((resolve, reject) => {
        let body = '';
       
        req.on('data', chunk => {
            body += chunk.toString();
        })




        req.on('end', () => {
            resolve(JSON.parse(body))
        })
    })
}




//crira tarefa
const createTask = async (req, res) => {
    const body = await getRequestBody(req);




    const task = taskService.addTAsk(body.title);




    res.statusCode = 201;
    res.end(JSON.stringify(task));
}
//listar tarefa especifica
const listTaksSpecify =(req, res) => {
    const task = taskService.getTaskSpecify();


    res.statusCode = 200;
    res.end(JSON.stringify(task))
}


//listar tarefas
const listTask = (req, res) => {
    const task = taskService.getTask();




    res.statusCode = 200;
    res.end(JSON.stringify(task));
};




//atualizar tarefas
const updateTask = async (req, res, id) => {
    const body = await getRequestBody(req);
    const task = taskService.updateTask(id , body.title);




    if(!task){
        res.statusCode = 404;
        return res.end(JSON.stringify(
            { message: 'Não encontrada'}
        ))
    }




    res.end(JSON.stringify(task))








}


// complete task
const completedTask = async (req, res, id) => {
    const task = taskService.completedTask(id);


    if (!task) {
        res.statusCode = 404;
        return res.end(JSON.stringify(
            { message: 'nao encontrada'}
        ))
       
    }


    res.end(JSON.stringify(task))
}
//deletar tarefa
const deleteTask = (req, res, id) => {
    const success = taskService.deleteTask(id);




    if(!success){
        res.statusCode = 404;
        return res.end(JSON.stringify(
            { message: 'Não encontrada'}
        ))
    }




    res.end(JSON.stringify({ message: 'Removida'}))
}








module.exports = {
    createTask,
    listTask,
    updateTask,
    deleteTask,
    completedTask,
    listTaksSpecify
}



