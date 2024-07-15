// Categorize domains into predefined categories
function categorizeDomain(domain) {
  const categories = {
    "Personal Websites": ["blogspot.com", "wordpress.com", "myportfolio.com"],
    "Business Websites": ["amazon.com", "shopify.com", "microsoft.com"],
    "Educational Websites": ["wikipedia.org", "khanacademy.org", "coursera.org"],
    "Entertainment Websites": ["youtube.com", "netflix.com", "spotify.com"],
    "News and Media Websites": ["cnn.com", "nytimes.com", "bbc.com"],
    "Community and Social Networking Websites": ["facebook.com", "twitter.com", "reddit.com"],
    "Government and Nonprofit Websites": ["usa.gov", "unicef.org", "who.int"],
    "Portfolio Websites": ["behance.net", "dribbble.com", "carbonmade.com"],
    "Informational Websites": ["wikihow.com", "howstuffworks.com", "quora.com"],
    "Web Applications": ["google.com", "slack.com", "zoom.us"],
    "Healthcare Websites": ["webmd.com", "mayoclinic.org", "healthline.com"],
    "Travel and Tourism Websites": ["tripadvisor.com", "expedia.com", "airbnb.com"],
    "Real Estate Websites": ["zillow.com", "realtor.com", "trulia.com"],
    "Financial Websites": ["bankofamerica.com", "chase.com", "coinbase.com"],
    "Job Portals and Career Websites": ["linkedin.com", "indeed.com", "glassdoor.com"]
  };

  for (const [category, domains] of Object.entries(categories)) {
    if (domains.includes(domain)) {
      return category;
    }
  }
  return "Other";
}

function getDateString(nDate) {
  let nDateDate = nDate.getDate();
  let nDateMonth = nDate.getMonth() + 1;
  let nDateYear = nDate.getFullYear();
  if (nDateDate < 10) { nDateDate = "0" + nDateDate; }
  if (nDateMonth < 10) { nDateMonth = "0" + nDateMonth; }
  let presentDate = "" + nDateYear + "-" + nDateMonth + "-" + nDateDate;
  return presentDate;
}

function getDomain(tablink) {
  let link = document.createElement("a");
  link.setAttribute("href", tablink);
  let domain = link.hostname;
  if (domain.slice(0, 4) == "www.") { domain = domain.slice(4); }
  return domain;
}

function secondsToString(seconds) {
  var hour = Math.floor(seconds / 3600);
  hour = (hour < 10)? '0' + hour : hour;
  var minute = Math.floor((seconds / 60) % 60);
  minute = (minute < 10)? '0' + minute : minute;
  var second = seconds % 60;
  second = (second < 10)? '0' + second : second;
  return hour + ":" + minute + ":" + second;
}

document.addEventListener('DOMContentLoaded', function () {
  var color = ["#264653", "#2a9d8f", "#e9c46a", "#f4a261", "#e76f51",
    "#d62828", "#023e8a", "#007f5f", "#b56576", "#8338ec",
    "#ff6d00", "#fb8b24", "#ff0167", "#06d6a0", "#8d99ae"];
  var colorLen = color.length;
  let todayChart, dateChart;

  document.getElementById('todayTab').addEventListener('click', function () {
    let today = getDateString(new Date());
    chrome.storage.local.get(today, function (storedItems) {
      let todayItems = storedItems[today];
      if (todayItems) {
        let links = Object.keys(todayItems);
        let times = Object.values(todayItems);
        let totalTimeToday = times.reduce((a, b) => a + b, 0);
        document.getElementById("totalTimeToday").innerText = secondsToString(totalTimeToday);
        let dataSet = [];
        let dataLabels = [];
        let categoryTime = {};
        
        for (let i = 0; i < links.length; i++) {
          dataSet.push(times[i]);
          dataLabels.push(links[i]);
          
          let domain = getDomain(links[i]);
          let category = categorizeDomain(domain);
          if (categoryTime[category]) {
            categoryTime[category] += times[i];
          } else {
            categoryTime[category] = times[i];
          }
        }

        let chartTitle = "Today's Stats";
        if (todayChart) {
          todayChart.destroy();
        }

        todayChart = new Chart(document.getElementById("pie-chart"), {
          type: 'doughnut',
          data: {
            labels: dataLabels,
            datasets: [{
              label: "Time Spent",
              backgroundColor: color,
              data: dataSet
            }]
          },
          options: {
            title: {
              display: true,
              text: chartTitle
            },
            legend: {
              display: true
            },
            circumference: Math.PI,
            rotation: Math.PI
          }
        });

        let categoryLabels = Object.keys(categoryTime);
        let categoryData = Object.values(categoryTime);
        let categoryColors = categoryLabels.map((_, index) => color[index % color.length]);

        if (document.getElementById("category-chart").dataset.chartInstance) {
          document.getElementById("category-chart").dataset.chartInstance.destroy();
        }

        let todayCategoryChart = new Chart(document.getElementById("category-chart"), {
          type: 'doughnut',
          data: {
            labels: categoryLabels,
            datasets: [{
              label: "Time Spent by Category",
              backgroundColor: categoryColors,
              data: categoryData
            }]
          },
          options: {
            title: {
              display: true,
              text: "Time Spent by Category Today"
            },
            legend: {
              display: true
            }
          }
        });

        document.getElementById("category-chart").dataset.chartInstance = todayCategoryChart;

        const webList = document.getElementById("webList");
        while (webList.firstChild) {
          webList.removeChild(webList.lastChild);
        }
        for (let i = 0; i < links.length; i++) {
          let row = document.createElement('tr');
          let col1 = document.createElement('td');
          col1.innerText = i + 1;
          row.appendChild(col1);
          let col2 = document.createElement('td');
          col2.innerText = links[i];
          row.appendChild(col2);
          let col3 = document.createElement('td');
          col3.innerText = secondsToString(times[i]);
          row.appendChild(col3);
          webList.appendChild(row);
        }
      }
    });
  });

  document.getElementById('dateSubmit').addEventListener('click', function () {
    let givenDate = document.getElementById("dateValue").value;
    if (!givenDate) {
      let alert = document.getElementById("tryAgain");
      alert.classList.remove("d-none");
      alert.innerText = "Invalid date! Please try again.";
    } else {
      let alert = document.getElementById("tryAgain");
      alert.classList.add("d-none");
      chrome.storage.local.get(givenDate, function (storedItems) {
        let givenDayItems = storedItems[givenDate];
        if (givenDayItems) {
          let links = Object.keys(givenDayItems);
          let times = Object.values(givenDayItems);
          let dataSet = [];
          let dataLabels = [];
          let categoryTime = {};
          
          for (let i = 0; i < links.length; i++) {
            dataSet.push(times[i]);
            dataLabels.push(links[i]);

            let domain = getDomain(links[i]);
            let category = categorizeDomain(domain);
            if (categoryTime[category]) {
              categoryTime[category] += times[i];
            } else {
              categoryTime[category] = times[i];
            }
          }

          let chartTitle = "Top Visited Sites on " + givenDate;
          if (dateChart) {
            dateChart.destroy();
          }

          dateChart = new Chart(document.getElementById("differentDayChart"), {
            type: 'doughnut',
            data: {
              labels: dataLabels,
              datasets: [{
                label: "Time Spent",
                backgroundColor: color,
                data: dataSet
              }]
            },
            options: {
              title: {
                display: true,
                text: chartTitle
              },
              legend: {
                display: true
              },
              circumference: Math.PI,
              rotation: Math.PI
            }
          });

          document.getElementById("statsRow").classList.remove("d-none");
          document.getElementById("totalTimeThatDay").innerText = secondsToString(times.reduce((a, b) => a + b, 0));

          const webList2 = document.getElementById("webList2");
          while (webList2.firstChild) {
            webList2.removeChild(webList2.lastChild);
          }
          for (let i = 0; i < links.length; i++) {
            let row = document.createElement('tr');
            let col1 = document.createElement('td');
            col1.innerText = i + 1;
            row.appendChild(col1);
            let col2 = document.createElement('td');
            col2.innerText = links[i];
            row.appendChild(col2);
            let col3 = document.createElement('td');
            col3.innerText = secondsToString(times[i]);
            row.appendChild(col3);
            webList2.appendChild(row);
          }

          let categoryLabels = Object.keys(categoryTime);
          let categoryData = Object.values(categoryTime);
          let categoryColors = categoryLabels.map((_, index) => color[index % color.length]);

          if (document.getElementById("category-day-chart").dataset.chartInstance) {
            document.getElementById("category-day-chart").dataset.chartInstance.destroy();
          }

          let dayCategoryChart = new Chart(document.getElementById("category-day-chart"), {
            type: 'doughnut',
            data: {
              labels: categoryLabels,
              datasets: [{
                label: "Time Spent by Category",
                backgroundColor: categoryColors,
                data: categoryData
              }]
            },
            options: {
              title: {
                display: true,
                text: "Time Spent by Category on " + givenDate
              },
              legend: {
                display: true
              }
            }
          });

          document.getElementById("category-day-chart").dataset.chartInstance = dayCategoryChart;
        } else {
          let alert = document.getElementById("tryAgain");
          alert.classList.remove("d-none");
          alert.innerText = "No data available for the selected date.";
        }
      });
    }
  });

  function getDateTotalTime(storedObject, date) {
    let websiteLinks = Object.keys(storedObject[date]);
    let noOfWebsites = websiteLinks.length;
    let totalTime = 0;
    for (let i = 0; i < noOfWebsites; i++) {
      totalTime += storedObject[date][websiteLinks[i]];
    }
    return totalTime;
  }

  document.getElementById('weekTab').addEventListener('click', function () {
    chrome.storage.local.get(null, function (storedItems) {
      let datesList = Object.keys(storedItems);
      let noOfDays = datesList.length >= 7 ? 7 : datesList.length;
      let timeEachDay = [];
      let dateLabels = [];
      let totalWeekTime = 0;
      let maxTime = 0;
      let maxDate = "";

      for (let i = 0; i < noOfDays; i++) {
        let date = datesList[datesList.length - 1 - i];
        let totalTime = getDateTotalTime(storedItems, date);
        totalWeekTime += totalTime;
        if (totalTime > maxTime) {
          maxTime = totalTime;
          maxDate = date;
        }
        timeEachDay.push(totalTime);
        dateLabels.push(date);
      }

      new Chart(document.getElementById("pastWeek"), {
        type: 'line',
        data: {
          labels: dateLabels,
          datasets: [{
            label: "Time Spent (seconds)",
            backgroundColor: "#2a9d8f",
            data: timeEachDay
          }]
        },
        options: {
          title: {
            display: true,
            text: 'Time Spent in the Past Week'
          },
          legend: {
            display: true
          },
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }
      });

      document.getElementById("weekAvg").innerText = secondsToString(totalWeekTime / noOfDays);
      document.getElementById("weekMax").innerText = secondsToString(maxTime) + " on " + maxDate;
    });
  });
});
