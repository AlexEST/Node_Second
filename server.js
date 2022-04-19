const express = require('express')
const projectRoutes = require('./routes/routes.project')
const app = express()

const PORT = process.env.PORT || 3000
app.use('/api', projectRoutes)
async function start() {
    try {
        app.listen(PORT)
    } catch (error) {
        console.log(error)
    }
}
start()
