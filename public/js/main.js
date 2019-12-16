function toggle() {
    document.getElementById("nav-toggler").classList.toggle("fa-times");
    document.getElementById("nav-toggler").classList.toggle("fa-bars");
    document.getElementById("sidebar").classList.toggle("active");
}

var openMenu = document.getElementById('nav-toggler');
openMenu.addEventListener("click", toggle);