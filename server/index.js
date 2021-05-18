const app = require('express')()
const http = require('http').createServer(app)
const io = require('socket.io')(http)
const port = 3000;

io.on('connection', socket => {
    socket.on('message', ({ name, grade, description }) => {
        io.emit('message', { name, grade, description })
    })
})


http.listen(port, () => {
    console.log(`Server is Listening on Port ${port}

        Local: http://localhost:${port}
    `)
})
