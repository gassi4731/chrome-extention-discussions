const background = () => {
	chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
		if (changeInfo.status === "complete" && tab.url!.indexOf("https://github.com/") > -1) {
			chrome.scripting.executeScript({
				target: { tabId: tabId },
				files: ["/js/rename.js"],
			});
		}
	});
};

background();
