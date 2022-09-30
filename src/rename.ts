import member from "./member";

const main = () => {
	var defaults = {
		members: [],
	};
	chrome.storage.local.get(defaults, function (result) {
		const members = result.members as Array<member>;
		rename(members);
	});
};

const rename = (members: Array<member>) => {
	const linkMuteds: HTMLCollectionOf<HTMLElement> = <HTMLCollectionOf<HTMLElement>>(
		document.getElementsByClassName("Link--muted")
	);
	const linkSecondary: HTMLCollectionOf<HTMLElement> = <HTMLCollectionOf<HTMLElement>>(
		document.getElementsByClassName("Link--secondary")
	);
	const truncateText: HTMLCollectionOf<HTMLElement> = <HTMLCollectionOf<HTMLElement>>(
		document.getElementsByClassName("Truncate-text")
	);

	replaceMentorName(linkMuteds, members);
	replaceMentorName(linkSecondary, members);
	replaceMentorName(truncateText, members);
};

const replaceMentorName = (elements: HTMLCollectionOf<HTMLElement>, members: Array<member>) => {
	for (let i = 0; i < elements.length; i++) {
		members.forEach((e) => {
			var str = elements[i].innerHTML.replace(e["github_id"], e["name"]);
			elements[i].innerHTML = str;
		});
	}
};

main();
