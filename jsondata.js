fetch('./product.json')
    .then(function (response){
        return response.json();
    })
        .then(function (data){
            for(var i=0; i <data.length; i++){
                document.getElementById("product-data").innerHTML +=
                data[i].id + "=>" + data[i].name;
            }
        })
        .catch(function (err){
            console.log(err);
        })