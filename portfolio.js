//toggle icon navbar
let menuIcon=document.querySelector('#menu-icon');
let nav=document.querySelector('.navbar');

menuIcon.onclick=()=>{
  menuIcon.classList.toggle('bx-x');
  nav.classList.toggle('active');
}


let sections=document.querySelectorAll('section');
let navlink=document.querySelectorAll('header nav a');

window.onscroll=()=>{
    sections.forEach(sec =>{
        let top=window.scrollY;
        let offset=sec.offsetTop-100;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top>=offset && top<height+offset){
            navlink.forEach(links=>{
              links.classList.remove('active');
              document.querySelector('header nav a[href*='+id+']').classList.add('active');
            });
        }
    });
    //sticky header
  let header=document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);
  //remove toggle icon and navbar when click navbar links (scrolls)
  menuIcon.classList.remove('bx-x');
  nav.classList.remove('active');

}
function toggleReadMore() {
  const moreText = document.getElementById("more-text");
  const readMoreBtn = document.getElementById("read-more-btn");

  if (moreText.style.display === "none") {
    moreText.style.display = "inline";
    readMoreBtn.textContent = "Read Less";
  } else {
    moreText.style.display = "none";
    readMoreBtn.textContent = "Read More";
  }
}
function SendEmail(){
  
}
const roles = [
    "Full-Stack Developer",
    "React Developer",
    "Backend Engineer",
];

const textElement = document.getElementById("typing-text");

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
    const currentRole = roles[roleIndex];

    if (!deleting) {
        textElement.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentRole.length) {
            deleting = true;
            setTimeout(typeEffect, 1800); // Pause after typing
            return;
        }
    } else {
        textElement.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            deleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
        }
    }

    setTimeout(typeEffect, deleting ? 60 : 120);
}

typeEffect();
