const createError = require('http-errors');
const Person = require('../model/person.model');

const personService = require('./service');


exports.getCount = (req, res, next) => {
    Person.countDocuments({}, function (err, count) {
        res.json(count);
     });
    };


exports.getVaccinated = async (req, res, next) => {
        const vaccinatedPeople = await Person.find({ vaccine: { $exists: true, $nin: [""] } })
        if (!vaccinatedPeople) {
            return next(new createError.NotFound("Vaccinated people are not found!"));
        }
        res.json(vaccinatedPeople);
    };

exports.findAll = (req, res, next) => {
    return personService.findAll()
        .then( people => {
            res.json(people);
        });
}

exports.create = (req, res, next) => {
    const { name, efficiency } = req.body;
  
    if (!name || !efficiency) {
      return next(new createError.BadRequest("Missing properties!"));
    };
  
    const newVaccine = {
      name,
      efficiency
    };

exports.findOne = (req, res, next) => {
    return personService.findOne(req.params.id)
        .then( person => {
            if (!person){
                return next(new createError.NotFound("Person is not found!"));
            }
            res.json(person);
        })
};


exports.update = (req, res, next) => {
    const id = req.params.id;
    const {firstName, lastName, vaccine} = req.body;
    if (!lastName || !firstName || !vaccine) {
        return next(
            new createError.BadRequest("Missing properties!")
        );
    }

    const update = {
        firstName: firstName,
        lastName: lastName,
        vaccine: vaccine
    };

    return personService.update(req.params.id, update)
        .then( person => {
            res.json(person);
        })
        .catch( err => {
            return next( new createError.InternalServerError(err.message));
        });
};

exports.delete = (req, res, next) => {
    return personService.delete(req.params.id)
        .then( () => res.json({}) )
        .catch( err => {
            return next( new createError.InternalServerError(err.message));
        });
};


  return vaccineService
    .create(newVaccine)
    .then( createdVaccine => {
      res.status(201);
      res.json(createdVaccine);
    } )
    .catch(err => next(new createError.InternalServerError(err.message)));
};