let cartAdd1 = document.getElementById('cartaddr');


if (cartAdd1) {
    cartAdd1.addEventListener('submit', cartProductUpdate);
}

//Checkout or sell an entire cart
function cartCheckOut() {
    //e.preventDefault();
    let cartUrl = `https://storemanager-v2.herokuapp.com/api/v2/cart`;
    let token = window.localStorage.getItem('token');
    fetch(cartUrl, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        })
        .then((res) => res.json())
        .then((data) => {
            if (data.status === 'Failed!') {
                // if request is unsuccessful
                document.getElementById('output').style.color = 'red'
                document.getElementById('output').innerHTML = data.message
                return message
            }
            if (data.status === "Sold!") {
                // if request is successful
                message = 'Cart sold!'
                document.getElementById('output').style.color = 'green'
                document.getElementById('output').innerHTML = message
                return message
            }

        })
}



//Remove a product from cart
function deleteOneProduct() {
    //e.preventDefault();
    let productId = sessionStorage.getItem("productid");
    let cartUrl = `https://storemanager-v2.herokuapp.com/api/v2/cart/${productId}`;
    let token = window.localStorage.getItem('token');
    fetch(cartUrl, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        })
        .then((res) => res.json())
        .then((data) => {
            if (data.status === 'Failed!') {
                // if request is unsuccessful
                document.getElementById('output').style.color = 'red'
                document.getElementById('output').innerHTML = data.message
                return message
            }
            if (data.status === "Deleted!") {
                // if request is successful
                document.getElementById('output').style.color = 'green'
                document.getElementById('output').innerHTML = data.status
                return message
            }

        })
}

//Update a product in the cart
function cartProductUpdate(e) {
    e.preventDefault();
    let productId = sessionStorage.getItem("productid");
    let cartUrl = `https://storemanager-v2.herokuapp.com/api/v2/cart/${productId}`;
    let token = window.localStorage.getItem('token');
    let number = document.getElementById('cnumber').value;
    if (number <= 0) {
        let message = 'The number should atleast be one or delete the product from the cart.'
        document.getElementById('output2').style.color = 'red'
        document.getElementById('output2').innerHTML = message
        return message
    }
    fetch(cartUrl, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify({ "number": Number(number) })
        })
        .then((res) => res.json())
        .then((data) => {
            if (data.status === 'Failed!') {
                // if request is unsuccessful
                document.getElementById('output2').style.color = 'red'
                document.getElementById('output2').innerHTML = data.message
            }
            if (data.status === "Cart Updated") {
                // if request is successful
                document.getElementById('output2').style.color = 'green'
                document.getElementById('output2').innerHTML = data.status

            }

        })
}

//Delete an entire cart
function deleteEntireCart() {
    //e.preventDefault();
    let cartUrl = `https://storemanager-v2.herokuapp.com/api/v2/cart`;
    let token = window.localStorage.getItem('token');
    fetch(cartUrl, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        })
        .then((res) => res.json())
        .then((data) => {
            if (data.status === 'Failed!') {
                // if request is unsuccessful
                document.getElementById('output').style.color = 'red'
                document.getElementById('output').innerHTML = data.message
                return message
            }
            if (data.status === "Cart Deleted!") {
                // if request is successful
                document.getElementById('output').style.color = 'green'
                document.getElementById('output').innerHTML = data.status
            }
        })
}
