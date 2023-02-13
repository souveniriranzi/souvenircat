const express = require('express')
const app = express()
const port = 8080

app.get('/multiply', (req, res) => {
  const numbers = req.query.numbers
  if (!numbers) {
    return res.send({ error: 'numbers is required' })
  }

  const arrayOfNumbers = numbers.split(',').map(num => parseInt(num))
  const product = arrayOfNumbers.reduce((acc, current) => acc * current, 1)

  res.send({ result: product })
})

app.listen(port, () => {
  console.log(`Calculator app listening at http://localhost:8080`)
})
