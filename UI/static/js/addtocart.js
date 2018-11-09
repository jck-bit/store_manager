let number = document.getElementById('number');
function addProductsNum(){
    number.style.display = "block";
    
}
let cartAdd1 = document.getElementById('cartaddr');


 if (cartAdd1){
    cartAdd1.addEventListener
    ('submit', cartAdd);
}

function cartAdd(e){
    e.preventDefault();
    let productId = sessionStorage.getItem("productid");
    console.log(productId);
    let cartUrl = `https://storemanager-v2.herokuapp.com/api/v2/products/${productId}`;
    let token = window.localStorage.getItem('token');
    console.log(cartUrl);
    let number = document.getElementById('cnumber').value;
    if (number <= 0){
        let message = 'The number should atleast be one'
        document.getElementById('output2').style.color = 'red'
        document.getElementById('output2').innerHTML = message
    }
    fetch(cartUrl, {
        method: 'POST',
        headers: {
            'Content-type':'application/json',
            'Authorization': 'Bearer '+ token
        },
        body:JSON.stringify({"number":Number(number)})
        })
        .then((res) => res.json())
        .then((data) => {
            if (data.status === 'Failed!'){
                // if request is unsuccessful
                document.getElementById('output2').style.color = 'red'
                document.getElementById('output2').innerHTML = data.message
                return message
            }
            if (data.status === "Success!"){
                // if request is successful
                document.getElementById('output2').style.color = 'green'
                document.getElementById('output2').innerHTML = data.message
                return message
            }else {
                window.location.href = "login.html";
            }
    
        })
    }