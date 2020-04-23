const express = require('express')
const dotenv = require('dotenv')
const swaggerUi = require('swagger-ui-express')
const YAML = require('yamljs')
const swaggerDocument = YAML.load('./swagger.yaml')

dotenv.config()
const app = express()

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.listen(process.env.PORT, ()=>{
    console.log(`Link: http://localhost:${process.env.PORT}/api-docs`)
})