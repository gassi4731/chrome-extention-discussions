const background = () => {
	chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
		if (changeInfo.status === "complete" && tab.url!.indexOf("https://github.com/") > -1) {
			console.log(`updated: ${tab.url}`);
			chrome.tabs.executeScript(tabId, { file: "/js/rename.js" }, function (result) {
				console.log(`executed: ${result}`);
			});
		}
	});
};

background();
