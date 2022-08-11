fetch('./product.json')
    .then(function (response){
        return response.json();
    })
        .then(function (data){
            for(var i=0; i <data.length; i++){
                var table = document.getElementById('gable');
                var tr = document.createElement('tr');
                tr.innerHTML = '<td>' + data[i].id + '</td>' +
                    '<td>' + data[i].name + '</td>';
                table.appendChild(tr);
            }
        })
        .catch(function (err){
            console.log(err);
        })