const io = require('socket.io')()
const port = 8000;

io.on('connection', (client)=>{

})


io.listen(port)
console.log('listening on port ', port);