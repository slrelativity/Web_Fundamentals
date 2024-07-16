function logoff(elem) {
        elem.innerText ="Logout";
    }

function hide(grbtn){
    grbtn.remove()
}

function increaseCounter() {
    var currentCount = parseInt(document.getElementById('counter').innerText);
    var newCount = currentCount + 1;
    var howmany = "";
    document.getElementById('counter').innerText = newCount + howmany;
}

function increaseCounter1() {
    var currentCount = parseInt(document.getElementById('counter1').innerText);
    var newCount = currentCount + 1;
    var howmany = "";
    document.getElementById('counter1').innerText = newCount + howmany;
}