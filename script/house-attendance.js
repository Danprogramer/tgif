import {houseData} from './house.js';

let members = houseData.results[0].members;


buildTable1(members);
function buildTable1(membersArr) {
  document.getElementById("tbody-data1").innerHTML = ""; //traemos el elemento con id tbody y dentro le añadimos un texto vacio
  for (var i = 0; i < membersArr.length; i++) { //para cada i menor que array.length
      var row = document.createElement("tr"); //let row crear un elemento tr
      var link = document.createElement("a"); //let link crear un elemento a normalmente es un hipervinculo o algo parecido
      link.textContent = membersArr[i].first_name + " " + (membersArr[i].middle_name || "") + " " + membersArr[i].last_name; //el contenido de text content es el first middle y last name en cada indice i del array
      link.setAttribute("href", membersArr[i].url) //link que es crear un elemento a tiene a su vez un setAttribute que le da un atributo id name role href etc al elemento
      row.insertCell().append(link); //a row que es crear un tr le aplicamos insertCell que crea una celda y con append añadimos link dentro de la celda
      row.insertCell().innerHTML = membersArr[i].district;
      row.insertCell().innerHTML = membersArr[i].status;
      document.getElementById("tbody-data1").append(row) //nos traemos tbody y le añadimos row
  }
}
buildTable2(members);
function buildTable2(membersArr) {
  document.getElementById("tbody-data2").innerHTML = ""; //traemos el elemento con id tbody y dentro le añadimos un texto vacio
  for (var i = 0; i < membersArr.length; i++) { //para cada i menor que array.length
      var row = document.createElement("tr"); //let row crear un elemento tr
      var link = document.createElement("a"); //let link crear un elemento a normalmente es un hipervinculo o algo parecido
      link.textContent = membersArr[i].first_name + " " + (membersArr[i].middle_name || "") + " " + membersArr[i].last_name; //el contenido de text content es el first middle y last name en cada indice i del array
      link.setAttribute("href", membersArr[i].url) //link que es crear un elemento a tiene a su vez un setAttribute que le da un atributo id name role href etc al elemento
      row.insertCell().append(link); //a row que es crear un tr le aplicamos insertCell que crea una celda y con append añadimos link dentro de la celda
      row.insertCell().innerHTML = membersArr[i].district;
      row.insertCell().innerHTML = membersArr[i].status;
      document.getElementById("tbody-data2").append(row) //nos traemos tbody y le añadimos row
  }
}