
const liste=document.querySelectorAll("li");

liste.forEach(element =>element.addEventListener("click",function(){
    element.style.color=`rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
}
));