 function deleteLast() {
     var len = document.getElementById("display").value.length;
     document.getElementById("display").value = document.getElementById("display").value.substr(0, len - 1);
 }