// ADD a new product

let newProduct = document.getElementById('newproduct')
if (newProduct){
    newProduct.addEventListener
    ('submit', addProduct);
}

function addProduct(e){
    e.preventDefault();
    let productUrl = 'https://storemanager-v2.herokuapp.com/api/v2/products';
    let name = document.getElementById('name').value;
    let inventory = document.getElementById('number').value;
    let price = document.getElementById('price').value;
    let token = window.localStorage.getItem('token');

    fetch(productUrl, {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-type':'application/json',
            'Authorization': 'Bearer '+ token
        },
        body:JSON.stringify({"name":name,
                            "inventory":Number(inventory),
                            "price":Number(price)})
        
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
                    window.location.href = "stock.html";
                 }, 2000)
            }
        })
    }