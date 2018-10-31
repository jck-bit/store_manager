// Signup/Add a store

let reg = document.getElementById('addStore')
if (reg){
    reg.addEventListener
    ('submit', addStore);
}

function addStore(e){
    e.preventDefault();
    let registrationUrl = 'http://127.0.0.1:5000/api/v2/signup ';
    let name = document.getElementById('storename').value;
    let category = document.getElementById('category').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirmpassword = document.getElementById('confirmpassword').value;

    if (password !== confirmpassword){
        let message = 'The passwords do not mactch'
        document.getElementById('output').style.color = 'red'
        document.getElementById('output').innerHTML = message
        return message
    }


    fetch(registrationUrl, {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-type':'application/json'
        },
        body:JSON.stringify({"name":name,
                            "category":category,
                            "email":email,
                            "password":password})
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

// // User Login

let signin = document.getElementById('login')
if (signin){
    signin.addEventListener
    ('submit', login);
    function login(e){

    e.preventDefault();
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    //endpoint to sign in the user
    let loginUrl = 'http://127.0.0.1:5000/api/v2/auth/login';
    fetch(loginUrl, {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-type':'application/json'
        },
        body:JSON.stringify({email:email,password:password,})
        })
        .then((res) => res.json())
        .then((data) => {
            if (data.status === 'Failed!'){
                // if request is unsuccessful
                document.getElementById('output').style.color = 'red'
                document.getElementById('output').innerHTML = data.message
            }
            // store the token created when user is logged in
            if (data.status === "Success!"){
                // if request is successful
                window.location.href = "products.html";
            }
            window.localStorage.setItem('token', data.token);
        })
    }
  }

