(()=>{"use strict";chrome.runtime.onMessage.addListener(((e,o,s)=>{"to content"==e.message&&(console.log("content"),console.log("sub"))}))})();