const optionsUrl = 'options.html';

document
  .querySelector('#go-to-options')
  .addEventListener('click', () => openOptionsPage());

function openOptionsPage() {
  if (chrome.runtime.openOptionsPage) {
    chrome.runtime.openOptionsPage();
  } else {
    window.open(chrome.runtime.getURL(optionsUrl));
  }
}