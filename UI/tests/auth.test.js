//Authentication tests
const addStore  = require('../static/js/signup');
let expect = require('chai').expect;
const chai = require('chai');
chai.should();
const sinon = require('sinon');
// //const sinonStubPromise = require('sinon-stub-promise');

// import sinonStubPromise from 'sinon-stub-promise';
// //import sinon from 'sinon';
// sinonStubPromise(sinon)


// let stubedFetch = sinon.stub(process, 'fetch') 

// window.fetch.returns(Promise.resolve(mockApiResponse()));

// function mockApiResponse(body = {}) {
//     return new window.Response(JSON.stringify(body), {
//        status: 201,
//        headers: { 'Content-type': 'application/json' }
//     });
// }


// function jsonOk (body) {
//     const mockResponse = new window.Response(JSON.stringify(body), {
//       status: 201,
//       headers: {
//         'Content-type': 'application/json'
//       }
//     });
  
//     return Promise.resolve(mockResponse);
//   }
  
// const MOCK_JSON = {
//     'status' : 'Success!'
//     };
  


const name ="storename";
let category = 'category';
let email = 'email@gmail.com';
let password = 'password';

reg_data = {
    "name":name, 
    "category":category,
    "email":email,
    "password":password

};
/**
* - Create an account, login with details, and check if token comes
*/
 // let stub = sinon.stub(addStore, 'fetch'); //add stub
    // stub.onCall(0).returns(jsonOk(MOCK_JSON));
    // });
    // beforeEach(()=>{
    //     mockApiResponse();
    // })
describe('Create Account, Login and Check Token', () => {
    beforeEach( () =>{
        sinon
        .stub(process, "addstore")
        .yields(undefined,{},JSON.stringify({data:{status:"Success!"}}))
    });

    // afterEach(() => {
    //     process.addStore.restore();  //remove stub
    // });
    
    it('should create a store', done => {
        addStore(reg_data)
        .then( data => {
            data.status.should.exist;
            done();
        })
    })
})
