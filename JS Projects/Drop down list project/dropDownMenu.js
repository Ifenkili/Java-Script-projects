var select = document.getElementById("selectColor");
var options = ["red", "yellow", "blue", "green", "purple", "orange", "black", "white", "grey", "brown", "maroon", "burgundy", "oxblood", "pink", "fuschia", "magenta", "lemon", "lime", "torquoise", "aquamarine", "emerald", "pewter", "caramel", "coffee", "peach"];
for (var i = 0; i < options.length; i++) {
    var opt = options[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    select.appendChild(el);
}