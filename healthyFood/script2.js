$(function(){
  let addRecipe = $('button#add-recipe')
  let recipeName = $('#card-title').val()
  let ingredients = $('#card-text').val()


  // console.log($('#add-recipe').html())
  $('#add-recipe').on('click', function() {
    console.log(this)
  })


  addRecipe.click(function(){
    console.log(addRecipe).html;
    console.log('ke klik');
      console.log(recipeName, ingredients);
  })

})
