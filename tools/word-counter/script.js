const text=document.getElementById("text");

text.addEventListener("input",()=>{

const value=text.value.trim();

const words=value?value.split(/\s+/).length:0;

const characters=text.value.length;

const sentences=value?value.split(/[.!?]+/).filter(Boolean).length:0;

const reading=Math.ceil(words/200);

document.getElementById("words").innerText=words;

document.getElementById("characters").innerText=characters;

document.getElementById("sentences").innerText=sentences;

document.getElementById("reading").innerText=reading+" min";

});