window.onload = function () {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.navbar .nav-item > .nav-link');
    const searchInput = document.getElementById('search-input');
    const menuBtn = document.getElementById("menu-btn");


    

    menuBtn.addEventListener("click", () => {

       
      if(navbar.classList.contains("bg-body-tertiary")) {
        navbar.classList.remove("bg-body-tertiary")
        navbar.classList.add("bg-transparent")

        navLinks.forEach(link => {

          link.style.color = "white"
        })

        searchInput.style.border = '3px solid white';
 
      } else {
        navbar.classList.remove('bg-transparent');
        navbar.classList.add('bg-body-tertiary');
  
        
        navLinks.forEach(link => {
          link.style.color = 'black';
        });
  
        searchInput.style.border = '3px solid orange';
      }


    



    })
  
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        navbar.classList.remove('bg-transparent');
        navbar.classList.add('bg-body-tertiary');
  
        navLinks.forEach(link => {
          link.style.color = 'black';
        });

        searchInput.style.border = '3px solid orange';
      } else {
        navbar.classList.remove('bg-body-tertiary');
        navbar.classList.add('bg-transparent');
  
        navLinks.forEach(link => {
          link.style.color = 'white';
        });

        searchInput.style.border = '3px solid white';
      }
    });
  };
  