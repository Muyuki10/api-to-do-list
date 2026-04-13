
const { takeCoverage } = require('v8')
const taskController = require('../controllers/taskControllers')


module.exports = (req, res) => {
    const url = req.url
    const method = req.method


    //get /taks
    if (url === '/task' && method === 'GET') {
        return taskController.listTask(req, res)
       
    }


    //post /task
    if (url === '/taks' && method === 'POST') {
        return taskController.createTask(req,res)
       
    }
   
    //PUT /task/: id
    if (url.startsWith('/task/') && method === 'PUT') {
        const id = url.split('/')[2];
        return taskController.updateTask(req,res,id)
       
    }
    // delete /task/:id
    if (url.startsWith('/task/') && method ==='DELETE') {
        const id = url.split('/')[2]
        return taskController.deleteTask(req,res,id)
       
    }


    //rota nao encontrada
    res.statusCode = 404;
    res.end(JSON.stringify({ message: 'Rota nao encontrada'}))
}
