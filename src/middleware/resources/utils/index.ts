// Entry point
let express = require('express')

let app = express()

app.use(express.static('public'))

const PORT = process.env.port || 3000
app.list(PORT, () => console.info(`Server has started on ${PORT}`))