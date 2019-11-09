
var getNum = document.getElementById("half-input");
function halfNumber () { 
    alert(getNum.value/2);
    console.log("Half of", getNum.value ,"is", getNum.value/2);
}
document.getElementById("half-button").addEventListener("click", halfNumber);




var getName = document.getElementById("fortune-input") ;
var outList = ["A secret admirer will soon send you a sign of affection.", 
"Your heart is in a place to draw true happiness.", 
"A thrilling time is in your near future.", 
"The one you love is closer than you think.", 
"Plan for many pleasures ahead.", 
"Something you lost will turn up soon."]
document.getElementById("fortune-button").addEventListener("click", fortune);
var output = document.getElementById("fortune-output")

function fortune(){
    var outSectence = "Dear. " + getName.value +" 🐑 "+ outList[Math.floor (Math.random()* outList.length)];
    output.innerHTML= outSectence;

}



output.addEventListener("mouseover", restyle);
function restyle(){
    output.style.color ="rgb(255,0,0)";
    output.style.fontSize= "5rem";
    output.style.textShadow= " 5px 5px 5px green"
}