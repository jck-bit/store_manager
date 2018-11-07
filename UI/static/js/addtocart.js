let addcart = document.getElementById('cartnum')
if (addcart){
    addcart.addEventListener
    ('submit',cartAdd);
    
}
function cartAdd(){
    //e.preventDefault();
    let cartUrl = `https://storemanager-v2.herokuapp.com/api/v2/products/${this.product_id}`;
    let number = document.getElementById('cnumber').value;
    if (number <= 0){
        let message = 'The number should atleast be one'
        document.getElementById('output').style.color = 'red'
        document.getElementById('output').innerHTML = message
        number.style.display = "none";
        return message
    }
    fetch(cartUrl, {
        method: 'POST',
        headers: {
            'Content-type':'application/json',
            'Authorization': 'Bearer '+ token
        },
        body:{"number":number}
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
                document.getElementById('output').style.color = 'green'
                document.getElementById('output').innerHTML = data.message
                return message
            }
    
        })
    }