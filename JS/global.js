var langs=document.getElementById("langs");
setInterval(langButton,500);
function langButton(){
    // var scrollLeft = (window.pageXOffset !== undefined) ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft;
    var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    if (scrollTop > 100){
        langs.style="bottom:-100px;";
    } else{
        langs.style="bottom:5px;";
    }
}