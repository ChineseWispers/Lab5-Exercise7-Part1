const express = require('express')
const app = express()
const calculatorRoutes = require('./routes/calculatorRoutes');
const swaggerUi = require('swagger-ui-express');
swaggerDocument = require('./swagger.json');
const port = 3000

app.use('/calculator', calculatorRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/', express.static('public'))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

// ANSWER at http://localhost:3000/calculator.html