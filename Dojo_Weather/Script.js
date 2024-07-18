/*document.addEventListener("DOMContentLoaded", function(){
    const accept = document.getElementById('accept');
    const cookieBanner = document.getElementById('cookie-banner') ;

    function hideCookieBanner(){
        cookieBanner.style.display = 'none';
    }
    accept.addEventListener('click' , function(){
        hideCookieBanner();
    });
});*/

function accept(){
    var elem = document.querySelector("footer")
    elem.remove()
}