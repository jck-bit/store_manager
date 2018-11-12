// //Authentication tests
// const AddStore  = require('../static/js/signup').addStore;
// let expect = require('chai').expect;
// const chai = require('chai');
// chai.should();
// const sinon = require('sinon');
// const fetch = require('node-fetch');


// const name ="storename";
// let category = 'category';
// let email = 'email@gmail.com';
// let password = 'password';

// reg_data = {
//     "name":name, 
//     "category":category,
//     "email":email,
//     "password":password

// };
// /**
// * - Create an account
// */
// describe('Create Account and  Login', () => {
//     describe('Add a new store',() => {
//         it('should create a store',  (done) => {
//             const AddStore = sinon.stub().returns({"status":"Success!"});
//             console.log(AddStore());
//             const result = AddStore(reg_data);
//             console.log(result);
//             result.should.exist;
//             expect(result.status).equal("Success!");
//             done();
//         })  
//     });
    
// })