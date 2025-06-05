chrome.commands.onCommand.addListener(async (command) => {
  const [activeTab] = await chrome.tabs.query({
    active: true,
    currentWindow: true,
  });

  if (!activeTab) return;

  if (command === "close-current-tab") {
    chrome.tabs.remove(activeTab.id);

  } else if (command === "close-tabs-to-right") {

    const tabs = await chrome.tabs.query({ currentWindow: true });
    const activeIndex = activeTab.index;
    for (const tab of tabs)
      if (tab.index > activeIndex)
        chrome.tabs.remove(tab.id);

  } else if (command === "close-tab-to-left") {
    
    const tabs = await chrome.tabs.query({ currentWindow: true });
    const activeIndex = activeTab.index;
    for (const tab of tabs)
      if (tab.index < activeIndex)
        chrome.tabs.remove(tab.id);

  } else if (command === "pin-unpin-tab") {

    await chrome.tabs.update(activeTab.id, { pinned: !activeTab.pinned });

  }
});
