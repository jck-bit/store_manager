// get all sales records
let tr = document.getElementById('tablecontents');
let total = document.getElementById('total');
let salesUrl = 'https://storemanager-v2.herokuapp.com/api/v2/user/sales';
let token = window.localStorage.getItem('token');
fetch(salesUrl, {
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
            let sales = data.sales; // Get the results
            total.innerHTML = `Total Sales Worth: KSH ${data.Total_sales_worth}`
            return sales.map(function(sale) { // Map through the results and for each run the code below
                tr.innerHTML += `
                <tr>
                    <td>${sale.product_name}</td>
                    <td>${sale.number_of_products}</td>
                    <td>${sale.sold_on}</td>
                    <td>${sale.seller}</td>
                    <td>${sale.Amount}</td>
                </tr>
                `;
            })

        } else {
            window.location.href = "login.html";
        }

    })
