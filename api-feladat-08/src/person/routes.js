const { json } = require('express');
const express = require('express');
const dbjson = require('./server/database.json');

const controller = express.Router();

controller.get('/', (req, res) => {
    res.json(dbjson)
})

controller.get('/count', (req,res) => {
    const vaccinated = dbjson.filter(entity => entity.vaccine);
    res.json(vaccinated.length)
})

controller.get('/vaccinated', (req,res) => {
    const vaccinated = dbjson.filter(entity => entity.vaccine);
    res.json(vaccinated)
})

controller.get('/:id', (req, res) => {
    const { id } = req.params; 
    const entity = data.find(p => p.id === parseInt(id));
    if(!entity) {
        res.sendStatus(404)
    }
    res.json(entity.vaccine);
})

controller.get('/:id/vaccinated', (req, res) => {
    const { id } = req.params; 
    const entity = data.find(p => p.id === parseInt(id));
    res.json(entity);
})

controller.post('/', (req,res) => {
    const newEntity = req.body;
    newEntity.id = dbjson[dbjson.length-1].id+1;
    dbjson.push(newEntity);
    res.status(201);
    res.json(newEntity);

})

controller.delete('/:vaccine', (req, res, next) => {  
    const { actually } = req.params;
    const notVaccinated = dbjson.filter(p => p.vaccine !== actually.vaccine);
    if (!notVaccinated) {
        return next(new createError.NotFound("People are not found"));
    }
    res.json(notVaccinated);
});

module.exports = controller;