const io = require('socket.io')();
const port = 8000;


io.on('connection', socket => {
    console.log('New client connected')
    
    socket.on('connect', function (){
        
    })
});

io.listen(port);
console.log('listening on port ', port);