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

function subscribe(){
    var elem = document.querySelector("#never-miss")
    elem.remove()
}