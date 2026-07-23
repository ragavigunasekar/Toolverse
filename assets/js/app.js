/* ==========================================
   ToolVerse v3
   assets/js/app.js
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    console.log("💜 ToolVerse Loaded");

    initializeSearch();
    initializeCards();
    initializeButtons();

});

/* ===========================
   Search
=========================== */

function initializeSearch() {

    const searchBox = document.getElementById("searchBox");

    if (!searchBox) return;

    searchBox.addEventListener("input", function () {

        const value = this.value.toLowerCase().trim();

        const tools = document.querySelectorAll(".tool");

        tools.forEach(tool => {

            const text = tool.innerText.toLowerCase();

            if (text.includes(value)) {

                tool.style.display = "block";

            } else {

                tool.style.display = "none";

            }

        });

    });

}

/* ===========================
   Cards
=========================== */

function initializeCards() {

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.style.transform = "translateY(-10px)";
            card.style.boxShadow = "0 20px 50px rgba(124,58,237,.20)";

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform = "";
            card.style.boxShadow = "";

        });

    });

}

/* ===========================
   Buttons
=========================== */

function initializeButtons() {

    const buttons = document.querySelectorAll(".btn");

    buttons.forEach(button => {

        button.addEventListener("mousedown", () => {

            button.style.transform = "scale(.96)";

        });

        button.addEventListener("mouseup", () => {

            button.style.transform = "";

        });

        button.addEventListener("mouseleave", () => {

            button.style.transform = "";

        });

    });

}

/* ===========================
   Copy Text
=========================== */

function copyText(text) {

    navigator.clipboard.writeText(text);

}

/* ===========================
   Download File
=========================== */

function downloadFile(filename, content) {

    const blob = new Blob([content], {
        type: "text/plain"
    });

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");

    a.href = url;
    a.download = filename;

    document.body.appendChild(a);

    a.click();

    a.remove();

    URL.revokeObjectURL(url);

}

/* ===========================
   Utility
=========================== */

function byId(id) {

    return document.getElementById(id);

}

function qs(selector) {

    return document.querySelector(selector);

}

function qsa(selector) {

    return document.querySelectorAll(selector);

}