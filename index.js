const express = require('express')
const app = express()
const port = 5400

app.get('/', (req, res) => {
  res.send('Hello World! to kaise to tum aaj fir mahnat karne ka man nhi kar raha hai ')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
