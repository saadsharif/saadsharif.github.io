


function goHome(){
    window.location.href = "index.html"
}

// window.onload = typeWriter();

var i = 0;
var txt = 'SAAD SHARIF'; /* The text */
var speed = 40; /* The speed/duration of the effect in milliseconds */

var quotes = ["gain knowledge", "gain power", "get money", "I ain't riding no waves. Too busy making my own waves"];
var quote = quotes[Math.floor(Math.random() * quotes.length)];

window.onload = function typeWriter() {
    
    if (i < quote.length) {
        document.getElementById("insp").innerHTML += quote.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

// function treeInsp(){
    //     var element = document.getElementById("insp").innerHTML;
    //     var randQ = quotes[Math.floor(Math.random * quotes.length)];
    
    //     typeWriter(randQ, element);
    // }
    
var sw = 0;


var bt = document.getElementById("blacktree");
var yt = document.getElementById("yellowtree");


bt.style.display = "block";

function colourSwitch(){
    if(sw == 0){
        document.getElementById("toggleStyle").setAttribute("href", "css/light.css");
        document.getElementById("YEET").setAttribute("src", "images/tree.png");
        sw = 1;
        // yt.style.display = "block";
        // bt.style.display = "none";
    } else if(sw == 1){
        document.getElementById("toggleStyle").setAttribute("href", "css/main.css");
        document.getElementById("YEET").setAttribute("src", "images/treeInv.png");
        sw = 0;
        // yt.style.display = "none";
        // bt.style.display = "block";
    }
    // } else if(document.body.style.backgroundColor == "#ffd700"){
    //     document.getElementById("toggleStyle").setAttribute("href", "css/main.css");
    //     prompt("noo");
    // }
}



function colourSwitchOld(){
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