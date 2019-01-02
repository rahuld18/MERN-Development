var expect= require('expect');
var ckk=require('clock')
describe('lets test',()=>{ // describe is used for multiple tests

    it('should properly run', ()=>{
        expect(1).toBe(1);
    })



    it('lets check for component exists',()=>{

        expect(ckk).toExist();
    })
})