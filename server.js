const express = require('express')
const cors = require('cors')
const multer = require('multer')

const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

const app = express()

app.use(cors())

app.use(express.static('public'))

app.get('/', (req, res) => res.sendFile(__dirname + 'index.html'))

app.post('/api/fileanalyse', upload.single('upfile'), (req, res) => {
	const { originalname, mimetype, size } = req.file
	res.json({ filename: originalname, type: mimetype, size: `${size} bytes` })
})

app.listen(process.env.PORT || 4000, () => {
	console.log('Your app is listening on port 4000')
})
