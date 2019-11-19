const express = require('express')
const app = express()

const routes = require('./routes')

app.use(express.json())
routes.setup(app);

module.exports = app