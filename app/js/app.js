// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

document.addEventListener("DOMContentLoaded", () => {
  const targetElements = document.querySelectorAll(".feedback_header");
  const blocks = document.querySelectorAll(".feedback_header");

  targetElements.forEach((element, index) => {
    const elements = document.querySelectorAll(".image")[index];
    let isOpen = false;
    element.addEventListener("click", function () {
      if (isOpen) {
        elements.style.transform = "none";
        isOpen = false;
      } else {
        elements.style.transform = "rotate(90deg)";
        isOpen = true;
      }
    });
  });

  blocks.forEach((element, index) => {
    const text = document.querySelectorAll(".feedback_add")[index];

    let isOpen = false;
    element.addEventListener("click", () => {
      if (isOpen) {
        text.style.display = "none";
        isOpen = false;
      } else {
        text.style.display = "block";
        isOpen = true;
      }
    });
  });
});

//burger

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("burger").addEventListener("click", () => {
    document.querySelector("header").classList.toggle("open");
  });
});
