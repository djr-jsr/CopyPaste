// content.js
// console.log("Hi");
// chrome.runtime.onMessage.addListener(
  // function(request, sender, sendResponse) {
  	// document.body.style.backgroundColor="green";
  	document.addEventListener("paste", function (event) {
	    event.stopPropagation();
	}, true);
	document.addEventListener("copy", function (event) {
	    event.stopPropagation();
	}, true);
	document.addEventListener("cut", function (event) {
	    event.stopPropagation();
	}, true);
	document.addEventListener("contextmenu", function(event){
        event.stopPropagation();
	}, true);
  // }
// );