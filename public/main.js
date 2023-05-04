// var thumbUp = document.getElementsByClassName("fa-thumbs-up");
// var thumbDown = document.getElementsByClassName("fa-thumbs-down");
var trash = document.getElementsByClassName("fa-trash");




Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const recipeName = this.parentNode.parentNode.childNodes[1].innerText
        const description = this.parentNode.parentNode.childNodes[3].innerText
        const ingredients = this.parentNode.parentNode.childNodes[5].innerText
        fetch('recipes', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'recipeName': recipeName,
            'description': description,
            'ingredients': ingredients
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
