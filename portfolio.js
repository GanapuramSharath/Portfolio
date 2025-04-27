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

