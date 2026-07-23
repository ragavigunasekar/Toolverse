/* ==========================================
   ToolVerse v3
   Theme Manager
========================================== */

const STORAGE_KEY = "toolverse-theme";

document.addEventListener("DOMContentLoaded", () => {

    loadTheme();

    const toggle = document.getElementById("themeToggle");

    if(toggle){

        toggle.addEventListener("click", toggleTheme);

    }

});

/* ===========================
   Toggle Theme
=========================== */

function toggleTheme(){

    document.body.classList.toggle("dark");

    const isDark = document.body.classList.contains("dark");

    localStorage.setItem(STORAGE_KEY, isDark ? "dark" : "light");

    updateThemeButton();

}

/* ===========================
   Load Theme
=========================== */

function loadTheme(){

    const savedTheme = localStorage.getItem(STORAGE_KEY);

    if(savedTheme === "dark"){

        document.body.classList.add("dark");

    }

    updateThemeButton();

}

/* ===========================
   Update Button
=========================== */

function updateThemeButton(){

    const button = document.getElementById("themeToggle");

    if(!button) return;

    if(document.body.classList.contains("dark")){

        button.innerHTML = "☀️ Light";

    }

    else{

        button.innerHTML = "🌙 Dark";

    }

}