// MOBILE NAVIGATION

const menu = document.querySelector(".menu");
const navLinks = document.querySelector(".nav-links");

if (menu && navLinks) {
    menu.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        const icon = menu.querySelector("i");

        if (navLinks.classList.contains("active")) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");
        } else {
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
        }

    });

    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

            const icon = menu.querySelector("i");
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        });

    });
}


// STICKY HEADER SHADOW

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.15)";
    } else {
        header.style.boxShadow = "none";
    }

});


// VEHICLE SELECTION

const vehicleCards = document.querySelectorAll(".vehicle-card");

vehicleCards.forEach(card => {

    card.addEventListener("click", () => {

        vehicleCards.forEach(item => item.classList.remove("active"));

        card.classList.add("active");

    });

});


// BOOKING FORM

const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {

    bookingForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const pickup = document.getElementById("pickup").value.trim();
        const drop = document.getElementById("drop").value.trim();
        const date = document.getElementById("date").value;
        const time = document.getElementById("time").value;
        const name = document.getElementById("name").value.trim();
        const phone = document.getElementById("phone").value.trim();

        if (
            pickup === "" ||
            drop === "" ||
            date === "" ||
            time === "" ||
            name === "" ||
            phone === ""
        ) {
            alert("Please fill all the required fields.");
            return;
        }

        const popup = document.getElementById("successPopup");

        popup.classList.add("show");

        bookingForm.reset();

        vehicleCards.forEach(card => card.classList.remove("active"));

        if (vehicleCards.length > 0) {
            vehicleCards[0].classList.add("active");
        }

        setTimeout(() => {
            popup.classList.remove("show");
        }, 2500);

    });

}


// CONTACT FORM

const contactForm = document.getElementById("contactPageForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("Thank you! Your message has been sent successfully.");

        contactForm.reset();

    });

}