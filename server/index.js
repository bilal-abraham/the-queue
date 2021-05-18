const app = require('express')()
const http = require('http').createServer(app)
const io = require('socket.io')(http)
const port = 3000;

io.on('connection', socket => {
    console.log("made socket connection")
    socket.on('message', (message) => {
        console.log(message)
        io.emit('message', `${message}`)
    })

})


http.listen(port, () => {
    console.log(`Server is Listening on Port ${port}

        Local: http://localhost:${port}
`)
})
