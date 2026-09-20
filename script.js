/* =========================================
   AL FARUQH CROCHET
   Script JavaScript principal
   ========================================= */

document.addEventListener("DOMContentLoaded", function () {

    // =========================================
    // NAVIGATION FLUIDE
    // =========================================

    const navigationLinks = document.querySelectorAll('a[href^="#"]');

    navigationLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (targetId === "#") {
                return;
            }

            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                event.preventDefault();

                targetSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });

    });


    // =========================================
    // BOUTONS "COMMANDER"
    // =========================================

    const orderButtons = document.querySelectorAll(".product-card .btn");

    orderButtons.forEach(function (button) {

        button.addEventListener("click", function (event) {

            const productCard = this.closest(".product-card");

            if (!productCard) {
                return;
            }

            const productNameElement = productCard.querySelector("h3");
            const priceElement = productCard.querySelector(".price");

            const productName = productNameElement
                ? productNameElement.textContent.trim()
                : "Sac au crochet";

            const price = priceElement
                ? priceElement.textContent.trim()
                : "Prix à définir";

            const message =
                "Bonjour Al Faruqh Crochet, je suis intéressée par le produit : " +
                productName +
                ". Prix indiqué : " +
                price +
                ".";

            // Numéro WhatsApp d'Al Faruqh Crochet
            const whatsappNumber = "221775106435";

            const whatsappUrl =
                "https://wa.me/" +
                whatsappNumber +
                "?text=" +
                encodeURIComponent(message);

            window.open(whatsappUrl, "_blank");

        });

    });


    // =========================================
    // ANIMATION DES CARTES PRODUITS
    // =========================================

    const productCards = document.querySelectorAll(".product-card");

    productCards.forEach(function (card, index) {

        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";

        setTimeout(function () {

            card.style.transition =
                "opacity 0.6s ease, transform 0.6s ease";

            card.style.opacity = "1";
            card.style.transform = "translateY(0)";

        }, 150 * index);

    });


    // =========================================
    // MESSAGE DE CONFIRMATION
    // =========================================

    console.log("Al Faruqh Crochet - Site chargé avec succès.");

});