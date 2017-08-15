require('dotenv').config()
let mysql = require('mysql2');
let db = require('../config/connection')
let burgers = require('../models/burgers');

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();

chai.use(chaiHttp);

describe('selectAll', function () {
    it.only('it should get all burgers from database', function (done) {
		let table = 'burgers';
		done();
    })
})