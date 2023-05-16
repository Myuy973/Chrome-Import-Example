
chrome.runtime.onMessage.addListener((message, send, sendResponse) => {

    if(message["message"] == "to background") {
        console.log("background");
    }
    
})