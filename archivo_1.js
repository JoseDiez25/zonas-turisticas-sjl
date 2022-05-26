var imgs=new Array("img/cultual.jpg", "img/SJL.png", "img/sjl2.jpg", "img/SJL3.jfif");
var c=0
function carrusel(){
    c++;
    if(c>=4){c=0;}
    document.getElementById("imgcab").setAttribute("src", imgs[c]);
    
    setTimeout("carrusel()", 2000);
}



function parpadear(){
    let r=Math.floor(Math.random()*256);  //Devolver un valor aleatorio entre el 0 y el 255
    let g=Math.floor(Math.random()*256);
    let b=Math.floor(Math.random()*256);

    document.getElementById("h1cab").style.color="rgb("+r+","+g+","+b+")";  //rgb(r,g,b)
    setTimeout("parpadear()", 1000);
}

function fade(){
    document.getElementById("imgcab").style.opacity="0";
    document.getElementById("imgcab").style.transition="all 1s ease";
    setTimeout("fadeOut()", 1000);
}

function fadeOut(){
    document.getElementById("imgcab").style.opacity="1";
    document.getElementById("imgcab").style.transition="all 1s ease";
    setTimeout("fade()", 1000);
}
fadeOut();    
parpadear();
carrusel();