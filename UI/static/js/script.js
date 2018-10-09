function b_show() {
    alert('Hello\nOur blog does not have posts yet.');
}

function del() {
    alert('Product Deleted!');
}
function sell() {
    alert('Sold!');
}
function user_add() {
    alert('Attendant Added!');
}
function user_add2() {
    alert('Admin Added!');
}
// Get the modal
let modal = document.getElementById('addtocart');
let mod2 = document.getElementById('details');

// Get the button that opens the modal
let btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
let done = document.getElementsByClassName("added-to-cart")[0];
let don2 = document.getElementsByClassName("viewed")[0];
let add = document.getElementById("add");

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}
function adc() {
    modal.style.display = "block";
}
function details() {
    mod2.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
done.onclick = function() {
    modal.style.display = "none";
}
don2.onclick = function() {
    mod2.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
