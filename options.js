// Saves options to chrome.storage
function save_options() {
  var enableChecked = document.getElementById('enable').checked;
  chrome.storage.sync.set({
    darkModeEnabled: enableChecked
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 1750);
  });
}

// Restores extension options which are stored in chrome.storage.
function restore_options() {
  // Default to enable = true.
  chrome.storage.sync.get({
    darkModeEnabled: true
  }, function(items) {
    document.getElementById('enable').checked = items.darkModeEnabled;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);