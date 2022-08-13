$(document).ready(function (e) {
  jsonObject.products.forEach((i) => loadProducts(i));
});

function loadProducts(data) {
  var div = document.createElement("div");

  div.innerHTML =
    '<div class="col-md-3 col-sm-12 column">' +
    '<div class="product-grid">' +
    '<div class="product-image">' +
    '<a href="#" class="image">' +
    '<img class="pic-1" src="' +
    data.image +
    ' "/>' +
    "</a>" +
    '<span class="product-discount-label">' +
    data.discount +
    "</span>" +
    '<ul class="product-links">' +
    "<li>" +
    '<a href="#" data-tip="Add to Wishlist">' +
    '<i class="fas fa-heart"></i>' +
    "</a>" +
    "</li>" +
    "<li>" +
    '<a href="#" data-tip="Compare">' +
    '<i class="fa fa-random">' +
    "</i>" +
    "</a>" +
    "</li>" +
    "<li>" +
    '<a href="#" data-tip="Quick View">' +
    '<i class="fa fa-search">' +
    "</i>" +
    "</a>" +
    "</li>" +
    "</ul>" +
    '<a class="add-to-cart" type="button" href=""' +
    ">Add to cart</a>" +
    "</div>" +
    '<div class="product-content">' +
    '<ul class="rating">' +
    '<li class="fas fa-star"></li>' +
    '<li class="fas fa-star"></li>' +
    '<li class="fas fa-star"></li>' +
    '<li class="fas fa-star"></li>' +
    '<li class="fas fa-star"></li>' +
    "</ul>" +
    '<div class="price">$' +
    data.price +
    "</div>" +
    '<h4 class="title">' +
    '<a href="#">' +
    data.name;
  "</a>" + "</h4>" + "</div>" + "</div>" + "</div>";
  document.getElementById("product-json").appendChild(div);
}
