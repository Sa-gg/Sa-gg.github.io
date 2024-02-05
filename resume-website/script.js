// SWITCH SECTION TAB FUNCTION
function toggleContent(page) {
    var contentSections = document.querySelectorAll(".content-section");

    contentSections.forEach((section) => {
      section.classList.remove("active");
    });

    if (page != 'experience') {
      document.getElementById('profile').classList.add('active');
    }

    if (page != profile) {
      document.querySelector('.about-me').style.display = 'none';
    } 

    document.getElementById(page).classList.add('active'); 
  
    if (page == 'profile') {
      document.querySelector('.about-me').style.display = 'flex';
    }

  }
      
// PROFILE PICTURE ANIMATION
document.addEventListener("DOMContentLoaded", function () {
    var profilePic = document.querySelector(".profile-pic");

    profilePic.addEventListener("mouseenter", function () {
      profilePic.src = "https://i.pinimg.com/736x/5d/d8/3d/5dd83d282c491314a81212a0fb4c1fa2.jpg"; 
      profilePic.style.transform = "rotateY(calc(360deg * 2))";
    });

    profilePic.addEventListener("mouseleave", function () {
      profilePic.src = "https://i.pinimg.com/736x/be/e9/48/bee948d69ba5a8aa32d5aa6ce81af029.jpg"; // Specify the path to your normal image
      profilePic.style.transform = "rotateY(0deg)";
    });
  });