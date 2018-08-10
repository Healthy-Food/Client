$(function(){
    
    var row = $('#row')
    var food = $("input")
    
    food.keyup( function(){
        var foodQ = $(this).val()
        if(foodQ.length <= 5){
            $.ajax({
                method: "GET",
                url: `https://recipepuppyproxy.herokuapp.com/api/?i=${foodQ}`
            })
            .done(function( foods ) {
                let foodObj = JSON.parse(foods)
                let resObj = foodObj.results
                    content = ''
                resObj.forEach(foodResult => {
    
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
                                
                                    </p>
    
                                </div>
                                </div>
                            </div>
                            `
                        content += htmlForNewRecipe
    
                });
                row.html(content)
                
            })
            .fail(function(err) {
                console.log('err---', (err))
            })
        }
                          
    })    
})

