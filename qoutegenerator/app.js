document.addEventListener('DOMContentLoaded', function() { 
    const qoutes = document.querySelectorAll('.qoute')
    const button = document.querySelector("button")
    
    button.addEventListener("click", function() {
       let randomNum;
       do {
          randomNum = Math.floor(Math.random() * (qoutes.length));
          
          if (qoutes[randomNum].classList.contains("is-active")) {
             continue
          } else {
             break
          }
 
       } while (true)
       
       qoutes.forEach((e) => e.classList.remove("is-active"))
       qoutes[randomNum].classList.add("is-active")
 
    })
    
 });
 
 