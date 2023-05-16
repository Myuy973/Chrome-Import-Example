
const to_content_button = document.getElementById("to_content");
const to_background_button = document.getElementById("to_background");


to_content_button.onclick = () => {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {message: "to content"}, () => {
            // 余計なエラー表示をなくす(なくても動く)
            if(chrome.runtime.lastError) {}
        });
    });
}


to_background_button.onclick = () => {
    chrome.runtime.sendMessage({message: "to background"}, () => {
        // 余計なエラー表示をなくす(なくても動く)
        if(chrome.runtime.lastError) {}
    });
}