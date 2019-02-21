const io = require('socket.io')();
const port = 8000;



io.on('connection', socket => {
    console.log('New client connected')
    
    socket.on('message', function (message){
        console.log("In here", message)
        io.emit("message", message)
    })
});

io.listen(port);
console.log('listening on port ', port);