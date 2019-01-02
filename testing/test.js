
var chai = require('chai');

expect = chai.expect;

chai.should();
function sum(num1,num2)
{
    return num1+num2;
}

describe('to check sum() method',function(){

    var num=5;
            

    //Before going to any it() it initialise first num=5


    beforeEach(function(){
        num=5;
    })
    

    afterEach(function(){
        console.log("Finished");
    })


    it('should be 10 when adding 5 to 5',function(){
        num=sum(num,5);
        num.should.equal(10);

    })
    it('should be 12 when adding 5 to 7',function(){
        num=sum(num,7);
        num.should.equal(12);

    })
})