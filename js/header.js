const body = document.querySelector("body");
const header = document.querySelector(".header");
const btnSub = document.querySelector(".header__burger");
const navLinks = document.querySelector(".menu");
const orderButton = document.querySelector(".header__order-button");
const basket = document.querySelector(".basket-container");
const linkList = document.querySelectorAll(".menu__item-link");

let initLoad = false;

linkList.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const id = e.target.getAttribute("data-id");
    const windowHref = new URL(window.location.href).pathname;

    if (windowHref === "/" && id === "contacts") {
      window.location.href = `/${id}`;
    }

    if (id !== "contacts") {
      window.location.href = `/#${id}`;
    }
  });
});

btnSub.addEventListener("click", showMenu);

[navLinks, orderButton, basket].forEach(node => {
  node.addEventListener("click", hideMenu);
});

function showMenu() {
  body.classList.add("overflow-hidden");
  header.classList.add("nav-visible");
}

function hideMenu() {
  body.classList.remove("overflow-hidden");
  header.classList.remove("nav-visible");
}

if (!initLoad) {
  const id = window.location.hash.slice(1);
  const link = document.getElementById(id);

  if (link) {
    link.scrollIntoView({ behavior: "smooth" });
  }

  initLoad = true;
}
