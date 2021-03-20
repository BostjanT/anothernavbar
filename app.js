const burgerIcon = document.querySelector(".hamburger-icon");
const navList = document.querySelector(".nav-list");
const navListItems = document.querySelectorAll(".nav-list li");

burgerIcon.addEventListener("click", () => {
  navList.classList.toggle("show-nav");

  burgerIcon.classList.toggle("burger");

  navListItems.forEach((list, i) => {
    if (list.style.animation) {
      list.style.animation = "";
    } else {
      list.style.animation = `fadeLinks .3s ease-in forwards ${i / 7 + 0.3}s`;
    }
  });
});
