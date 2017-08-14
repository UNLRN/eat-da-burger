require('dotenv').config()
let mysql = require('mysql2');
let db = require('../config/connection')
let burgers = require('../models/burgers');

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();

chai.use(chaiHttp);

describe('/GET index', function() {
    it('it should render index', function(done){
        chai.request(server)
            .get('/')
            .end(function(err, res){
                res.should.have.status(200);
                done();
            })
    })
})

describe('/POST index', function() {
    let column = 'burger_name'
    let burgerName = "Barger"
    it('it should post a burger', function(done) {
        chai.request(server)
            .post('/')
            .send(column, burgerName)
            .end(function (err, res) {
                res.should.have.status(200)
            })
    })
})