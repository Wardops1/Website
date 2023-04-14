// main slider
var swiper = new Swiper(".mySwiper_main", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 10,
    stretch: 100,
    depth: 210,
    modifier: 2,
    slideShadows: true,
  },
  speed: 800,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

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
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

var swiper = new Swiper(".blog_swiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // loop: true,
  // autoplay: {
  //   delay: 1000,
  // },
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    "@0.75": {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    "@1.00": {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    "@1.50": {
      slidesPerView: 1,
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
const navDropClose = document.getElementById("navDropClose");
const serviceMobileDropdown = document.getElementById("serviceMobileDropdown");
const serviceMenuMobile = document.getElementById("serviceMenuMobile");

navDrop.addEventListener("click", function () {
  navDropInner.classList.toggle("hidden");
});
navDropClose.addEventListener("click", function () {
  navDropInner.classList.toggle("hidden");
});

serviceMobileDropdown.addEventListener("click", function () {
  serviceMenuMobile.classList.remove("hidden");
  serviceMobileDropdown.classList.add("pb-[300px]");
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

  avatarDiv.addEventListener("click", () => {
    myHiddenDiv.classList.remove("hidden");
    avatarDiv.classList.add("border-2");
  });

  document.addEventListener("click", (event) => {
    if (!avatarDiv.contains(event.target)) {
      myHiddenDiv.classList.add("hidden");
      avatarDiv.classList.remove("border-2");
    }
  });
});

// scroling tamp
function scrollBlog() {
  const targetElement = document.getElementById("blog_sc");
  targetElement.scrollIntoView({ behavior: "smooth" });
}

function scrollCareer() {
  const targetElement = document.getElementById("career_sc");
  targetElement.scrollIntoView({ behavior: "smooth" });
}

function scrollAvatar() {
  const targetElement = document.getElementById("avatar_sc");
  targetElement.scrollIntoView({ behavior: "smooth" });
}

function scrollServices() {
  const targetElement = document.getElementById("services_sc");
  targetElement.scrollIntoView({ behavior: "smooth" });
}
