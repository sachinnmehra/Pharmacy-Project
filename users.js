var tableBody = document.querySelector("tbody");
const resetBtn = document.querySelector("#reset-btn");
var searchInput = document.querySelector("#search-input");
let logout = document.querySelector("#logout");
fetch("https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      var tr = document.createElement("tr");

      var td1 = document.createElement("td");
      var td2 = document.createElement("td");
      var td3 = document.createElement("td");
      var td4 = document.createElement("td");
      var td5 = document.createElement("td");
      var td6 = document.createElement("td");
      var img = document.createElement("IMG");

      tr.appendChild(td1);
      tr.appendChild(td2);
      td2.appendChild(img);
      tr.appendChild(td3);
      tr.appendChild(td4);
      tr.appendChild(td5);
      tr.appendChild(td6);
      tr.classList.add("userTr");

      tableBody.appendChild(tr);
      td1.textContent = data[i].id;
      img.setAttribute("src", data[i].profilePic);
      td3.textContent = data[i].fullName;
      td4.textContent = data[i].dob;
      td5.textContent = data[i].gender;
      td6.textContent = data[i].currentCity + "," + data[i].currentCountry;
      td1.classList.add("homepage-secondary-text");
      td3.classList.add("homepage-secondary-text");
      td3.classList.add("name-search");
      td2.classList.add("homepage-primary-text");
      td4.classList.add("homepage-primary-text");
      td5.classList.add("homepage-secondary-text");
      td6.classList.add("homepage-secondary-text");
    }
  });

searchInput.addEventListener("keyup", function () {
  var value = this.value.toLowerCase();
  let myTable = document.querySelector(".userdata-table");
  let tr = myTable.getElementsByTagName("tr");
  for (var i = 0; i < tr.length; i++) {
    let td = tr[i].getElementsByTagName("td")[2];
    if (td) {
      let textValue = td.textContent;
      if (textValue.toLowerCase().indexOf(value) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
  console.log(value);
});

function clearData() {
  searchInput.value = null;
  let myTable = document.querySelector(".userdata-table");
  let tr = myTable.getElementsByTagName("tr");
  for (var i = 0; i < tr.length; i++) {
    tr[i].style.display = "";
  }
}
logout.addEventListener("click", function (e) {
  e.preventDefault();
  window.location.replace("../login.html");
});
