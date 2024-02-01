document.addEventListener('DOMContentLoaded', function () {
    let btn = document.querySelector('button')
    let modal = document.querySelector('.modal-container')
    let exit = document.querySelector('.exit')


    btn.addEventListener('click', function() {
      modal.style.display = "block"
    })

    exit.addEventListener('click', function() {
      modal.style.display = "none"
    })


    window.addEventListener("click", function(e) {
      if (e.target === modal) {
        modal.style.display = "none"
      }
    })

    

});s