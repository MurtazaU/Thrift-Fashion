    var product =   [
    {
      "id": 1,
      "name": "Almond Toe Court Shoes, Patent Black",
      "category": "Womens Footwear",
      "price": 99.0,
      "stock": 5
    },
    {
      "id": 2,
      "name": "Suede Shoes, Blue",
      "category": "Womens Footwear",
      "price": 42.0,
      "stock": 4
    },
    {
      "id": 3,
      "name": "Leather Driver Saddle Loafers, Tan",
      "category": "Mens Footwear",
      "price": 34.0,
      "stock": 12
    },
    {
      "id": 4,
      "name": "Flip Flops, Red",
      "category": "Mens Footwear",
      "price": 19.0,
      "stock": 6
    },
    {
      "id": 5,
      "name": "Flip Flops, Blue",
      "category": "Mens Footwear",
      "price": 19.0,
      "stock": 0
    },
    {
      "id": 6,
      "name": "Gold Button Cardigan, Black",
      "category": "Womens Casualwear",
      "price": 167.0,
      "stock": 6
    }

  ];

  for(var i = 0; i < product.length; i++){
    var div = document.createElement('div');
    div.innerHTML(' <div class="col-md-6 col-lg-4 col-xl-3"><div id="product-1" class="single-product"><div class="part-1"><ul><li><a href="#"><i class="fas fa-shopping-cart"></i></a></li> <li><a href="#"><i class="fas fa-heart"></i></a></li><li><a href="#"><i class="fas fa-plus"></i></a></li><li><a href="#"><i class="fas fa-expand"></i></a></li> </ul></div><div class="part-2"> <h3 class="product-title" id="productName">Here Product Title</h3> <h4 class="product-old-price">$79.99</h4> <h4 class="product-price">$49.99</h4></div></div></div>')
    document.getElementById("jsonCheck").appendChild(div);
  }
