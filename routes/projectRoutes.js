const { Router } = require('express')
const router = new Router()
const fs = require('fs/promises')
const path = require('path')

router.post('/create', async (req, res) => {
	const { title, userId } = req.body
	const dirPath = path.resolve(
		__dirname,
		'..',
		'projects',
		`User-${userId}`,
		title
	)

	try {
		await fs.access(dirPath)
		res.status(500).json({ message: 'Project already exists' })
	} catch (error) {
		if (error.code === 'ENOENT') {
			await fs.mkdir(dirPath, { recursive: true })
			res.json({ message: 'ok' })
		} else {
			console.error(error)
			res.json({ message: 'ne ok' })
		}
	}
})

module.exports = router
