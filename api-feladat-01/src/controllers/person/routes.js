const express = require('express');
const dbjson = require('./server/database.json');

const controller = express.Router();

controller.get('/', (req, res) => {
    res.json(dbjson)
})

controller.get('/count', (req,res) => {
    const vaccinated = dbjson.filter(person => person.vaccine);
    res.json(vaccinated.length)
})

controller.get('/vaccinated', (req,res) => {
    const vaccinated = dbjson.filter(person => person.vaccine);
    res.json(vaccinated)
})

module.exports = controller;