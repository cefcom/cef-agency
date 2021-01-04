
var today = new Date();
// var date = today.getDate() + '/' + (today.getMonth()+1) + '/' + today.getFullYear() + ' .';

var date = today.getDate() + '-' + today.toLocaleString('default', {month: 'short'}) + '-' + today.getFullYear() + ' .' ;


document.getElementById("p1").innerHTML = date;
document.getElementById("p2").innerHTML = date;
document.getElementById("p3").innerHTML = date;
document.getElementById("date").innerHTML = today.getFullYear();