function stashCatId(inid) {
    sessionStorage.setItem('catid', inid)
}

categoryName = (e)=>{
    e.preventDefault();
    let namemode = document.getElementById('namemod');
    namemode.style.display = "block";
}

//Update a product
categoryUpdate = (e)=> {
    e.preventDefault();
    let catId = sessionStorage.getItem("catid");
    let categoryUrl = `https://storemanager-v2.herokuapp.com/api/v2/categories/${catId}`;
    let token = window.localStorage.getItem('token');
    let name = document.getElementById('nameup').value;

    fetch(categoryUrl, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${token}`
            },

            body: JSON.stringify({"name":name})
        })
        .then((res) => res.json())
        .then((data) => {
            if (data.status === 'Failed!') {
                // if request is unsuccessful
                document.getElementById('output').style.color = 'red'
                document.getElementById('output').innerHTML = data.message
            }
            if (data.status === "Updated!") {
                // if request is successful
                document.getElementById('output').style.color = 'green'
                document.getElementById('output').innerHTML = data.status

            }

        })
}
//Delete a category
deleteCategory = (e) =>{
    e.preventDefault();
    let catId = sessionStorage.getItem("catid");
    let categoryUrl = `https://storemanager-v2.herokuapp.com/api/v2/categories/${catId}`;
    let token = window.localStorage.getItem('token');
    fetch(categoryUrl, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json',
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
            if (data.status === "Deleted!") {
                // if request is successful
                document.getElementById('output').style.color = 'green'
                document.getElementById('output').innerHTML = data.status
            }

        })
}


let div = document.getElementById('categories');
let categoryUrl = 'https://storemanager-v2.herokuapp.com/api/v2/categories';
let token = window.localStorage.getItem('token');
fetch(categoryUrl, {
        method: 'GET',
        headers: {
            'Access-Control-Request-Headers': '*',
            'Authorization': 'Bearer ' + token
        }
    })
    .then((res) => res.json())
    .then((data) => {
        if (data.message === 'There are no categories at this time') {
            // if request is unsuccessful
            document.getElementById('output').style.color = 'red'
            document.getElementById('output').innerHTML = data.message
            return message
        }
        if (data.status === "Success!") {
            // if request is successful
            let categories = data.categories; // Get the results
            return categories.map(function(category) { // Map through the results and for each run the code below
                div.innerHTML += `
                <li> 
                    <h4>${category.name}</h4>
                </li>
                <div class="btns">
                    <a onClick="stashCatId(${category.id}); categoryName(event);" ><input type="submit" value="Update"></a>
                    <a onClick="stashCatId(${category.id}); deleteCategory(event);" class="del" ><input type="submit" value="Delete"></a>
                </div><br>`;

            })
        }

    })