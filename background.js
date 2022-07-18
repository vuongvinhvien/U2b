function remove(changeInfo, tab) {
	setTimeout(function(){
		//console.log(document);
		 Array.from(document.getElementsByClassName("ytp-ce-element")).forEach(
		  (x) => (x.style.display = "none")		  
		 );
	}, 500);
}
var temp = 0;
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  console.log(tab);
  if (changeInfo.status == "complete") {
    if (tab.url.includes("https://www.youtube.com/")) {
      console.log("done domain");
    }
    chrome.scripting.executeScript({
      target: { tabId: tabId },
      function: remove,
      args: [changeInfo, tab], //pass arguments to function
    });
  }
});
