const Person = require('../model/person.model');

exports.create = personData => {
    const person = new Person(personData);
    return person.sav();
};

exports.findAll = () => Person.find().populate('vaccine');

exports.findOne = id => Person.findById(id).populate('vaccine');

exports.update = (id, updateData) => Person.findByIdAndUpdate(id, updateData, {new: true});

exports.delete = (id) => Person.findByIdAndRemove(id);