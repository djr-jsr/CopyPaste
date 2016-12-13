//gets activated on receiving a message from the background script
chrome.runtime.onMessage.addListener(receiver);

// Callback for when a message is received
function receiver(request, sender, sendResponse) {
   if (request.message === "enabled") {
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
    }
}