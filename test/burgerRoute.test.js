require('dotenv').config()
let mysql = require('mysql2');
let db = require('../config/connection')
let burgers = require('../models/burgers');

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();

chai.use(chaiHttp);

describe('/GET index', function () {
    it('it should render index', function (done) {
        chai.request(server)
            .get('/')
            .end(function (err, res) {
                res.should.have.status(200);
                done();
            })
    })
})

describe('/POST index', function () {
    let burgerName = "Barger"
    it('it should redirect to index', function (done) {
        chai.request(server)
            .post('/')
            .send(burgerName)
            .end(function (err, res) {
                console.log(res.body)
                res.should.have.status(200);
                res.should.redirect;
                done();
            })
    })
})

describe('/PUT index', function () {
    let id = '1'
    it('it should redirect to index', function (done) {
        chai.request(server)
            .put('/:id')
            .send(id)
            .end(function (err, res) {
                res.should.have.status(200)
                res.should.redirect;
                done();
            })
    })
})

describe('/DELETE index', function () {
    let id = '1'
    it('it should redirect to index', function (done) {
        chai.request(server)
            .delete('/:id')
            .send(id)
            .end(function (err, res) {
                res.should.have.status(200)
                res.should.redirect;
                done();
            })
    })
})