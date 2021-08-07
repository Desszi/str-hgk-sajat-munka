const express = require('express');
const swaggerUIexp = require('swagger-ui-express');
const YAML = require ('yamljs');

const app = express();
const port =3000;

const swaggerDocu = YAML.load('./docs/swagger.yaml');

app.use('/person', require('./src/controllers/person/routes'))
app.use('/api-docs', swaggerUIexp.serve, swaggerUIexp.setup(swaggerDocu))

app.listen(port, () => {
    console.log(`App  listening at http://localhost:${port}`)
})

