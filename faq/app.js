document.addEventListener("DOMContentLoaded",  function() {
    document.querySelectorAll('.question').forEach((e) => e.addEventListener("click", function() {
        const answer = e.nextElementSibling.nextElementSibling;
        answer.classList.toggle('show')
        e.querySelector(".btn").innerHTML = e.querySelector('.btn').innerHTML == "+" ? "-" : "+";         
    }))

})

