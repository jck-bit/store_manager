//Authentication tests
//const addStore = require('../static/js/auth.js').addStore;
const addStore  = require('../static/js/signup');


let expect = require('chai').expect;

 
let register_details = {
  'name': 'mochastore',
  'category':'chai',
  'email': 'email@email.com',
  'password': '123@abc',
  'confirmpassword':'123@abc'
};
 
 
/**
* - Create an account, login with details, and check if token comes
*/
 
describe('Create Account, Login and Check Token', () => {
    it('should create a store', async () => {
        //let result = await addStore(register_details);
        //assert.equal(result,201);
        let res = await addStore(register_details);
        expect(res.status).to.equal(201);
        //res.should.eventually.be.true;
        //done();
    })
});
