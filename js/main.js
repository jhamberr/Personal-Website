// select the menu icon class in the html so everything in it
let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.navbar');


menu.onclick = () => {

    navbar.classList.toggle("open-menu");
    // on click you will activate the move class in the css for each line
    menu.classList.toggle("move");
};
window.onscroll = () => {
    navbar.classList.remove("open-menu");
    // on click you will activate the move class in the css for each line
    menu.classList.remove("move");
}

//Reviews Swiper
var swiper = new Swiper(".reviews-content", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      //this determines if the autoplay will stop when you interact with the swiper
      disableOnInteraction: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

//   Email JS
function validate() {
    let name = document.querySelector(".name");
    let email = document.querySelector(".email");
    let msg = document.querySelector(".message");
    let sendBtn = document.querySelector(".send-btn");

    sendBtn.addEventListener("click", (e) => {
        e.preventDefault();
        if(name.value == "" || email.value == "" || msg.value == ""  ){
            emptyerror();

        } else
        {
            sendmail(name.value, email.value, msg.value);
            success();
        }
    });
}
//call the function
validate();

function sendmail(name, email, msg) {
    emailjs.send("service_vy16gki","template_r0xdcsb",{
        from_name: email,
        to_name: name,
        message: msg,
        });
}

function emptyerror() {
    swal({
        title: "Error!",
        text: "Fields cannot be empty!",
        icon: "error",
      });
}
function success() {
    swal({
        title: "Email sent successfully!",
        text: "I will try to reply as soon as possible!",
        icon: "success",
      });
}
// Header Background change on scroll
let header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("header-active", window.scrollY > 0);  
});
//Scroll Top
let scrollTop = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {
    scrollTop.classList.toggle("scroll-active", window.scrollY >= 400);  
});