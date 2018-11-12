const sinon = require('sinon');
const addStore = require('../signup').addStore;

let name ="storename";
let category = 'category';
let email = 'email@gmail.com';
let password = 'password';

reg_data = {
    "name":name, 
    "category":category,
    "email":email,
    "password":password

};

describe('Create Account and  Login', () => {
        it('should create a store',  () => {
            sinon.stub(addStore,'postFetch').returns({"status":"Success!"});
            // process.body.innerHTML =
            //     '<p id="output">'+'</p>';
            //addStore.postFetch = postFetch;
            const result = addStore(reg_data);
            console.log(result);
            expect($('#output').text()).toEqual('Success!');

        })  
    
})



