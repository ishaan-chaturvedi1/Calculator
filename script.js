let display_text = "";

let rows = document.querySelectorAll(".row button");
rows.forEach(i => {
    i.addEventListener("click", (e)=> {
        try{
            if (i.innerHTML == "="){
                display_text = eval(display_text)
                document.querySelector("input").value = display_text;
            }
            else if (i.innerHTML == "C"){
                display_text = "";
                document.querySelector("input").value = display_text;
            }
            else{
                display_text = display_text + i.innerHTML
                document.querySelector("input").value = display_text;
            } 
        }catch{
            display_text = "Error"
            document.querySelector("input").value = display_text;
        }                  
    })
});