function isValidURL(givenURL) {
  return givenURL && givenURL.includes(".");
}

function secondsToString(seconds, compressed = false) {
  let hours = parseInt(seconds / 3600);
  seconds %= 3600;
  let minutes = parseInt(seconds / 60);
  seconds %= 60;
  let timeString = "";

  if (hours) {
    timeString += hours + " hrs ";
  }
  if (minutes) {
    timeString += minutes + " min ";
  }
  if (seconds) {
    timeString += seconds + " sec ";
  }
  if (!compressed) {
    return timeString;
  } else {
    if (hours) {
      return `${hours}h`;
    }
    if (minutes) {
      return `${minutes}m`;
    }
    if (seconds) {
      return `${seconds}s`;
    }
  }
}

function getDateString(nDate) {
  let nDateDate = nDate.getDate();
  let nDateMonth = nDate.getMonth() + 1;
  let nDateYear = nDate.getFullYear();
  if (nDateDate < 10) {
    nDateDate = "0" + nDateDate;
  }
  if (nDateMonth < 10) {
    nDateMonth = "0" + nDateMonth;
  }
  return `${nDateYear}-${nDateMonth}-${nDateDate}`;
}

function getDomain(tablink) {
  if (tablink && tablink.length > 0) {
    let url = new URL(tablink[0].url);
    return url.hostname;
  }
  return null;
}

function updateTime() {
  chrome.tabs.query({ active: true, lastFocusedWindow: true }, function (activeTab) {
    let domain = getDomain(activeTab);
    if (isValidURL(domain)) {
      let today = new Date();
      let presentDate = getDateString(today);
      let myObj = {};
      myObj[presentDate] = {};
      myObj[presentDate][domain] = "";
      let timeSoFar = 0;
      chrome.storage.local.get(presentDate, function (storedObject) {
        if (storedObject[presentDate]) {
          if (storedObject[presentDate][domain]) {
            timeSoFar = storedObject[presentDate][domain] + 1;
            storedObject[presentDate][domain] = timeSoFar;
            chrome.storage.local.set(storedObject, function () {
              console.log("Set " + domain + " at " + storedObject[presentDate][domain]);
              chrome.action.setBadgeText({ text: secondsToString(timeSoFar, true) });
            });
          } else {
            timeSoFar++;
            storedObject[presentDate][domain] = timeSoFar;
            chrome.storage.local.set(storedObject, function () {
              console.log("Set " + domain + " at " + storedObject[presentDate][domain]);
              chrome.action.setBadgeText({ text: secondsToString(timeSoFar, true) });
            });
          }
        } else {
          timeSoFar++;
          storedObject[presentDate] = {};
          storedObject[presentDate][domain] = timeSoFar;
          chrome.storage.local.set(storedObject, function () {
            console.log("Set " + domain + " at " + storedObject[presentDate][domain]);
            chrome.action.setBadgeText({ text: secondsToString(timeSoFar, true) });
          });
        }
      });
    } else {
      chrome.action.setBadgeText({ text: '' });
    }
  });
}

let intervalID;

function startUpdateTime() {
  if (!intervalID) {
    intervalID = setInterval(updateTime, 1000);
  }
}

function stopUpdateTime() {
  if (intervalID) {
    clearInterval(intervalID);
    intervalID = null;
  }
}

function checkFocus() {
  chrome.windows.getCurrent(function (window) {
    if (window.focused) {
      startUpdateTime();
    } else {
      stopUpdateTime();
    }
  });
}

chrome.runtime.onStartup.addListener(() => {
  startUpdateTime();
  setInterval(checkFocus, 500);
});

chrome.runtime.onInstalled.addListener(() => {
  startUpdateTime();
  setInterval(checkFocus, 500);
});
