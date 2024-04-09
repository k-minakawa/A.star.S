const ham = document.querySelector("#js_hamburger");
const nav = document.querySelector("#js_nav");
const btn = document.querySelector("#js_btn");

ham.addEventListener("click", function () {
  ham.classList.toggle("active");
  nav.classList.toggle("active");
  btn.classList.toggle("active");
  return false;
});

///クリックしたら消えるようにする///
const navLinks = document.querySelectorAll(".nav-items");
navLinks.forEach((navLink) => {
  navLink.addEventListener("click", () => {
    ham.classList.remove("active");
    nav.classList.remove("active");
    btn.classList.remove("active");
  });
});

jQuery(function () {
  var footer = $(".member_joining").innerHeight(); // footerの高さを取得

  window.onscroll = function () {
    var point = window.scrollY; // 現在のスクロール地点
    var docHeight = $(document).height(); // ドキュメントの高さ
    var dispHeight = $(window).height(); // 表示領域の高さ

    if (point > docHeight - dispHeight - footer) {
      // スクロール地点>ドキュメントの高さ-表示領域-footerの高さ
      $(".u_contact-btn").addClass("is-hidden"); //footerより下にスクロールしたらis-hiddenを追加
    } else {
      $(".u_contact-btn").removeClass("is-hidden"); //footerより上にスクロールしたらis-hiddenを削除
    }
  };
});
