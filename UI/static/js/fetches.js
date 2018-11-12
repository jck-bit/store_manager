//fetch util 

function postFetch(url,data){
    return fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-type':'application/json'
        },
        body:JSON.stringify(data)
        })

}
exports.postFetch = postFetch;
//exports.addStore=addStore;