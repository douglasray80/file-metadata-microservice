const express = require('express')
const cors = require('cors')
const multer = require('multer')

const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

const app = express()

app.use(cors())

app.use(express.static('public'))

app.get('/', (req, res) => res.sendFile(__dirname + 'index.html'))

app.post('/api/fileanalyse', (req, res) => {
	// I can submit a form that includes a file upload.
	// The form file input field has the "name" attribute set to "upfile". We rely on this in testing.
	// When I submit something, I will receive the file name and size in bytes within the JSON response
	res.json({ filename: '', size: '' })
})

app.listen(process.env.PORT || 4000, () => {
	console.log('Your app is listening on port 4000')
})
