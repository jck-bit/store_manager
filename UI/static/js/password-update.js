//Update password

let passUpdate = document.getElementById('passupdate');

if (passUpdate) {
    passUpdate.addEventListener('submit', passwordUpdate);
}

function passwordUpdate(e) {
    e.preventDefault();
    let passwordUrl = `https://storemanager-v2.herokuapp.com/api/v2/editpassword`;
    const token = window.localStorage.getItem('token');
    let oldpass = document.getElementById('oldpass').value;
    let newpass = document.getElementById('newpass').value;
    fetch(passwordUrl, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${token}`
            },

            body: JSON.stringify({
                "old_password": oldpass,
                "new_password": newpass
            })
        })
        .then((res) => res.json())
        .then((data) => {
            if (data.status === 'Failed!') {
                // if request is unsuccessful
                document.getElementById('output').style.color = 'red'
                document.getElementById('output').innerHTML = data.message
            }
            if (data.status === "Updated!") {
                // if request is successful
                document.getElementById('output').style.color = 'green'
                document.getElementById('output').innerHTML = data.status

            }

        })
}
