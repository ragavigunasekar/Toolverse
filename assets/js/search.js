/* ==========================================
   ToolVerse v3
   Global Search Engine
========================================== */

const TOOLS = [

{
name:"Word Counter",
description:"Count words, characters, paragraphs and reading time.",
url:"tools/word-counter/"
},

{
name:"Character Counter",
description:"Count every character instantly.",
url:"tools/character-counter/"
},

{
name:"Password Generator",
description:"Generate secure passwords.",
url:"tools/password-generator/"
},

{
name:"Age Calculator",
description:"Calculate age from date of birth.",
url:"tools/age-calculator/"
},

{
name:"JSON Formatter",
description:"Beautify and validate JSON.",
url:"tools/json-formatter/"
}

];

document.addEventListener("DOMContentLoaded",()=>{

const search=document.getElementById("searchBox");

const results=document.getElementById("searchResults");

if(!search || !results) return;

search.addEventListener("input",()=>{

const value=search.value.trim().toLowerCase();

results.innerHTML="";

if(value===""){

results.style.display="none";

return;

}

const filtered=TOOLS.filter(tool=>

tool.name.toLowerCase().includes(value) ||

tool.description.toLowerCase().includes(value)

);

if(filtered.length===0){

results.style.display="block";

results.innerHTML=`
<div class="search-item">
No tools found.
</div>
`;

return;

}

results.style.display="block";

filtered.forEach(tool=>{

const item=document.createElement("a");

item.href=tool.url;

item.className="search-item";

item.innerHTML=`

<strong>${tool.name}</strong>

<br>

<small>${tool.description}</small>

`;

results.appendChild(item);

});

});

document.addEventListener("click",(e)=>{

if(!search.contains(e.target) && !results.contains(e.target)){

results.style.display="none";

}

});

});