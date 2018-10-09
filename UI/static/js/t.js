function sell() {
    alert('Sold!');
}
let edit = document.getElementById('editp');
let update = document.getElementsByClassName('update')[0];
function editf() {
    edit.style.display = "block";
}
update.onclick = function() {
    edit.style.display = "none";
}
