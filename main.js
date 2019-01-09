

// DO NOT NEED, DOn't know what to do with tree shit for now 

// function treeFunct(){
//     var password = prompt("Password: ", "Enter Password")
    
//     if(password == "killbill"){
//         txt =  "Correct";
//         window.location.href = "projectTree/roots.html"; 
//     }
//     else if(password != "killbill"){
//         txt = "Wrong Password."
//         window.alert(txt);
//     }
//     else{
//         txt = "error"
//         window.alert(txt);
//     }
// }

function goHome(){
    window.location.href = "index.html"
}

var i = 0;
var txt = 'SAAD SHARIF'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}


function colourSwitch(){
    // if (switch == 0){

    // }else if(switch == 1){

    // }
    document.body.style.background = "#ffd700";
    document.body.style.color = "#ffd700";
    
    
    // document.getElementsByTagName("a").style.color = "#222222";
    // var sel = document.getElementsByClassName(select);
    // sel.style.color = "#222222";
    
    
    // if(background-color == #ffd700){

    // }else if (){

    // }
    var x = document.getElementByClassName("heading");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }


        var x = document.getElementById("navlink");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    
}

function killbill(){
    window.location.href = "kilbil.html";
}
