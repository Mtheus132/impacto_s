document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("mobile-menu-button");
    const mobileMenu = document.getElementById("mobile-menu");
    const menuIcon = document.getElementById("mobile-menu-icon");


    console.log("Meu JS está funcionando")
    // Verifica se os elementos existem na página
    if (!menuButton || !mobileMenu || !menuIcon) {
        return;
    }

    // Abre o menu mobile
    function openMenu() {
        mobileMenu.classList.add("is-open");

        menuButton.setAttribute("aria-expanded", "true");
        menuButton.setAttribute("aria-label", "Fechar menu");
        mobileMenu.setAttribute("aria-hidden", "false");

        menuIcon.textContent = "close";

        document.body.classList.add("overflow-hidden");
    }

    // Fecha o menu mobile
    function closeMenu() {
        mobileMenu.classList.remove("is-open");

        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Abrir menu");
        mobileMenu.setAttribute("aria-hidden", "true");

        menuIcon.textContent = "menu";

        document.body.classList.remove("overflow-hidden");
    }

    // Alterna entre abrir e fechar
    function toggleMenu() {
        const isOpen = mobileMenu.classList.contains("is-open");

        if (isOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    }

    // Clique no botão de três tracinhos
    menuButton.addEventListener("click", function (event) {
        event.stopPropagation();
        toggleMenu();
    });

    // Fecha o menu ao clicar em qualquer link
    const mobileLinks = mobileMenu.querySelectorAll("a");

    mobileLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            closeMenu();
        });
    });

    // Fecha ao clicar fora do menu
    document.addEventListener("click", function (event) {
        const clickedInsideMenu = mobileMenu.contains(event.target);
        const clickedButton = menuButton.contains(event.target);

        if (
            mobileMenu.classList.contains("is-open") &&
            !clickedInsideMenu &&
            !clickedButton
        ) {
            closeMenu();
        }
    });

    // Fecha ao pressionar ESC
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            closeMenu();
        }
    });

    // Fecha ao mudar para a versão desktop
    window.addEventListener("resize", function () {
        if (window.innerWidth >= 768) {
            closeMenu();
        }
    });
});