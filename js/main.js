const header = document.querySelector(".header");
const nav = document.querySelector(".nav");
const burger = document.querySelector(".burger");
const navLinks = document.querySelectorAll(".nav__link");
const headerNav = document.querySelector(".header__nav");

burger.addEventListener("click", function () {
  burger.classList.toggle("burger_active");
  nav.classList.toggle("nav_active");
  if (burger.classList.contains("burger_active")) {
    header.classList.add("header_active");
    // nav.style.paddingTop = header.offsetHeight + "px";
    // disableScroll();
    const mediaQuery = window.matchMedia("(max-width: 575px)");
    if (mediaQuery.matches) {
      nav.append(burger);
      // alert('Media Query Matched!')
    } else {
      // headerNav.append(burger)
    }
  } else {
    headerNav.append(burger);
    // nav.style.paddingTop = "";
    setTimeout(() => {}, 300);
    header.classList.remove("header_active");
    // enableScroll();
  }
  for (let i = 0; i < navLinks.length; i++) {
    const navLink = navLinks[i];
    navLink.addEventListener("click", function () {
      burger.classList.remove("burger_active");
      nav.classList.remove("nav_active");
    });
  }
});

const disableScroll = () => {
  const fixBlocks = document?.querySelectorAll(".fixed-block");
  const pagePosition = window.scrollY;
  const paddingOffset = `${window.innerWidth - document.body.offsetWidth}px`;

  document.documentElement.style.scrollBehavior = "none";
  fixBlocks.forEach((el) => {
    el.style.paddingRight = paddingOffset;
  });
  document.body.style.paddingRight = paddingOffset;
  document.body.classList.add("dis-scroll");
  document.body.dataset.position = pagePosition;
  document.body.style.top = `-${pagePosition} px`;
};

const enableScroll = () => {
  const fixBlocks = document?.querySelectorAll(".fixed-block");
  const pagePosition = parseInt(document.body.dataset.position, 10);
  fixBlocks.forEach((el) => {
    el.style.paddingRight = "0px";
  });
  document.body.style.paddingRight = "0px";

  document.body.style.top = "auto";
  document.body.classList.remove("dis-scroll");
  window.scroll({
    top: pagePosition,
    left: 0,
  });
  document.body.removeAttribute("data-position");
  // document.documentElement.style.scrollBehavior = 'smooth';
};

// const mediaQuery = window.matchMedia('(max-width: 575px)')
// if (mediaQuery.matches && burger.classList.contains("burger_active")) {
//     nav.append(burger)
//     // alert('Media Query Matched!')
// } else {
//     headerNav.append(burger)
// }

const mediaQueryMinWidth_576 = window.matchMedia("(min-width: 576px)");
mediaQueryMinWidth_576.addEventListener("change", (e) => {
  if (e.matches) {
    headerNav.append(burger);
    return true;
  } else {
    if (burger.classList.contains("burger_active")) {
      nav.append(burger);
    }
  }
  return false;
});
