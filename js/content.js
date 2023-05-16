import {sub} from "./sub.js"

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if(message["message"] == "to content") {
        console.log("content");
        sub();
    }
});