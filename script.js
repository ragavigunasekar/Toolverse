/*
=========================================
ToolVerse v2
Main JavaScript
=========================================
*/

const searchBox = document.getElementById("searchBox");

if (searchBox) {

    searchBox.addEventListener("keyup", function () {

        const value = this.value.toLowerCase().trim();

        const cards = document.querySelectorAll(".tool-card");

        cards.forEach(card => {

            const text = card.innerText.toLowerCase();

            if (text.includes(value)) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

}


/* ===========================
   Smooth Scroll
=========================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});


/* ===========================
   Category Hover Animation
=========================== */

const categories = document.querySelectorAll(".category");

categories.forEach(category => {

    category.addEventListener("mouseenter", () => {

        category.style.transform = "translateY(-12px) scale(1.03)";

    });

    category.addEventListener("mouseleave", () => {

        category.style.transform = "translateY(0px) scale(1)";

    });

});


/* ===========================
   Tool Card Animation
=========================== */

const cards = document.querySelectorAll(".tool-card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.boxShadow = "0 25px 50px rgba(124,58,237,.25)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.boxShadow = "";

    });

});


/* ===========================
   Welcome Message
=========================== */

console.log(
`
💜 Welcome to ToolVerse

The Internet's Toolbox

Version : 2.0
Founder : Ragavi G

Build something people love.
`
);