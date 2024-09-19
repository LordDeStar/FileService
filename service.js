const express = require('express')
const config = require('config')
const mongo = require('mongoose')
const PORT = config.get('serverPort')
const app = express()

const start = async () => {
	try {
		await mongo.connect(config.get('dbUrl'))
		app.listen(PORT, () => {
			console.log(`Server starts on http://localhost:${PORT}`)
		})
	} catch (e) {
		console.log(e)
	}
}

start()
