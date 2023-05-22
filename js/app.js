// navbar
window.addEventListener("scroll", function () {
  var navbar = document.getElementById("navbar");
  if (window.pageYOffset > navbar.offsetTop) {
    navbar.classList.add("fixed");
  } else {
    navbar.classList.remove("fixed");
  }
});

// service scroll

const serviceScroll = document.getElementById("scrollServices");

function scrollServices() {
  const targetElement = document.getElementById("scrollServices");
  targetElement.scrollIntoView({
    behavior: "smooth",
  });
}

// main slider
var swiper = new Swiper(".mySwiper_main", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 120,
    modifier: 4,
    slideShadows: false,
  },
  spaceBetween: 30,
  speed: 800,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    dynamicMainBullets: 1,
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper = new Swiper(".mySwiper_1", {
  slidesPerView: 3,
  spaceBetween: 50,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// qa engeinering slider

var swiper = new Swiper(".mySwiper_Qa", {
  slidesPerView: 2,
  spaceBetween: 60,
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
const serviceMobileArow = document.getElementById("serviceMobileArow");
const serviceMobileArow_2 = document.getElementById("serviceMobileArow_2");

navDrop.addEventListener("click", function () {
  navDropInner.classList.toggle("hidden");
});

// service drop down

let clickCount = 0;
let delayTime = 100; // in milliseconds

serviceMobileDropdown.addEventListener("click", function () {
  clickCount++;

  if (clickCount % 2 === 1) {
    // First click: Show the menu after delayTime
    setTimeout(function () {
      serviceMenuMobile.classList.remove("hidden");
      serviceMobileDropdown.classList.add("mbServiceDrop");
      serviceMobileArow_2.classList.add("hidden");
      serviceMobileArow.classList.remove("hidden");
      serviceMenuMobile.style.transition =
        "opacity 0.5s ease-in-out, transform 0.5s ease-in-out";
      serviceMenuMobile.style.opacity = "1";
      serviceMenuMobile.style.transform = "translateY(10px)";
    }, delayTime);
  } else {
    // Second click: Hide the menu after delayTime
    setTimeout(function () {
      serviceMenuMobile.style.transition =
        "opacity 1s ease-in-out, transform 0.5s ease-in-out";
      serviceMenuMobile.style.opacity = "0";
      serviceMenuMobile.style.transform = "translateY(-50px)";
      setTimeout(function () {
        serviceMenuMobile.classList.add("hidden");
        serviceMobileArow_2.classList.remove("hidden");
        serviceMobileArow.classList.add("hidden");
        serviceMobileDropdown.classList.remove("mbServiceDrop");
      }, 500);
    }, delayTime);
  }
});

navDropClose.addEventListener("click", function () {
  navDropInner.classList.toggle("hidden");
  serviceMenuMobile.classList.add("hidden");
  serviceMobileDropdown.classList.remove("mbServiceDrop");
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

// slider hover

const sliderHoverDivs = document.querySelectorAll(".sliderHover");

sliderHoverDivs.forEach((sliderHoverDiv) => {
  const rightSighn = sliderHoverDiv.querySelector(".rightSign_none");

  sliderHoverDiv.addEventListener("mouseover", () => {
    rightSighn.classList.remove("hidden");
  });

  sliderHoverDiv.addEventListener("mouseout", () => {
    rightSighn.classList.add("hidden");
  });
});
