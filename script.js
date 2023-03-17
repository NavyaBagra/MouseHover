function changeTextColor(object) {
    if (object.style.color == 'coral') {
        object.style.color = 'black';
    } else {
        object.style.color = 'coral';
    }
}
function scaleUp(object, size) {
    object.style.fontSize = size;
}
 
function changeText(object, text) {
    object.innerText = text;
}
 

function changeBgColor(object, colorName) {
    object.style.backgroundColor = colorName;
}
function showRow() {
    var element = document.getElementById("show");
     
    if(element.style.visibility == "hidden"){
        //element.style.display = "block";
        element.style.visibility = "visible";
    } else {
        //element.style.display = "none";
        element.style.visibility = "hidden";
    }   
}