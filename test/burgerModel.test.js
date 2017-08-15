require('dotenv').config()
let mysql = require('mysql2');
let db = require('../config/connection')
let burgers = require('../models/burgers');

let sinon = require('sinon');
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();

chai.use(chaiHttp);

let selectAllResults = [{
    id: 1,
    burger_name: 'BBQ',
    devoured: 0,
    date: '2017-08-15T16:27:02.000Z'
},
{
    id: 2,
    burger_name: 'Cheeseburger',
    devoured: 0,
    date: '2017-08-15T16:27:02.000Z'
},
{
    id: 3,
    burger_name: 'Plain',
    devoured: 0,
    date: '2017-08-15T16:27:02.000Z'
}]

let insertResults = {
    fieldCount: 0,
    affectedRows: 1,
    insertId: 4,
    info: '',
    serverStatus: 2,
    warningStatus: 0
}

let updateResults = {
    fieldCount: 0,
    affectedRows: 1,
    insertId: 0,
    info: 'Rows matched: 1  Changed: 1  Warnings: 0',
    serverStatus: 2,
    warningStatus: 0,
    changedRows: 1
}

let deleteResults = {
    fieldCount: 0,
    affectedRows: 1,
    insertId: 0,
    info: '',
    serverStatus: 2,
    warningStatus: 0
}

describe('burgers', function () {
    it('should get all burgers from database', function (done) {
        burgers.all(function (err, results) {
            console.log(results);
            results.should.be.a('array');
            done();
        })
    })
    it('should get insert burger into database', function (done) {
        burgers.insertBurger('burger_name', "Spicy", function (err, results) {
            console.log(results)
            results.should.be.a('object');
            results.should.have.property('affectedRows');
            results.affectedRows.should.equal(1);
            done();
        })
    })
    it('should update burger in database', function (done) {
        burgers.updateBurger(['devoured', '1'], ['id', '1'], function (err, results) {
            console.log(results)
            results.should.be.a('object');
            results.should.have.property('affectedRows');
            results.affectedRows.should.equal(1);
            done();
        })
    })
    it('should delete burger from database', function (done) {
        burgers.deleteBurger(['id', '1'], function (err, results) {
            console.log(results);
            results.should.be.a('object');
            results.should.have.property('affectedRows');
            results.affectedRows.should.equal(1);
            done();
        })
    })
})