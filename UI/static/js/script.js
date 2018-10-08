function b_show() {
    alert('Hello\nOur blog does not have posts yet.');
}
// Get the modal
let modal = document.getElementById('myModal');
let done = document.getElementsByClassName("green")[0];

function adc() {
    modal.style.display = "block";
}

done.onclick = function() {
    modal.style.display = "none";
}


