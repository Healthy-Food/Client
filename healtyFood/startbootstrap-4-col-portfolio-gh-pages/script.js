$(function(){
    
    var row = $('#row')
    var btn = $('#food')
    var food = $('#food').val()
    
    btn.keyup(function(){
        $.ajax({
            method: "GET",
            url: `https://recipepuppyproxy.herokuapp.com/api/?q=${food}`
        })
        .done(function( foods ) {
            let foodObj = JSON.parse(foods)
            let resObj = foodObj.results
                console.log(resObj)
                content = ''
            resObj.forEach(foodResult => {
              let htmlForNewRecipe = `
            
              <div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">
                <div class="card h-100">
                  <a href="${foodResult.href}"><img class="card-img-top" src="${foodResult.thumbnail || 'http://via.placeholder.com/100x80'}" alt="food"></a>
                  <div class="card-body">
                    <h4 id="card-title">
                     ${foodResult.title}
                    </h4>
                    <p id="card-text">
                       ingredients : (${foodResult.ingredients})
                     </p>
                     <button type="submit">add</button>
                  </div>
                </div>
              </div>
              `
              content += htmlForNewRecipe
            });
            row.append(content)
        })
        .fail(function(err) {
            console.log('err---', JSON.stringify(err))
        })                  
    })    
})

