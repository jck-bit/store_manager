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

let btn = document.getElementById("myBtn");

let done = document.getElementsByClassName("added-to-cart")[0];
let don2 = document.getElementsByClassName("viewed")[0];
let add = document.getElementById("add");

btn.onclick = function() {
    modal.style.display = "block";
}
function adc() {
    modal.style.display = "block";
}
function details() {
    mod2.style.display = "block";
}
done.onclick = function() {
    modal.style.display = "none";
}
don2.onclick = function() {
    mod2.style.display = "none";
}
