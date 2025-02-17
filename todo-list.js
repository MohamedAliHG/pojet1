const content=document.querySelector("#content");
const nom=document.querySelector("#name");
const Add=document.querySelector("button");
const list=document.querySelector("ul");

Add.addEventListener("click", function(event) {
    event.preventDefault();

    let n=nom.value;
    let c=content.value;
    
    const li=document.createElement("li");
    const button=document.createElement("button");
    
    li.textContent=n+':'+c;
    nom.value="";
    content.value="";
    
    button.style.marginLeft="10px";
    button.textContent="Delete";

    li.classList.add("listyle");
    li.appendChild(button);
    list.appendChild(li);
    
    button.addEventListener("click", function() {
        li.remove(); 
    });  
});
