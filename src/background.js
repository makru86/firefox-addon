chrome.commands.onCommand.addListener(async (command) => {
  const [activeTab] = await chrome.tabs.query({
    active: true,
    currentWindow: true,
  });

  if (!activeTab) return;

  if (command === "close-current-tab") {
    // Close the current tab
    chrome.tabs.remove(activeTab.id);

  } else if (command === "close-tabs-to-right") {

    // Get all tabs in the current window
    const tabs = await chrome.tabs.query({ currentWindow: true });

    // Find the index of the active tab
    const activeIndex = activeTab.index;

    // Close tabs to the right of the active tab
    for (const tab of tabs) {
      if (tab.index > activeIndex) {
        chrome.tabs.remove(tab.id);
      }
    }

  } else if (command === "close-tab-to-left") {
    
    const tabs = await chrome.tabs.query({ currentWindow: true });
    const activeIndex = activeTab.index;
    for (const tab of tabs) {
      if (tab.index < activeIndex) {
        chrome.tabs.remove(tab.id);
      }
    }
  }
});
