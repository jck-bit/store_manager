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
        'Authorization': 'Bearer '+ token
    }
})
  .then((res) => res.json())
  .then((data) => {
    if (data.status === 'Failed!'){
        // if request is unsuccessful
        document.getElementById('output').style.color = 'red'
        document.getElementById('output').innerHTML = data.message
        return message
    }
    if (data.status === "Success!"){
        // if request is successful
        let products = data.products; // Get the results
        return products.map(function(product) { // Map through the results and for each run the code below
        ul.innerHTML += `
                <li>
                    ${product.name} <br>
                    <div class="dets">
                        @ KSH ${product.price}<br>    
                    </div>
                    Inventory: ${product.inventory}<br>
                    <a >
                        <input onClick="stashId(${product.product_id});" type='submit' value='Addtocart'>
                    </a>
                </li>
                `;
        })
        
    }

}).catch((error) => {
    console.log(error);
  });

