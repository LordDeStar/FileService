const express = require('express')
const cors = require('cors')
const projectRoutes = require('./routes/projectRoutes')
const app = express()

app.use(express.json())
app.use(cors())
app.use(projectRoutes)

app.listen(8080, (err) => {
	if (err) console.error(err)
	else console.log('Server started on http://localhost:8080')
})
