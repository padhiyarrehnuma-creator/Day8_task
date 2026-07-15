// ===============================
// Mobile Hamburger Menu
// ===============================

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Close menu after clicking any link

const menuItems = document.querySelectorAll(".nav-links a");

menuItems.forEach((item) => {

    item.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});

// ===============================
// Active Navigation Link
// ===============================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navItems.forEach((link) => {

        link.classList.remove("active-link");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active-link");
        }

    });

});

// ===============================
// Smooth Scroll
// ===============================

navItems.forEach((link) => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({
            behavior: "smooth"
        });

    });

});