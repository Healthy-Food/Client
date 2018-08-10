$(function(){
    
    var row = $('#row')
    var food = $("input")
    
    food.keyup( function(){
        var foodQ = $(this).val()
        $.ajax({
            method: "GET",
            url: `https://recipepuppyproxy.herokuapp.com/api/?i=${foodQ}`
        })
        .done(function( foods ) {
            let foodObj = JSON.parse(foods)
            let resObj = foodObj.results
                content = ''
            resObj.forEach(foodResult => {
                let calQuery = (foodResult.title.split(' ').splice(0,3).join('%20'));
                $.ajax({
                    method: "GET",
                    url: `https://api.edamam.com/search?q=${calQuery}&app_id=5fd948d1&app_key=318cafee18a0d2b6621d40b39e885a29&from=0&to=3`
                })
                .done(result=>{
                    let calories = Math.round(result.hits[0].recipe.calories)
                    console.log('KALORI',calories);
                    let htmlForNewRecipe = `
            
                        <div class="gallery">
                            <div class="card h-100">
                            <a href="${foodResult.href}"><img class="card-img-top" src="${foodResult.thumbnail || 'http://via.placeholder.com/100x80'}" alt="food"></a>
                            <div class="card-body">
                                <h4 id="card-title">
                                ${foodResult.title}
                                </h4>
                                <p id="card-text">
                                ingredients : ${foodResult.ingredients}
                                calories : ${calories} kcal
                                </p>

                            </div>
                            </div>
                        </div>
                        `
                    content += htmlForNewRecipe
                })
                .fail(err =>{
                    let calories = 'Data not available'
                    let htmlForNewRecipe = `
            
                        <div class="gallery">
                            <div class="card h-100">
                            <a href="${foodResult.href}"><img class="card-img-top" src="${foodResult.thumbnail || 'http://via.placeholder.com/100x80'}" alt="food"></a>
                            <div class="card-body">
                                <h4 id="card-title">
                                ${foodResult.title}
                                </h4>
                                <p id="card-text">
                                ingredients : ${foodResult.ingredients}
                                calores : ${calories}
                                </p>

                            </div>
                            </div>
                        </div>
                        `
                    content += htmlForNewRecipe
                })
            });
            row.html(content)
            
        })
        .fail(function(err) {
            console.log('err---', (err))
        })                  
    })    
})

