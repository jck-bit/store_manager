

function b_show() {
    alert('Hello\nOur blog does not have posts yet.');
}

function del() {
    alert('Product Devared!');
}
function sell() {
    alert('Sold!');
}

// Get the modal
const modal = document.getElementById('newproduct');
const mod2 = document.getElementById('details');

const btn = document.getElementById("myBtn");

const done = document.getElementsByClassName("added-to-cart")[0];
const don2 = document.getElementsByClassName("viewed")[0];
const add = document.getElementById("add");

btn.onclick = function() {
    modal.style.display = "block";
}
function adc() {
    modal.style.display = "block";
}
function details() {
    mod2.style.display = "block";
}
done.onclick = () => {
    modal.style.display = "none";
};
don2.onclick = () => {
    mod2.style.display = "none";
};