function b_show() {
    alert('Hello\nOur blog does not have posts yet.');
}
// Get the modal
let modal = document.getElementById('myModal');
let btn = document.getElementById("myBtn");
let done = document.getElementsByClassName("green")[0];

btn.onclick = function() {
    modal.style.display = "block";
}
function adc() {
    modal.style.display = "block";
}

done.onclick = function() {
    modal.style.display = "none";
}

