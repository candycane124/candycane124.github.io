window.onload = init;

function init() {
    let elem = document.getElementById('screen');
    let tabs = document.querySelectorAll(".tab");

    tabs.forEach(function(div) {
        let x = 0, y = 0, mousedown = false;

        div.addEventListener('mousedown', function(e) {
            mousedown = true;
            x = div.parentNode.offsetLeft - e.clientX;
            y = div.parentNode.offsetTop - e.clientY;
            div.parentNode.style.zIndex = ++topMost;
            e.preventDefault();
        }, true);       

        document.addEventListener('mouseup', function (e) {
            mousedown = false;
        }, true);
        
        elem.addEventListener('mousemove', function (e) {
            if (mousedown) {
                div.parentNode.style.left = e.clientX + x + 'px';
                div.parentNode.style.top = e.clientY + y + 'px';
            }
        })
    });
}

// function init() {
//     let elem = document.getElementById('screen');
//     var div = document.getElementById('settings-content');
//     var x = 0, y = 0, mousedown = false;

//     div.addEventListener('mousedown', function (e) {
//         console.log("clicked");
//         mousedown = true;
//         x = div.offsetLeft - e.clientX;
//         y = div.offsetTop - e.clientY;
//         e.preventDefault();
//     }, true);
    
//     document.addEventListener('mouseup', function (e) {
//         mousedown = false;
//     }, true);
    
//     elem.addEventListener('mousemove', function (e) {
//         if (mousedown) {
//             console.log("move?")
//             div.style.left = e.clientX + x + 'px';
//             div.style.top = e.clientY + y + 'px';
//         }
//     }, true);
// }
