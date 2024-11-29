const toggle = document.querySelector(".menu-btn");
const nav = document.querySelector(".menu");
const body = document.body;

toggle.addEventListener("click", () => {
  
  const isOpen = toggle.ariaExpanded === "true";
  const isClosed = !isOpen;
  console.log("isOpen : ", isOpen, "isClosed : ", isClosed);

  
  nav.setAttribute("aria-hidden", isClosed ? "false" : "true");
  toggle.setAttribute("aria-expanded", isClosed ? "true" : "false");

  body.classList.toggle("noscroll", isClosed);
});
