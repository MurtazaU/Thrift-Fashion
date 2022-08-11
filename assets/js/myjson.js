fetch("./assets/js/product.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    for (var i = 0; i < data.length; i++) {
      var card = document.getElementById("json-card");
      document.getElementById("json-name").innerHTML = "hello";
      // img.innerHTML =
      //   "<td>" + data[i].id + "</td>" + "<td>" + data[i].name + "</td>";
      // table.appendChild(tr);
    }
  })
  .catch(function (err) {
    console.log(err);
  });
