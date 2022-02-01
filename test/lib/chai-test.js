const chai = require ('chai');
//mocha ./test --recursive
//mocha './test/**/*.test.js'
//mocha ./test/**/*.test.js

const expect = chai.expect;

describe('chai test',()=>{
    it('should compare numbers',()=>{
        expect(1).to.equal(1);
        //expect(1).to.equal(2);
    });
    it('should compare foos',()=>{
        expect({name:'foo'}).to.deep.equal({name:'foo'});// deep equal compares object properties not the object.
        //expect({name:'foo'}).to.equal({name:'foo'});
        expect({name:'foo'}).to.have.property('name').to.equal('foo');
        expect(5>8).to.be.false;
        expect({}).to.be.a('object');
        expect('foo').to.be.a('string');
        expect(3).to.be.a('number');
        expect('bar').to.be.a('string').with.lengthOf(3);
        expect([1,2,3].length).to.be.equal(3);
        expect(null).to.be.null;
        expect(undefined).to.not.exist;
        expect(1).to.exist;
    });
    
})