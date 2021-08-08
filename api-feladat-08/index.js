const express = require('express');
const swaggerUIexp = require('swagger-ui-express');
const YAML = require ('yamljs');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const app = express();
const port =3000;

const swaggerDocu = YAML.load('./docs/swagger.yaml');

app.use('/person', require('./src/controllers/person/routes'))
app.use(express.json());

app.use((err, req, res, next) => {
	res.status(err.statusCode);
	res.json({
		hasError: true,
		message: err.message
	});

    res.status(500).send('Server error')
});


app.use('/api-docs', swaggerUIexp.serve, swaggerUIexp.setup(swaggerDocu))

app.listen(port, () => {
    console.log(`App  listening at http://localhost:${port}`)
})

