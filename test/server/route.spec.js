process.env.NODE_ENV = 'test';

var chai = require('chai');
var mocha = require('moacha');
var chaiHttp = require('chai-http');
var server = require('../src/server/app.js');

var should = chai.should();
chai.use(chaiHttp);

describe('server router', function(){
    it('should return ...', function(done){
        chai.request(server)
        .get('/')
        .end(function(err, res){
            res.should.have.status(200);
            done();
        });
    });
});
