const textSize=document.getElementById("size");
const textColor=document.getElementById("colorPicker");
const textfont=document.getElementById("police");

textSize.addEventListener("input",function(){
    let sizeValue = this.value + "px";
    document.getElementById("Text").style.fontSize=sizeValue;
})

textColor.addEventListener("input",function(){
    let colorValue = this.value;
    document.getElementById("Text").style.color=colorValue;
})

textfont.addEventListener("input",function(){
    let fontValue = this.value;
    document.getElementById("Text").style.fontFamily=fontValue;
})