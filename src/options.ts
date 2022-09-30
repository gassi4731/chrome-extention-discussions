window.onload = (e) => {
	const textareaElement: HTMLTextAreaElement = <HTMLTextAreaElement>document.getElementById("contents");
	const saveButtonElement: HTMLInputElement = <HTMLInputElement>document.getElementById("save");

	var defaults = {
		members: [],
	};
	chrome.storage.local.get(defaults, function (result) {
		textareaElement.value = '{"members":' + JSON.stringify(result.members) + "}";
	});

	saveButtonElement.onclick = function () {
		const contents = textareaElement.value;

		try {
			JSON.parse(contents);
		} catch (error) {
			window.alert("エラー: JSONで入力してください。");
		}

		const members = JSON.parse(contents);
		chrome.storage.local.set(members, function () {
			console.log("Value is set to " + members);
			window.alert("保存しました");
		});
	};
};
