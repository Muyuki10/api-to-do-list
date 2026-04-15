const http = require('http');




//importar notas
const taskRoutes = require('./routes/taskRoutes');




//criar servidor
const server = http.createServer((req,res) =>{




    //define cabechalo json
    res.setHeader('Content-Type', 'application/json');




    //chama o roteador
    taskRoutes(req, res);




})
 


//porta
const PORT = 3000;




//inicia servidor
server.listen(PORT, () => {
    console.log(`servidor rodando em http://localhost:${PORT}`)
})



