//This function is executed whenever the extension icon is clicked.
//When the page loads, initially the icon is disabled.
//And when the extension icon is clicked, Cut copy paste is enabled on that particular page.
chrome.browserAction.onClicked.addListener(function(tab) {
  var msg = {
  	message: "enabled"
  }
  var titleObj = {
    tabId: tab.id,
    title: "Cut,copy,paste enabled."
  }
  var iconObj = {
    tabId: tab.id,
    path: "enabled.png"
  }
  chrome.browserAction.setTitle(titleObj);
  chrome.browserAction.setIcon(iconObj);
  //sends a message to the content script 
  chrome.tabs.sendMessage(tab.id,msg);
});
