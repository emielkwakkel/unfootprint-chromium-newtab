const statusTimeout = 1000;

// Saves options to chrome.storage
function save_options() {
  const UnFootPrintDataHandle = document.getElementById('data-handle').value;
  const UnFootPrintAccountId = document.getElementById('account-id').value;
  chrome.storage.sync.set({ UnFootPrintDataHandle, UnFootPrintAccountId }, () => {
    // Update status to let user know options were saved.
    const status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(() => {
      status.textContent = '';
    }, statusTimeout);
  });
}

// Restores input state using the preferences stored in chrome.storage.
function restore_options() {
  chrome.storage.sync.get({
    UnFootPrintDataHandle: 'emiel-kwakkel',
    UnFootPrintAccountId: 'f8daa751-4931-4f0d-8bd3-9976afc4657d'
  }, (items) => {
    document.getElementById('data-handle').value = items.UnFootPrintDataHandle;
    document.getElementById('account-id').value = items.UnFootPrintAccountId;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);