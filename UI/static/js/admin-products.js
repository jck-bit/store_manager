// ADD a new product

function addProduct(e) {
    e.preventDefault();
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
                    window.location.href = "products.html";
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



let token = window.localStorage.getItem('token');

function stashId(inid) {
    sessionStorage.setItem('productid', inid)
}
let number = document.getElementById("update");
//diplay inventory modal
function addProductsNum(e) {
    e.preventDefault();
    number.style.display = "block";
}

//Populate the category drop down
function stashCatId(inid) {
    sessionStorage.setItem('catid', inid)
}

function stashCatname(name) {
    sessionStorage.setItem('catname', name)
}
let div1 = document.getElementById('catdrop');
let btntitle = document.getElementById('btntitle');
let categoryUrl = 'https://storemanager-v2.herokuapp.com/api/v2/categories';
let catname = sessionStorage.getItem("catname");
fetch(categoryUrl, {
        method: 'GET',
        headers: {
            'Access-Control-Request-Headers': '*',
            'Authorization': 'Bearer ' + token
        }
    })
    .then((res) => res.json())
    .then((data) => {
        if (data.status === "Failed!") {
            // if request is unsuccessful
            document.getElementById('output').style.color = 'red'
            document.getElementById('output').innerHTML = data.message
            return message
        }
        if (data.status === "Success!") {
            // if request is successful
            let categories = data.categories; // Get the results
            return categories.map(function(category) { // Map through the results and for each run the code below
                div1.innerHTML += `
                <a selected="selected" onClick="stashCatId(${category.id});" >${category.name}</a>`;
                if (catname !== null) {
                    btntitle.innerHTML += `${catname}`;
                }
            })
        }

    })

// get all available products
let ul = document.getElementById('products');

let productsUrl = 'https://storemanager-v2.herokuapp.com/api/v2/products';

fetch(productsUrl, {
        method: 'GET',
        headers: {
            'Access-Control-Request-Headers': '*',
            'Authorization': 'Bearer ' + token
        }
    })
    .then((res) => res.json())
    .then((data) => {
        if (data.status === "Failed!") {
            // if request is unsuccessful
            document.getElementById('output').style.color = 'red'
            document.getElementById('output').innerHTML = data.message
            return message
        }
        if (data.status === "Success!") {
            // if request is successful
            let products = data.products; // Get the results
            return products.map(function(product) { // Map through the results and for each run the code below
                ul.innerHTML += `
                <li> 
                    <h4>${product.name}</h4>
                    <div class="status">
                        <h3>Category: ${product.category}</h3>
                        <h3>Number: ${product.inventory}</h3>
                        <h3>Price: @KSH ${product.price}</h3>
                    </div>
                </li>
                <div class="btns">
                    <a onClick="stashId(${product.product_id}); addProductsNum(event);" ><input type="submit" value="Update"></a>
                    <a onClick="stashId(${product.product_id}); deleteOneProduct();" class="del"><input type="submit" value="Delete"></a>
                </div><br>
                `;
            })

        } else {
            window.location.href = "login.html";
        }

    })
