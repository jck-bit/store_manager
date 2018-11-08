let number = document.getElementById('number');
function addProductsNum(){
    number.style.display = "block";
    
}

// get the contents of my cart

function stashId(inid) {
    sessionStorage.setItem('productid', inid)
}
 
 
let ul = document.getElementById('cart');
let h2 = document.getElementById('total');
let cartUrl = 'https://storemanager-v2.herokuapp.com/api/v2/cart';
let token = window.localStorage.getItem('token');
fetch(cartUrl, {
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
        h2.innerHTML = `<strong>TotalAmount :</strong> KSH ${data.TotalAmount}<br>`;
        let products = data.Items; // Get the results
        return products.map(function(product) { // Map through the results and for each run the code below
        ul.innerHTML += `
                <li> 
                    <strong>Product :</strong> ${product.product}<br> 
                    <strong>Number  :</strong> ${product.number_of_products}<br>
                    <strong>Cost    :</strong> KSH ${product.amount}<br>
                </li>
                <div class="btns">
                    <a onClick="stashId(${product.entry_id}); addProductsNum();" ><input type="submit" value="Update"></a>
                    <a onClick="stashId(${product.entry_id}); deleteOneProduct();" class="del"><input type="submit" value="Delete"></a>
                </div><br>
                `;
        })
        
    }else {
        window.location.href = "login.html";
    }

}).catch((error) => {
    console.log(error);
  });

