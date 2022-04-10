/* eslint-disable no-undef */

const tabs = await chrome.tabs.query({
	"currentWindow": true,
	"url": "https://mail.google.com/*"
});

if (tabs.length > 0) {
	let lowestIndex = Infinity;
	let lowestIndexTabId = 0;

	for (const { index, id } of tabs) {
		if (index < lowestIndex) {
			lowestIndex = index;
			lowestIndexTabId = id;
		}
	}

	chrome.tabs.update(lowestIndexTabId, { "selected": true });
} else {
	chrome.tabs.create({
		"active": true,
		"url": "https://mail.google.com/"
	});
}

window.close();
