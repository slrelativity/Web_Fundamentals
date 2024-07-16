function increaseCounter() {
    var currentCount = parseInt(document.getElementById('counter').innerText);
    var newCount = currentCount + 1 + " like(s) ";
    var howmany = "";
    document.getElementById('counter').innerText = newCount + howmany;
}