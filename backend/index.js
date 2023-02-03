const connectToMongo = require('./db')
const express = require('express')
var cors = require('cors')
connectToMongo();


const app = express()
const methodOverride = require('method-override')

const port = 5000
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(methodOverride('_method'))
// available routes

app.use(`/api/auth`, require('./Routes/auth'))
app.use(`/api/notes`, require('./Routes/notes'))

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})