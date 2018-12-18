// get all available products

function stashId(inid) {
    sessionStorage.setItem('productid', inid)
}


let ul = document.getElementById('products');
let productsUrl = 'https://storemanager-v2.herokuapp.com/api/v2/products';
let token = window.localStorage.getItem('token');
fetch(productsUrl, {
        method: 'GET',
        headers: {
            'Access-Control-Request-Headers': '*',
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
        if (data.status === "Success!") {
            // if request is successful
            let products = data.products; // Get the results
            return products.map(function(product) { // Map through the results and for each run the code below
                ul.innerHTML += `
                <div id="card" class="card">
                    <div class="card-container" id="headname">
                        <h2><b>${product.name}</b></h2> 
                        <h4>Price     : @KSH ${product.price}</h4> 
                        <h4>Inventory : ${product.inventory}</h4> 
                        <button onClick="stashId(${product.product_id});">AddtoCart</button>
                    </div>
                    <p></p>
                </div>
                `;
            })

        }

    })

let searchProducts = () =>{
    var input, filter, allproducts, name, b, i, txtValue,card;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    allproducts = document.getElementById("products");
    name = allproducts.getElementsByTagName('div');

    for (i = 0; i < name.length; i++) {
        b = name[i].getElementsByTagName("b")[0];
        txtValue = b.textContent || b.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            name[i].style.display = "";
        } else {
            name[i].style.display = "none";
            h4.style.display = "none";
            button.style.display = "none";
        }
    }
}