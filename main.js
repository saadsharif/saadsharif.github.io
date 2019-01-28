
// stupid function used for home buttons, to go to main page

function goHome(){
    window.location.href = "index.html"
}


// function used to change colour scheme of main page, by switching css stylesheets

var swish = 0;

function colourSwitch(){
    if(swish == 0){
        document.getElementById("toggleStyle").setAttribute("href", "css/light.css");
        document.getElementById("YEET").setAttribute("src", "images/tree.png");
        swish = 1;
    } else if(swish == 1){
        document.getElementById("toggleStyle").setAttribute("href", "css/main.css");
        document.getElementById("YEET").setAttribute("src", "images/treeInv.png");
        swish = 0;
    }
}
