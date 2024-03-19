const ham = document.querySelector('#js_hamburger');
const nav = document.querySelector('#js_nav');
const btn = document.querySelector('#js_btn');

ham.addEventListener('click', function () {
  ham.classList.toggle('active');
  nav.classList.toggle('active');
  btn.classList.toggle('active');
  return false;
});

///クリックしたら消えるようにする///
const navLinks = document.querySelectorAll(".nav-items");
navLinks.forEach(navLink => {
    navLink.addEventListener("click", () => {
        ham.classList.remove("active");
        nav.classList.remove("active");
        btn.classList.remove('active');
    });
});