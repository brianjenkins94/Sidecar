// This script gets injected on any page dictated by the `"matches"` property of the content script in the `manifest.json`.

const extension = document.createElement("div");
extension.classList.add("PWExtension");

document.body.appendChild(extension);
