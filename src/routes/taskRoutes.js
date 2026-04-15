

const { takeCoverage } = require('v8')
const taskController = require('../controllers/taskConrtollers')




module.exports = (req, res) => {
    const url = req.url
    const method = req.method


     //get /taks by id
    if (url.startsWith('/tasks') &&  method === 'GET') {
        const id = url.split('/')[2];
        return taskController.listTask(req, res, id)
       
    }


    //get /taks
    if (url === '/tasks' && method === 'GET') {
        return taskController.listTask(req, res)
       
    }




    //post /task
    if (url === '/tasks' && method === 'POST') {
        return taskController.createTask(req,res)
       
    }
     //PUT/ taks/id/complete
    if (url.startsWith('/tasks/') && url.endsWith('/completed') && method === 'PUT') {
        const id = url.split('/')[2];
        return taskController.completedTask(req,res,id)
       
    }


    //PUT /task/: id
    if (url.startsWith('/tasks/') && method === 'PUT') {
        const id = url.split('/')[2];
        return taskController.updateTask(req,res,id)
       
    }


 
    // delete /task/:id
    if (url.startsWith('/tasks/') && method ==='DELETE') {
        const id = url.split('/')[2]
        return taskController.deleteTask(req,res,id)
       
    }




    //rota nao encontrada
    res.statusCode = 404;
    res.end(JSON.stringify({ message: 'Rota nao encontrada'}))
}



