var tableBody = document.querySelector("tbody");
let logout = document.querySelector("#logout");

fetch("https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      var tr = document.createElement("tr");
      tableBody.appendChild(tr);
      var td1 = document.createElement("td");
      var td2 = document.createElement("td");
      var td3 = document.createElement("td");
      var td4 = document.createElement("td");
      var td5 = document.createElement("td");

      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
      tr.appendChild(td4);
      tr.appendChild(td5);
      tr.classList.add("orderList");

      td1.textContent = data[i].id;
      td2.textContent = data[i].customerName;
      td3.textContent = data[i].orderDate + data[i].orderTime;
      td4.textContent = data[i].amount;
      td5.textContent = data[i].orderStatus;
      td1.classList.add("homepage-secondary-text");
      td4.classList.add("homepage-seconday-text");
      td2.classList.add("homepage-primary-text");
      td3.classList.add("homepage-primary-text");
      td5.classList.add("homepage-primary-text");
      td5.classList.add("status");
    }
  });
const newCheckbox = document.querySelector("#new");
const orderPack = document.querySelector("#orderPacked");
const transit = document.querySelector("#transit");
const delivered = document.querySelector("#delivered");
let count = 100;
const counter = document.querySelector("#counter");

newCheckbox.addEventListener("click", function () {
  if (!newCheckbox.checked) {
    let tBody = document.querySelector("tbody");
    let tr = tBody.getElementsByTagName("tr");
    for (let i = 0; i < tr.length; i++) {
      var td = tr[i].getElementsByTagName("td")[4];
      if (td) {
        let textContent = td.textContent;
        if (textContent === "New") {
          tr[i].style.display = "none";
          count--;
        }
      }
    }
    counter.textContent = "Count:" + count;
  }
  if (newCheckbox.checked) {
    let tBody = document.querySelector("tbody");
    let tr = tBody.getElementsByTagName("tr");
    for (let i = 0; i < tr.length; i++) {
      var td = tr[i].getElementsByTagName("td")[4];
      if (td) {
        let textContent = td.textContent;
        if (textContent === "New") {
          tr[i].style.display = "";
          count++;
        }
      }
    }
    counter.textContent = "Count:" + count;
  }
});
orderPack.addEventListener("click", function () {
  if (!orderPack.checked) {
    let tBody = document.querySelector("tbody");
    let tr = tBody.getElementsByTagName("tr");
    for (let i = 0; i < tr.length; i++) {
      var td = tr[i].getElementsByTagName("td")[4];
      if (td) {
        let textContent = td.textContent;
        if (textContent === "Packed") {
          tr[i].style.display = "none";
          count--;
        }
      }
    }
    counter.textContent = "Count:" + count;
  }
  if (orderPack.checked) {
    let tBody = document.querySelector("tbody");
    let tr = tBody.getElementsByTagName("tr");
    for (let i = 0; i < tr.length; i++) {
      var td = tr[i].getElementsByTagName("td")[4];
      if (td) {
        let textContent = td.textContent;
        if (textContent === "Packed") {
          tr[i].style.display = "";
          count++;
        }
      }
    }
    counter.textContent = "Count:" + count;
  }
});

transit.addEventListener("click", function () {
  if (!transit.checked) {
    let tBody = document.querySelector("tbody");
    let tr = tBody.getElementsByTagName("tr");
    for (let i = 0; i < tr.length; i++) {
      var td = tr[i].getElementsByTagName("td")[4];
      if (td) {
        let textContent = td.textContent;
        if (textContent === "InTransit") {
          tr[i].style.display = "none";
          count--;
        }
      }
    }
    counter.textContent = "Count:" + count;
  }
  if (transit.checked) {
    let tBody = document.querySelector("tbody");
    let tr = tBody.getElementsByTagName("tr");
    for (let i = 0; i < tr.length; i++) {
      var td = tr[i].getElementsByTagName("td")[4];
      if (td) {
        let textContent = td.textContent;
        if (textContent === "InTransit") {
          tr[i].style.display = "";
          count++;
        }
      }
    }
    counter.textContent = "Count:" + count;
  }
});

delivered.addEventListener("click", function () {
  if (!delivered.checked) {
    let tBody = document.querySelector("tbody");
    let tr = tBody.getElementsByTagName("tr");
    for (let i = 0; i < tr.length; i++) {
      var td = tr[i].getElementsByTagName("td")[4];
      if (td) {
        let textContent = td.textContent;
        if (textContent === "Delivered") {
          tr[i].style.display = "none";
          count--;
        }
      }
    }
    counter.textContent = "Count:" + count;
  }
  if (delivered.checked) {
    let tBody = document.querySelector("tbody");
    let tr = tBody.getElementsByTagName("tr");
    for (let i = 0; i < tr.length; i++) {
      var td = tr[i].getElementsByTagName("td")[4];
      if (td) {
        let textContent = td.textContent;
        if (textContent === "Delivered") {
          tr[i].style.display = "";
          count++;
        }
      }
    }
    counter.textContent = "Count:" + count;
  }
});

logout.addEventListener("click", function (e) {
  e.preventDefault();
  window.location.replace("../login.html");
});
