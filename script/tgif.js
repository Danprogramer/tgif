
document.getElementById('dropbtn').onclick = function() { 
    var values = ["Senate","House"];

      var select = document.createElement("select");
      select.name = "dropdownbtn";
      select.id = "dropdownbtn";

    for (const val of values){
      var option = document.createElement("option");
      option.value = val;
      option.text = val.charAt(0).toUpperCase() + val.slice(1);
      select.appendChild(option);
    }
    var label = document.createElement("label");
    label.htmlFor = "dropdownbtn"
    document.getElementById("dropdown").appendChild(label).appendChild(select);
} 