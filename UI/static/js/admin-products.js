// ADD a new product

addProduct = () => {
    let name = document.getElementById('name').value;
    let inventory = document.getElementById('number').value;
    let price = document.getElementById('price').value;
    let token = window.localStorage.getItem('token');
    let catid = sessionStorage.getItem("catid");
    if (catid === null) {
        var productUrl = 'https://storemanager-v2.herokuapp.com/api/v2/products';
    } else {
        var productUrl = `https://storemanager-v2.herokuapp.com/api/v2/categories/${catid}/products`;
    }

    fetch(productUrl, {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                "name": name,
                "inventory": Number(inventory),
                "price": Number(price)
            })

        })
        .then((res) => res.json())
        .then((data) => {
            if (data.status === 'Failed!') {
                // if request is unsuccessful
                document.getElementById('output').style.color = 'red'
                document.getElementById('output').innerHTML = data.message
            }
            if (data.status === "Success!") {
                // if request is successful
                document.getElementById('output').style.color = 'green'
                document.getElementById('output').innerHTML = data.message
                setTimeout(() => {
                    window.location.assign("products.html");
                }, 2000)
            }
        })
}

//New category 
function addCategory(e) {
    e.preventDefault();
    let categoryUrl = 'https://storemanager-v2.herokuapp.com/api/v2/categories';
    let name = document.getElementById('catname').value;
    let token = window.localStorage.getItem('token');

    fetch(categoryUrl, {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ "name": name })

        })
        .then((res) => res.json())
        .then((data) => {
            if (data.status === 'Failed!') {
                // if request is unsuccessful
                document.getElementById('output').style.color = 'red'
                document.getElementById('output').innerHTML = data.message
            }
            if (data.status === "Success!") {
                // if request is successful
                document.getElementById('output').style.color = 'green'
                document.getElementById('output').innerHTML = data.status
                setTimeout(() => {
                    window.location.href = "stock.html";
                }, 2000)
            }
        })
}
