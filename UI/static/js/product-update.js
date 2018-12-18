let proUpdate = document.getElementById('update');


if (proUpdate) {
    proUpdate.addEventListener('submit', productUpdate);
}

//Delete a product
function deleteOneProduct() {
    //e.preventDefault();
    let productId = sessionStorage.getItem("productid");
    let productUrl = `https://storemanager-v2.herokuapp.com/api/v2/products/${productId}`;
    let token = window.localStorage.getItem('token');
    fetch(productUrl, {
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
            }

        })
}

//Update a product
function productUpdate(e) {
    e.preventDefault();
    let productId = sessionStorage.getItem("productid");
    let productUrl2 = `https://storemanager-v2.herokuapp.com/api/v2/products/${productId}`;
    const token = window.localStorage.getItem('token');
    let number = document.getElementById('numberup').value;
    let name = document.getElementById('nameup').value;
    let price = document.getElementById('priceup').value;
    var data = {}
    if (number.length !== 0) {
        data.inventory = Number(number);
    }
    if (name.length !== 0) {
        data.name = name;
    }
    if (price.length !== 0) {
        data.price = Number(price)
    }
    fetch(productUrl2, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${token}`
            },

            body: JSON.stringify(data)
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
