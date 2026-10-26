// =========================================
// MENU MOBILE
// =========================================

const menuMobile = document.getElementById("menuMobile");
const navLinks = document.getElementById("navLinks");

menuMobile.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    const menuAberto = navLinks.classList.contains("active");

    menuMobile.innerHTML = menuAberto ? "✕" : "☰";

    menuMobile.setAttribute(
        "aria-expanded",
        menuAberto
    );

});


// =========================================
// FECHAR MENU AO CLICAR EM UM LINK
// =========================================

const linksMenu = navLinks.querySelectorAll("a");

linksMenu.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuMobile.innerHTML = "☰";

        menuMobile.setAttribute(
            "aria-expanded",
            "false"
        );

    });

});


// =========================================
// FECHAR MENU AO AUMENTAR A TELA
// =========================================

window.addEventListener("resize", () => {

    if (window.innerWidth > 1000) {

        navLinks.classList.remove("active");

        menuMobile.innerHTML = "☰";

        menuMobile.setAttribute(
            "aria-expanded",
            "false"
        );

    }

});