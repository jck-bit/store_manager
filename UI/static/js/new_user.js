//AddAttendant

function addAttendant(){
    //e.preventDefault();
    let attendantUrl = 'http://127.0.0.1:5000/api/v2/attendant';
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let token = window.localStorage.getItem('token');

    fetch(attendantUrl, {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-type':'application/json',
            'Authorization': 'Bearer '+ token
        },
        body:JSON.stringify({email:email,password:password})
        
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
                    window.location.href = "addattendant.html";
                    }, 8000)
            }
        })
    }


// Add admin

function addAdmin(){
    let adminUrl = 'http://127.0.0.1:5000/api/v2/admin';
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let token = window.localStorage.getItem('token');

    fetch(adminUrl, {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-type':'application/json',
            'Authorization': 'Bearer '+ token
        },
        body:JSON.stringify({email:email,password:password})
        
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
                    window.location.href = "addattendant.html";
                 }, 8000)
            }
        })
    }



    