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
    revealSections();

    // Menú hamburguesa con animación, cierre al seleccionar y botón "X"
    const menuToggle = document.querySelector(".menu-toggle");
    const navUl = document.querySelector("nav ul");
    const navLinks = document.querySelectorAll("nav ul li a");

    // Crear el botón "X" dinámicamente
    const closeMenu = document.createElement("button");
    closeMenu.textContent = "✕";
    closeMenu.classList.add("close-menu");
    navUl.appendChild(closeMenu);

    menuToggle.addEventListener("click", () => {
        navUl.classList.toggle("active");
    });

    closeMenu.addEventListener("click", () => {
        navUl.classList.remove("active");
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
                void logo.offsetWidth;
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

    // Botón flotante para volver arriba
    const scrollTopBtn = document.querySelector(".scroll-top-btn");

    if (!scrollTopBtn) {
        console.error("El botón .scroll-top-btn no se encontró en el DOM");
        return;
    }

    scrollTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // Mostrar/Ocultar botón según scroll
    function toggleScrollTopButton() {
        const scrollPosition = window.scrollY;
        const triggerPoint = 200; // Aparece después de bajar 200px (ajustable)

        if (scrollPosition > triggerPoint) {
            scrollTopBtn.classList.add("visible");
        } else {
            scrollTopBtn.classList.remove("visible");
        }
    }

    window.addEventListener("scroll", toggleScrollTopButton);
    toggleScrollTopButton(); // Chequeo inicial
});