
import {data} from './prova.js';
import {states} from './state.js';

let members= data.results[0].members;
let checkboxes = document.querySelectorAll("input[type=checkbox]");
let check = [];
let selector =document.getElementById('stateDropdown');


//-----------------------------Select Creation----------------------------------------------------
 let select = document.getElementById('stateDropdown');
 dropdown(states);
 function dropdown(states){
    for (const key in states) {
        let option = document.createElement("option");
        let value = select.options[select.selectedIndex].value;
        let text = select.options[select.selectedIndex].text;
        option.value=`${key}`;
       
        option.text=`${key}`;
        select.appendChild(option);
        
   }
  
 }

 document.getElementById('stateDropdown').addEventListener('change', function() {
     
  });


//----------------------------- End Select Creation----------------------------------------------------

//-----------------------------Table-------------------------------------------------------------------

 

 printTable(members);
 function printTable(membersArr) {
    var tbody = document.getElementById('tbody-data');
    tbody.innerHTML = '';
    for (let i = 0; i < membersArr.length; i++) {    
        var createTr = document.createElement("tr");
        var nameTd = document.createElement("td");
        var partyTd = document.createElement("td");
        var stateTd = document.createElement("td");
        var senirityTd = document.createElement("td");
        var votesWithPartyTd = document.createElement("td");
        var senatorFullName = membersArr[i].first_name + ' ' + membersArr[i].last_name;
        // IF SENATOR HAS MIDDLE NAME, ADD IT
        if (membersArr[i].middle_name) {senatorFullName = membersArr[i].first_name + ' ' + membersArr[i].middle_name + ' ' + membersArr[i].last_name;};
        nameTd.innerHTML = ("<a target='_blank' href=" + membersArr[i].url + ">" + senatorFullName  + "</a>");
        partyTd.innerHTML = membersArr[i].party;
        stateTd.innerHTML = membersArr[i].state;
        senirityTd.innerHTML = membersArr[i].seniority;
        votesWithPartyTd.innerHTML = membersArr[i].votes_with_party_pct + '%';
        createTr.append(nameTd, partyTd, stateTd, senirityTd, votesWithPartyTd);
        tbody.appendChild(createTr);
    };
}
    //-------------------------End Table-------------------------------------------------------------------
    

    // FILTER FUNCTION

const makeFilterArray = members => {
    
    check =  Array.from(checkboxes) // Convert checkboxes to an array to use filter and map.
                  .filter(i => i.checked) // Use Array.filter to remove unchecked checkboxes.
                  .map(i => i.value); // gets array with filterboxes taht are checked
    let state = selector.value; // gets value from dropdown for states
    


    //let members = makeArr(data); // makes usable array with function from main.js using data from json data
    let filterarr = []; // creating new empty array that serves as temp to populate new array
    if (check.length == 0 && state == "All states") {
      // case 1: NO Checkboxes; NO Dropdown states => default state
      filterarr = members;
    } else {
      members.forEach(element => {
        if (check.length !== 0 && state == "All states") {
          // case 2: YES Checkboxes are checked; NO Dropdown states
          //filterarr = members; // think this is unneccessary JL 7.2.20
          if (check.includes(element.party)) {
            filterarr.push(element);
          }
        } else if (check.length == 0 && state !== "All states") {
          // case 3: NO Checkboxes are checked; YES Dropdown states
          if (element.state == state) {
            filterarr.push(element);
          }
        } else {
          if (check.includes(element.party) && element.state == state) {
            // case 4: YES Checkboxes are checked; YES Dropdown states
  
            filterarr.push(element);
          }
        }
      });
    
       // end of foreach=> temp array fiterarry is full of desired data
    }
  
    return printTable(filterarr);
  };
  
  allEventListener(members);
  function allEventListener(arr){
    //checkbox
    let y = "";
    selector.addEventListener('change',(event)=>{
    y =  event.target.value;
    let midArr = arr.filter(x=>x.state===y);
    return makeFilterArray(members)
    });
  
    //select
    checkboxes.forEach(function(checkbox) {
      checkbox.addEventListener('change', function() {
        let  enabledSettings = Array.from(checkboxes) // Convert checkboxes to an array to use filter and map.
                                .filter(i => i.checked) // Use Array.filter to remove unchecked checkboxes.
                                .map(i => i.value) // Use Array.map to extract only the checkbox values from the array of objects.
                                console.log(enabledSettings,'hhh')
                                return makeFilterArray(members);
        });
      });
  }
 
 
