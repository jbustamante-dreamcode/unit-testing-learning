const assert = require('assert');


describe('file to be tested',()=>{
    context('function to be tested',()=>{
        /**before(()=>{
            console.log('=====before==');
        });
        after(()=>{
            console.log('=====after===');

        });
        beforeEach(()=>{
            console.log('=====beforeEach');
        });
        afterEach(()=>{
            console.log('=====afterEach');
        });**/
        it('should compare numbers',()=>{
            //console.log(`ENV ${process.env.NODE_ENV}`);
            
            let mode="";
            process.env.NODE_ENV=='development' ? mode="DEV" : mode="QA";
            console.log(mode);
            assert.equal(1,1);
        
        });
        it('should compare different numbers',()=>{
            assert.notEqual(1,2);
        
        });
        it('should compare different names',()=>{
            assert.notDeepEqual({name:'steve'},{name:'joe'});
        
        });
        it('should compare names',()=>{
            assert.deepEqual({name:'joe'},{name:'joe'});
        
        });
        it('this is a pending test');
        
    });
    context('another function to be tested',()=>{
        it('should do something on the other context');
      
    })
})