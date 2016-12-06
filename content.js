//for re-enabling 'paste'
document.addEventListener("paste", function (event) {
    event.stopPropagation();
}, true);

//for re-enabling 'copy'
document.addEventListener("copy", function (event) {
    event.stopPropagation();
}, true);

//for re-enabling 'cut'
document.addEventListener("cut", function (event) {
    event.stopPropagation();
}, true);

//for re-enabling 'right-clicks'
document.addEventListener("contextmenu", function(event){
    event.stopPropagation();
}, true);
