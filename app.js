const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => res.sendFile(__dirname+'/index.html'))
app.get('/login', (req, res) => res.json({'name':'gagan','add':'blr'}))


app.listen(port, () => console.log(`Example app listening on port ${port}!`))