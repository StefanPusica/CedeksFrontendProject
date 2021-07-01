 let nav = document.getElementById("nav-items");
 let burgerBtn = document.getElementById("burger-btn");
 let closeNavrBtn = document.getElementById("close-nav-btn");

burgerBtn.addEventListener('click', () => {
    nav.style.display = "block";
    closeNavrBtn.style.display = "block";
});

closeNavrBtn.addEventListener('click', () => {
    nav.style.transition = "1s ease in";
    nav.style.display = "none";
    closeNavrBtn.style.display = "none";
});