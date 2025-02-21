document.addEventListener("DOMContentLoaded", function () {
    // Revelar secciones al hacer scroll
    const sections = document.querySelectorAll(".section");

    function revealSections() {
        const windowHeight = window.innerHeight;
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < windowHeight - 50) {
                section.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", revealSections);
    revealSections(); // Ejecutar en la carga inicial

    // Menú hamburguesa con animación y cierre al seleccionar
    const menuToggle = document.querySelector(".menu-toggle");
    const navUl = document.querySelector("nav ul");
    const navLinks = document.querySelectorAll("nav ul li a");

    menuToggle.addEventListener("click", () => {
        navUl.classList.toggle("active");
    });

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navUl.classList.remove("active");
        });
    });

    // Animación del logo al entrar en viewport
    const heroSection = document.querySelector(".hero");
    const logo = document.querySelector(".hero .logo");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                logo.style.animation = "none";
                void logo.offsetWidth; // Forzar reflow
                logo.style.animation = "fadeIn 1.5s ease-in-out";
            }
        });
    }, { threshold: 0.5 });

    observer.observe(heroSection);

    // Animación fadeInUp para ítems de about y areas
    const aboutItems = document.querySelectorAll(".about .item");
    const areasItems = document.querySelectorAll(".areas ul li");

    aboutItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.2 + 0.2}s`;
        item.style.animation = "fadeInUp 1s ease forwards";
    });

    areasItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1 + 0.1}s`;
        item.style.animation = "fadeInUp 0.8s ease forwards";
    });
});