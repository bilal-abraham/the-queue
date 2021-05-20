const express = require('express')
const path = require('path')

const app = express()
const http = require('http').createServer(app)
const io = require('socket.io')(http)
const port = 3001;

app.use(express.static('static/build'))

let submissions = []

//emits back to client
io.on('connection', (socket) => {

    for (let submission of submissions) {
        socket.emit('submission:add', submission);
    }


    socket.on('submission:add', (message) => {
        submissions.push(message);
        io.emit('submission:add', message);
    });
});

//returns file of website
app.get('/', function (req, res) {

    res.sendFile(path.join(__dirname, 'static', 'build', 'index.html'))
})

//http handshake
http.listen(port, () => {
    console.log(`Server is Listening on Port ${port}\nLocal: http://localhost:${port}`)
})