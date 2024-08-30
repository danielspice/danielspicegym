const menu = document.querySelector("#menu-list");
const navLink = document.querySelector("#nav-mobile");

menu.addEventListener("click", (e) => {
  e.preventDefault();
//   console.log("daniel click the menu bar");
  navLink.classList.toggle("active");
});
