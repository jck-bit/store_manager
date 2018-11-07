// get all available products

function createNode(element) {
    return document.createElement(element); 
  }
function append(parent, el) {
    return parent.appendChild(el);
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
        let li = createNode('li');
        li.innerHTML = `${product.name} <br>`
        let input = createNode('input');
        input.type = "submit";
        input.value = `AddtoCart`;
        let a = createNode('a')
        let div = createNode('div')
        div.className = "dets";
        div.innerHTML = `@ KSH ${product.price}<br>`;
        let p = createNode('p');
        p.innerHTML = `Inventory: ${product.inventory} <br>`;
        append(ul, li);
        append(li,div);
        append(li,p);
        append(a,input);
        append(li, a);
        })
        
    }else {
        window.location.href = "login.html";
    }

}).catch((error) => {
    console.log(error);
  });

