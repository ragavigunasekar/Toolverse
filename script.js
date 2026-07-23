document.getElementById("searchBox").addEventListener("keyup", function(){

    let value=this.value.toLowerCase();

    document.querySelectorAll(".tool-card").forEach(card=>{

        let text=card.innerText.toLowerCase();

        if(text.includes(value))
            card.style.display="block";
        else
            card.style.display="none";

    });

});