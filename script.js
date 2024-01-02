var topMost = 1;

function openApp(app) {
    var text = document.getElementById(`${app}-content`);
    text.style.display = "block";
    text.style.zIndex = ++topMost;
}

function closeApp(app) {
    var text = document.getElementById(`${app}-content`);
    text.style.display = "none";
}

function taskbarOpen(item) {
    var x = document.getElementById(`${item}-content`)
    if (x.style.display == "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
    var blocker = document.getElementById("blocker");
    blocker.style.display = "block";
}

function hideTaskPop() {
    var blocker = document.getElementById("blocker");
    blocker.style.display = "none";
    var x = document.getElementById("corner-content");
    x.style.display = "none";
    x = document.getElementById("network-content");
    x.style.display = "none";
}

function bringFront(item) {
    var x = document.getElementById(`${item}-content`);
    x.style.zIndex = ++topMost;
}

function showInfo(show) {
    var text = document.getElementById(`${show}-info`);
    document.getElementById('blackout').style.display = "flex";
    text.style.display = "block";
}

function closeInfo(show) {
    var text = document.getElementById(`${show}-info`);
    document.getElementById('blackout').style.display = "none";
    text.style.display = "none";
}

function sendMail() {
    window.open('mailto:aangelahuang05@gmail.com');
}