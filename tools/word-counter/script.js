/*
=========================================
ToolVerse - Word Counter
Version 1.0
=========================================
*/

const textArea = document.getElementById("text");

const wordsElement = document.getElementById("words");
const charactersElement = document.getElementById("characters");
const noSpacesElement = document.getElementById("spaces");
const paragraphsElement = document.getElementById("paragraphs");
const sentencesElement = document.getElementById("sentences");
const readingElement = document.getElementById("reading");

const copyBtn = document.getElementById("copyBtn");
const clearBtn = document.getElementById("clearBtn");
const downloadBtn = document.getElementById("downloadBtn");

/* ==============================
   Update Statistics
============================== */

function updateStats() {

    const text = textArea.value;

    const trimmed = text.trim();

    // Words
    const words = trimmed === ""
        ? 0
        : trimmed.split(/\s+/).length;

    // Characters
    const characters = text.length;

    // Characters without spaces
    const noSpaces = text.replace(/\s/g, "").length;

    // Paragraphs
    const paragraphs = trimmed === ""
        ? 0
        : trimmed
            .split(/\n+/)
            .filter(p => p.trim() !== "")
            .length;

    // Sentences
    const sentences = trimmed === ""
        ? 0
        : trimmed
            .split(/[.!?]+/)
            .filter(s => s.trim() !== "")
            .length;

    // Reading Time (200 WPM)
    const readingMinutes = words === 0
        ? 0
        : Math.max(1, Math.ceil(words / 200));

    // Update UI
    wordsElement.textContent = words;
    charactersElement.textContent = characters;
    noSpacesElement.textContent = noSpaces;
    paragraphsElement.textContent = paragraphs;
    sentencesElement.textContent = sentences;
    readingElement.textContent = readingMinutes + " min";
}

/* ==============================
   Live Count
============================== */

textArea.addEventListener("input", updateStats);

/* ==============================
   Copy
============================== */

copyBtn.addEventListener("click", async () => {

    try {

        await navigator.clipboard.writeText(textArea.value);

        copyBtn.textContent = "✅ Copied!";

        setTimeout(() => {

            copyBtn.textContent = "📋 Copy";

        }, 1500);

    } catch {

        alert("Copy failed.");

    }

});

/* ==============================
   Clear
============================== */

clearBtn.addEventListener("click", () => {

    textArea.value = "";

    updateStats();

    textArea.focus();

});

/* ==============================
   Download
============================== */

downloadBtn.addEventListener("click", () => {

    const blob = new Blob([textArea.value], {
        type: "text/plain"
    });

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");

    a.href = url;

    a.download = "toolverse-text.txt";

    a.click();

    URL.revokeObjectURL(url);

});

/* ==============================
   Initial Load
============================== */

updateStats();

console.log("💜 ToolVerse Word Counter Loaded");