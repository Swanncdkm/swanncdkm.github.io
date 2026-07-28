document.addEventListener("DOMContentLoaded", function () {

    const burger = document.getElementById("burger");
    const navigation = document.getElementById("menu");

    if (burger && navigation) {
        burger.addEventListener("click", function () {
            navigation.classList.toggle("est-ouvert");
            const estOuvert = navigation.classList.contains("est-ouvert");
            burger.setAttribute("aria-expanded", estOuvert);
        });

        const liensDuMenu = navigation.querySelectorAll("a");
        liensDuMenu.forEach(function (lien) {
            lien.addEventListener("click", function () {
                navigation.classList.remove("est-ouvert");
                burger.setAttribute("aria-expanded", "false");
            });
        });
    }

    const spanAnnee = document.getElementById("annee");
    if (spanAnnee) {
        spanAnnee.textContent = new Date().getFullYear();
    }

    const formulaire = document.getElementById("formulaire-contact");
    const confirmation = document.getElementById("message-confirmation");

    if (formulaire && confirmation) {
        formulaire.addEventListener("submit", function () {
            confirmation.style.display = "block";
        });
    }

});
