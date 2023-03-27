var swiper = new Swiper(".mySwiper_1", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper = new Swiper(".mySwiper_avatar", {
  slidesPerView: 2,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // loop: true,
  // autoplay: {
  //   delay: 3000,
  // },
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    "@0.75": {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    "@1.00": {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    "@1.50": {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});

// CARD

var swiper = new Swiper(".mySwiper_2", {
  effect: "cards",
  grabCursor: true,
});

// nav bar dropdonwlist

const navDrop = document.getElementById("navDrop");
const navDropInner = document.getElementById("navDropInner");

navDrop.addEventListener("click", function () {
  navDropInner.classList.toggle("hidden");
});

document.addEventListener("click", function (event) {
  const isClickInsideNavDrop = navDrop.contains(event.target);
  const isClickInsideNavDropInner = navDropInner.contains(event.target);
  if (!isClickInsideNavDrop && !isClickInsideNavDropInner) {
    navDropInner.classList.add("hidden");
  }
});

// avatar hover
const avatarDivs = document.querySelectorAll(".avatar_swiper");

avatarDivs.forEach((avatarDiv) => {
  const myHiddenDiv = avatarDiv.querySelector(".avatar_text");

  avatarDiv.addEventListener("mouseover", () => {
    myHiddenDiv.classList.remove("hidden");
    avatarDiv.classList.add("border-2");
  });

  avatarDiv.addEventListener("mouseout", () => {
    myHiddenDiv.classList.add("hidden");
    avatarDiv.classList.remove("border-2");
  });
});
