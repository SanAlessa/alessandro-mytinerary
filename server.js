const express = require('express')
const cors = require('cors')

const app = express()


// MIDDLEWARES
app.use(cors)

app.listen(4000)