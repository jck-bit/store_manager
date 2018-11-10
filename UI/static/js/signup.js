// Signup/Add a store

// let reg = document.getElementById('addStore')
// if (reg){
//     reg.addEventListener
//     ('submit', addStore);
// }
// let name = document.getElementById('storename').value;
// let category = document.getElementById('category').value;
// let email = document.getElementById('email').value;
// let password = document.getElementById('password').value;
// let confirmpassword = document.getElementById('confirmpassword').value;

// if (password !== confirmpassword){
//     let message = 'The passwords do not mactch'
//     document.getElementById('output').style.color = 'red'
//     document.getElementById('output').innerHTML = message
//     return message
// }
// data = {"name":name,
//         "category":category,
//         "email":email,
//         "password":password}

function addStore (data) {
    //e.preventDefault();
    let registrationUrl = 'https://storemanager-v2.herokuapp.com/api/v2/signup ';
    fetch(registrationUrl, {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-type':'application/json'
        },
        body:JSON.stringify(data)
        })
        .then((res) => res.json())
        .then((data) => {
            if (data.status === 'Failed!'){
                // if request is unsuccessful
                document.getElementById('output').style.color = 'red'
                document.getElementById('output').innerHTML = data.message
            }
            if (data.status === "Success!"){
                // if request is successful
                document.getElementById('output').style.color = 'green'
                document.getElementById('output').innerHTML = data.message
                setTimeout(function () {
                    window.location.href = "login.html";
                 }, 2000)
            }
        })

    }
//module.exports =addStore;

exports.addStore=addStore;