// Categorize domains into predefined categories
let category=[];

function categorizeDomain(domain) {
  const categories = {
    "Personal Websites": [
      "blogspot.com", "www.blogspot.com", "wordpress.com", "www.wordpress.com", "myportfolio.com", "www.myportfolio.com",
      "chatgpt.com", "www.chatgpt.com", "wix.com", "www.wix.com", "weebly.com", "www.weebly.com",
      "about.me", "www.about.me", "tumblr.com", "www.tumblr.com", "typepad.com", "www.typepad.com",
      "medium.com", "www.medium.com", "livejournal.com", "www.livejournal.com", "jimdo.com", "www.jimdo.com",
      "yola.com", "www.yola.com", "bravenet.com", "www.bravenet.com", "webnode.com", "www.webnode.com",
      "moonfruit.com", "www.moonfruit.com", "ucoz.com", "www.ucoz.com", "squarespace.com", "www.squarespace.com",
      "ghost.org", "www.ghost.org", "strikingly.com", "www.strikingly.com", "site123.com", "www.site123.com",
      "doodlekit.com", "www.doodlekit.com", "webs.com", "www.webs.com", "imcreator.com", "www.imcreator.com",
      "webstarts.com", "www.webstarts.com", "zoho.com", "www.zoho.com", "tilda.cc", "www.tilda.cc",
      "carrd.co", "www.carrd.co", "simplesite.com", "www.simplesite.com", "sitey.com", "www.sitey.com"
    ],
    "Business Websites": [
      "amazon.com", "www.amazon.com", "shopify.com", "www.shopify.com", "microsoft.com", "www.microsoft.com",
      "github.com", "www.github.com", "linkedin.com", "www.linkedin.com", "salesforce.com", "www.salesforce.com",
      "ebay.com", "www.ebay.com", "etsy.com", "www.etsy.com", "alibaba.com", "www.alibaba.com",
      "adobe.com", "www.adobe.com", "oracle.com", "www.oracle.com", "sap.com", "www.sap.com",
      "zoom.us", "www.zoom.us", "stripe.com", "www.stripe.com", "squareup.com", "www.squareup.com",
      "godaddy.com", "www.godaddy.com", "walmart.com", "www.walmart.com", "target.com", "www.target.com",
      "bestbuy.com", "www.bestbuy.com", "uber.com", "www.uber.com", "lyft.com", "www.lyft.com",
      "yelp.com", "www.yelp.com", "opentable.com", "www.opentable.com", "grubhub.com", "www.grubhub.com",
      "doordash.com", "www.doordash.com", "ubereats.com", "www.ubereats.com", "postmates.com", "www.postmates.com",
      "airbnb.com", "www.airbnb.com", "expedia.com", "www.expedia.com", "tripadvisor.com", "www.tripadvisor.com"
    ],
    "Educational Websites": [
      "wikipedia.org", "www.wikipedia.org", "khanacademy.org", "www.khanacademy.org", "coursera.org", "www.coursera.org",
      "edx.org", "www.edx.org", "udemy.com", "www.udemy.com", "codecademy.com", "www.codecademy.com",
      "mit.edu", "www.mit.edu", "harvard.edu", "www.harvard.edu", "stanford.edu", "www.stanford.edu",
      "udacity.com", "www.udacity.com", "academic.oup.com", "www.academic.oup.com", "jstor.org", "www.jstor.org",
      "sciencedirect.com", "www.sciencedirect.com", "springer.com", "www.springer.com", "nasa.gov", "www.nasa.gov",
      "nobelprize.org", "www.nobelprize.org", "projectgutenberg.org", "www.projectgutenberg.org",
      "britannica.com", "www.britannica.com", "nationalgeographic.com", "www.nationalgeographic.com",
      "smithsonianmag.com", "www.smithsonianmag.com", "pbs.org", "www.pbs.org", "edutopia.org", "www.edutopia.org",
      "npr.org", "www.npr.org", "ted.com", "www.ted.com", "futurelearn.com", "www.futurelearn.com",
      "academic.oup.com", "www.academic.oup.com", "researchgate.net", "www.researchgate.net", "plos.org", "www.plos.org",
      "eric.ed.gov", "www.eric.ed.gov", "nature.com", "www.nature.com"
    ],
    "Entertainment Websites": [
      "youtube.com", "www.youtube.com", "netflix.com", "www.netflix.com", "spotify.com", "www.spotify.com",
      "hulu.com", "www.hulu.com", "apple.com", "www.apple.com", "disneyplus.com", "www.disneyplus.com",
      "twitch.tv", "www.twitch.tv", "vimeo.com", "www.vimeo.com", "dailymotion.com", "www.dailymotion.com",
      "hbomax.com", "www.hbomax.com", "peacocktv.com", "www.peacocktv.com", "paramountplus.com", "www.paramountplus.com",
      "shudder.com", "www.shudder.com", "fubo.tv", "www.fubo.tv", "sling.com", "www.sling.com",
      "crunchyroll.com", "www.crunchyroll.com", "funimation.com", "www.funimation.com", "vrv.co", "www.vrv.co",
      "soundcloud.com", "www.soundcloud.com", "bandcamp.com", "www.bandcamp.com", "pandora.com", "www.pandora.com",
      "deezer.com", "www.deezer.com", "iheartradio.com", "www.iheartradio.com", "audible.com", "www.audible.com",
      "comixology.com", "www.comixology.com", "webtoon.com", "www.webtoon.com", "tapastic.com", "www.tapastic.com",
      "crackle.com", "www.crackle.com", "tubitv.com", "www.tubitv.com", "pluto.tv", "www.pluto.tv"
    ],
    "News and Media Websites": [
      "cnn.com", "www.cnn.com", "nytimes.com", "www.nytimes.com", "bbc.com", "www.bbc.com",
      "foxnews.com", "www.foxnews.com", "nbcnews.com", "www.nbcnews.com", "aljazeera.com", "www.aljazeera.com",
      "reuters.com", "www.reuters.com", "bloomberg.com", "www.bloomberg.com", "apnews.com", "www.apnews.com",
      "huffpost.com", "www.huffpost.com", "theguardian.com", "www.theguardian.com", "forbes.com", "www.forbes.com",
      "time.com", "www.time.com", "wsj.com", "www.wsj.com", "washingtonpost.com", "www.washingtonpost.com",
      "usatoday.com", "www.usatoday.com", "npr.org", "www.npr.org", "politico.com", "www.politico.com",
      "abcnews.go.com", "www.abcnews.go.com", "newsweek.com", "www.newsweek.com", "economist.com", "www.economist.com",
      "cbsnews.com", "www.cbsnews.com", "latimes.com", "www.latimes.com", "bostonglobe.com", "www.bostonglobe.com",
      "independent.co.uk", "www.independent.co.uk", "telegraph.co.uk", "www.telegraph.co.uk", "ft.com", "www.ft.com",
      "chicagotribune.com", "www.chicagotribune.com", "miamiherald.com", "www.miamiherald.com", "dallasnews.com", "www.dallasnews.com"
    ],
    "Community and Social Networking Websites": [
      "facebook.com", "www.facebook.com", "twitter.com", "www.twitter.com", "reddit.com", "www.reddit.com",
      "instagram.com", "www.instagram.com", "tiktok.com", "www.tiktok.com", "pinterest.com", "www.pinterest.com",
      "snapchat.com", "www.snapchat.com", "tumblr.com", "www.tumblr.com", "whatsapp.com", "www.whatsapp.com",
      "discord.com", "www.discord.com", "telegram.org", "www.telegram.org", "weibo.com", "www.weibo.com",
      "vkontakte.ru", "www.vkontakte.ru", "line.me", "www.line.me", "wechat.com", "www.wechat.com",
      "nextdoor.com", "www.nextdoor.com", "meetup.com", "www.meetup.com", "flickr.com", "www.flickr.com",
      "deviantart.com", "www.deviantart.com", "goodreads.com", "www.goodreads.com", "dribbble.com", "www.dribbble.com",
      "behance.net", "www.behance.net", "gab.com", "www.gab.com", "mastodon.social", "www.mastodon.social",
      "parler.com", "www.parler.com", "clubhouse.com", "www.clubhouse.com", "signal.org", "www.signal.org",
      "mewe.com", "www.mewe.com", "triller.co", "www.triller.co", "houseparty.com", "www.houseparty.com"
    ],
    "Government and Nonprofit Websites": [
      "usa.gov", "www.usa.gov", "unicef.org", "www.unicef.org", "who.int", "www.who.int", "irs.gov", "www.irs.gov",
      "cdc.gov", "www.cdc.gov", "americanredcross.org", "www.americanredcross.org", "nasa.gov", "www.nasa.gov",
      "nih.gov", "www.nih.gov", "nps.gov", "www.nps.gov", "usda.gov", "www.usda.gov", "loc.gov", "www.loc.gov",
      "un.org", "www.un.org", "worldbank.org", "www.worldbank.org", "imf.org", "www.imf.org",
      "care.org", "www.care.org", "wfp.org", "www.wfp.org", "greenpeace.org", "www.greenpeace.org",
      "oxfam.org", "www.oxfam.org", "doctorswithoutborders.org", "www.doctorswithoutborders.org",
      "savethechildren.org", "www.savethechildren.org", "humanesociety.org", "www.humanesociety.org",
      "peta.org", "www.peta.org", "amnesty.org", "www.amnesty.org", "hrw.org", "www.hrw.org",
      "worldwildlife.org", "www.worldwildlife.org", "charitywater.org", "www.charitywater.org",
      "kiva.org", "www.kiva.org", "one.org", "www.one.org", "habitat.org", "www.habitat.org",
      "bbbs.org", "www.bbbs.org"
    ],
    "Portfolio Websites": [
      "behance.net", "www.behance.net", "dribbble.com", "www.dribbble.com", "carbonmade.com", "www.carbonmade.com",
      "deviantart.com", "www.deviantart.com", "flickr.com", "www.flickr.com", "500px.com", "www.500px.com",
      "portfoliobox.net", "www.portfoliobox.net", "crevado.com", "www.crevado.com", "adobe.com", "www.adobe.com",
      "artstation.com", "www.artstation.com", "format.com", "www.format.com", "viewbook.com", "www.viewbook.com",
      "journoportfolio.com", "www.journoportfolio.com", "clippings.me", "www.clippings.me", "pressfolios.com", "www.pressfolios.com",
      "portfolium.com", "www.portfolium.com", "pixpa.com", "www.pixpa.com", "allrisecreative.com", "www.allrisecreative.com",
      "dunked.com", "www.dunked.com", "krop.com", "www.krop.com", "foliospaces.org", "www.foliospaces.org",
      "pando.com", "www.pando.com", "journo.com", "www.journo.com", "portfolio.com", "www.portfolio.com",
      "shownd.com", "www.shownd.com", "cargocollective.com", "www.cargocollective.com", "wefolio.com", "www.wefolio.com",
      "photoshelter.com", "www.photoshelter.com", "issuu.com", "www.issuu.com", "smugmug.com", "www.smugmug.com"
    ],
    "Informational Websites": [
      "wikihow.com", "www.wikihow.com", "howstuffworks.com", "www.howstuffworks.com", "quora.com", "www.quora.com",
      "stackexchange.com", "www.stackexchange.com", "answers.com", "www.answers.com", "reference.com", "www.reference.com",
      "infoplease.com", "www.infoplease.com", "about.com", "www.about.com", "wisegeek.com", "www.wisegeek.com",
      "howtogeek.com", "www.howtogeek.com", "ehow.com", "www.ehow.com", "lifehacker.com", "www.lifehacker.com",
      "thoughtco.com", "www.thoughtco.com", "britannica.com", "www.britannica.com", "encyclopedia.com", "www.encyclopedia.com",
      "investopedia.com", "www.investopedia.com", "medlineplus.gov", "www.medlineplus.gov", "history.com", "www.history.com",
      "nationalgeographic.com", "www.nationalgeographic.com", "factmonster.com", "www.factmonster.com", "sparknotes.com", "www.sparknotes.com",
      "shmoop.com", "www.shmoop.com", "gradesaver.com", "www.gradesaver.com", "cliffsnotes.com", "www.cliffsnotes.com",
      "genius.com", "www.genius.com", "lyrics.com", "www.lyrics.com", "songmeanings.com", "www.songmeanings.com",
      "tradingeconomics.com", "www.tradingeconomics.com", "worldometers.info", "www.worldometers.info", "gapminder.org", "www.gapminder.org"
    ],
    "Web Applications": [
      "google.com", "www.google.com", "slack.com", "www.slack.com", "zoom.us", "www.zoom.us", "trello.com", "www.trello.com",
      "asana.com", "www.asana.com", "dropbox.com", "www.dropbox.com", "drive.google.com", "www.drive.google.com",
      "outlook.com", "www.outlook.com", "office.com", "www.office.com", "gmail.com", "www.gmail.com",
      "icloud.com", "www.icloud.com", "box.com", "www.box.com", "docusign.com", "www.docusign.com",
      "hellosign.com", "www.hellosign.com", "notion.so", "www.notion.so", "evernote.com", "www.evernote.com",
      "onenote.com", "www.onenote.com", "todoist.com", "www.todoist.com", "clickup.com", "www.clickup.com",
      "jira.com", "www.jira.com", "confluence.com", "www.confluence.com", "hubspot.com", "www.hubspot.com",
      "mailchimp.com", "www.mailchimp.com", "surveymonkey.com", "www.surveymonkey.com", "canva.com", "www.canva.com",
      "picmonkey.com", "www.picmonkey.com", "figma.com", "www.figma.com", "adobe.com", "www.adobe.com",
      "sketch.com", "www.sketch.com", "zeplin.io", "www.zeplin.io"
    ],
    "Healthcare Websites": [
      "webmd.com", "www.webmd.com", "mayoclinic.org", "www.mayoclinic.org", "healthline.com", "www.healthline.com",
      "medlineplus.gov", "www.medlineplus.gov", "clevelandclinic.org", "www.clevelandclinic.org", "johnshopkinshealthreview.com", "www.johnshopkinshealthreview.com",
      "nih.gov", "www.nih.gov", "cdc.gov", "www.cdc.gov", "who.int", "www.who.int", "healthcare.gov", "www.healthcare.gov",
      "doctorswithoutborders.org", "www.doctorswithoutborders.org", "plannedparenthood.org", "www.plannedparenthood.org",
      "cancer.org", "www.cancer.org", "aap.org", "www.aap.org", "ama-assn.org", "www.ama-assn.org",
      "apa.org", "www.apa.org", "aafp.org", "www.aafp.org", "alz.org", "www.alz.org",
      "diabetes.org", "www.diabetes.org", "heart.org", "www.heart.org", "lung.org", "www.lung.org",
      "mentalhealth.gov", "www.mentalhealth.gov", "suicidepreventionlifeline.org", "www.suicidepreventionlifeline.org",
      "mentalhealthamerica.net", "www.mentalhealthamerica.net", "adaa.org", "www.adaa.org", "nami.org", "www.nami.org",
      "medscape.com", "www.medscape.com", "medicinenet.com", "www.medicinenet.com", "rxlist.com", "www.rxlist.com",
      "verywellhealth.com", "www.verywellhealth.com"
    ],
    "Travel and Tourism Websites": [
      "tripadvisor.com", "www.tripadvisor.com", "expedia.com", "www.expedia.com", "airbnb.com", "www.airbnb.com",
      "booking.com", "www.booking.com", "priceline.com", "www.priceline.com", "orbitz.com", "www.orbitz.com",
      "kayak.com", "www.kayak.com", "hotels.com", "www.hotels.com", "trivago.com", "www.trivago.com",
      "lonelyplanet.com", "www.lonelyplanet.com", "viator.com", "www.viator.com", "hostelworld.com", "www.hostelworld.com",
      "couchsurfing.com", "www.couchsurfing.com", "skyscanner.com", "www.skyscanner.com", "google.com/travel", "www.google.com/travel",
      "agoda.com", "www.agoda.com", "turo.com", "www.turo.com", "homeaway.com", "www.homeaway.com",
      "vrbo.com", "www.vrbo.com", "trip.com", "www.trip.com", "lastminute.com", "www.lastminute.com",
      "cheapoair.com", "www.cheapoair.com", "justfly.com", "www.justfly.com", "momondo.com", "www.momondo.com",
      "rome2rio.com", "www.rome2rio.com", "kayak.com", "www.kayak.com", "holidaylettings.co.uk", "www.holidaylettings.co.uk",
      "goibibo.com", "www.goibibo.com", "makemytrip.com", "www.makemytrip.com", "redbus.in", "www.redbus.in"
    ],
    "Real Estate Websites": [
      "zillow.com", "www.zillow.com", "realtor.com", "www.realtor.com", "trulia.com", "www.trulia.com",
      "redfin.com", "www.redfin.com", "homes.com", "www.homes.com", "realestate.com", "www.realestate.com",
      "apartmentguide.com", "www.apartmentguide.com", "rent.com", "www.rent.com", "apartments.com", "www.apartments.com",
      "hotpads.com", "www.hotpads.com", "loopnet.com", "www.loopnet.com", "propertyshark.com", "www.propertyshark.com",
      "remax.com", "www.remax.com", "coldwellbankerhomes.com", "www.coldwellbankerhomes.com", "century21.com", "www.century21.com",
      "compass.com", "www.compass.com", "sothebysrealty.com", "www.sothebysrealty.com", "bhgre.com", "www.bhgre.com",
      "kw.com", "www.kw.com", "longandfoster.com", "www.longandfoster.com", "era.com", "www.era.com",
      "realtytrac.com", "www.realtytrac.com", "realtyexecutives.com", "www.realtyexecutives.com", "weichert.com", "www.weichert.com",
      "corcoran.com", "www.corcoran.com", "compass.com", "www.compass.com", "hud.gov", "www.hud.gov",
      "zumper.com", "www.zumper.com", "rentcafe.com", "www.rentcafe.com"
    ],
    "Financial Websites": [
      "bankofamerica.com", "www.bankofamerica.com", "chase.com", "www.chase.com", "coinbase.com", "www.coinbase.com",
      "paypal.com", "www.paypal.com", "americanexpress.com", "www.americanexpress.com", "capitalone.com", "www.capitalone.com",
      "wellsfargo.com", "www.wellsfargo.com", "citibank.com", "www.citibank.com", "goldmansachs.com", "www.goldmansachs.com",
      "morganstanley.com", "www.morganstanley.com", "fidelity.com", "www.fidelity.com", "schwab.com", "www.schwab.com",
      "robinhood.com", "www.robinhood.com", "etrade.com", "www.etrade.com", "tdameritrade.com", "www.tdameritrade.com",
      "vanguard.com", "www.vanguard.com", "sofi.com", "www.sofi.com", "ally.com", "www.ally.com",
      "creditkarma.com", "www.creditkarma.com", "nerdwallet.com", "www.nerdwallet.com", "intuit.com", "www.intuit.com",
      "quickbooks.intuit.com", "www.quickbooks.intuit.com", "turbotax.intuit.com", "www.turbotax.intuit.com", "mint.com", "www.mint.com",
      "personalcapital.com", "www.personalcapital.com", "betterment.com", "www.betterment.com", "wealthfront.com", "www.wealthfront.com",
      "prosper.com", "www.prosper.com", "lendingclub.com", "www.lendingclub.com", "kabbage.com", "www.kabbage.com"
    ],
    "Job Portals and Career Websites": [
      "linkedin.com", "www.linkedin.com", "indeed.com", "www.indeed.com", "glassdoor.com", "www.glassdoor.com",
      "monster.com", "www.monster.com", "careerbuilder.com", "www.careerbuilder.com", "simplyhired.com", "www.simplyhired.com",
      "ziprecruiter.com", "www.ziprecruiter.com", "snagajob.com", "www.snagajob.com", "flexjobs.com", "www.flexjobs.com",
      "upwork.com", "www.upwork.com", "freelancer.com", "www.freelancer.com", "fiverr.com", "www.fiverr.com",
      "angellist.com", "www.angellist.com", "hired.com", "www.hired.com", "remotive.io", "www.remotive.io",
      "jobscan.co", "www.jobscan.co", "weworkremotely.com", "www.weworkremotely.com", "remoteok.io", "www.remoteok.io",
      "roberthalf.com", "www.roberthalf.com", "dice.com", "www.dice.com", "clearancejobs.com", "www.clearancejobs.com",
      "builtin.com", "www.builtin.com", "ventureloop.com", "www.ventureloop.com", "mediabistro.com", "www.mediabistro.com",
      "journalismjobs.com", "www.journalismjobs.com", "problogger.com", "www.problogger.com", "krop.com", "www.krop.com",
      "artjobs.com", "www.artjobs.com", "behance.net", "www.behance.net", "dribbble.com", "www.dribbble.com"
    ]
  };
  for (const category in categories) {
    if (categories[category].includes(domain)) {
      return(category);
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

function getDomain(urls) {
  //let link = document.createElement("a");
  //link.setAttribute("href", urls);
  //let domain = link.hostname;
 // if (urls.slice(0, 4) == "www.") { urls = urls.slice(4); }
  //return domain;
  
  
    return (urls.replace('www.', ''));
   
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


  var color = ["#264653", "#2a9d8f", "#e9c46a", "#f4a261", "#e76f51",
    "#d62828", "#023e8a", "#007f5f", "#b56576", "#8338ec",
    "#ff6d00", "#fb8b24", "#ff0167", "#06d6a0", "#8d99ae",
    "#4c5154", "#457b9d", "#a1c9f2", "#8bc34a", "#f7dc6f",
    "#ff99cc", "#66d9ef", "#4db6ac", "#0097a7", "#e5d8b6",
    "#f2c464", "#8e7746", "#9e4b53", "#45b3fa", "#6495ed"];
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
        }
          for( let i=0; i<dataLabels.length;i++){
          let domain = getDomain(dataLabels[i]);
          //document.getElementById("hi").innerHTML=domain;

          let category = categorizeDomain(domain);
         // document.getElementById("hi").innerHTML=category;
          if (categoryTime[category]) {
            categoryTime[category] += dataSet[i];
          } else {
            categoryTime[category] = dataSet[i];
          }
          
          
        }
        let newsss=Object.keys(categoryTime);
        let newsss1=Object.values(categoryTime);
      //  document.getElementById("hi").innerHTML=newsss1;
      document.getElementById("emailSubmit").addEventListener('click',function(){
        let email = document.getElementById("email").value;
        document.getElementById("toto").innerHTML=email;
        
      })


      document.getElementById("sendSubmit").addEventListener('click', function() {
        document.getElementById("toto1").innerHTML = "Email sent successfully";
        let email = document.getElementById("email").value;
        let websitename=dataLabels;
        let webtime=dataSet; 
        let dictionarydata={};
        
          for (let i = 0; i < websitename.length; i++) {
              dictionarydata[websitename[i]] = webtime[i];
          }
          let jsondata=JSON.stringify(dictionarydata);
    
        fetch('http://127.0.0.1:8000/mail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Head: 'This is your todays Web usage',
                Body: jsondata,
                email: email
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
    });
    

        
        

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
        

        //if (document.getElementById("category-chart").dataset.chartInstance) {
        //  document.getElementById("category-chart").dataset.chartInstance.destroy();
        //}

        let todayCategoryChart = new Chart(document.getElementById("category-chart"), {
          type: 'bar',
          data: {
            labels: newsss,
            datasets: [{
              label: "Time Spent by Category",
              backgroundColor: color,
              data: newsss1
            }]
          },
          options: {
            title: {
              display: true,
              text: "Time Spent by Category Today"
            },
            legend: {
              display: true
            },
            scales: {
              xAxes: [{
                stacked: true, // To stack bars if needed
                scaleLabel: {
                  display: true,
                  labelString: 'Category'
                }
              }],
              yAxes: [{
                stacked: true, // To stack bars if needed
                ticks: {
                  beginAtZero: true,
                  callback: function(value) { return secondsToString(value); } // Format y-axis ticks as time
                },
                scaleLabel: {
                  display: true,
                  labelString: 'Time Spent'
                }
              }]
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
          let newsss=Object.keys(categoryTime);
          let newsss1=Object.values(categoryTime);
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
            type: 'bar',
            data: {
              labels: newsss,
              datasets: [{
                label: "Time Spent by Category",
                backgroundColor: color,
                data: newsss1
              }]
            },
            options: {
              title: {
                display: true,
                text: "Time Spent by Category on " + givenDate
              },
              legend: {
                display: true
              },
              scales: {
                xAxes: [{
                  stacked: true, // To stack bars if needed
                  scaleLabel: {
                    display: true,
                    labelString: 'Category'
                  }
                }],
                yAxes: [{
                  stacked: true, // To stack bars if needed
                  ticks: {
                    beginAtZero: true,
                    callback: function(value) { return secondsToString(value); } // Format y-axis ticks as time
                  },
                  scaleLabel: {
                    display: true,
                    labelString: 'Time Spent'
                  }
                }]
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
        let totalTime = getDateTotalTime(storedItems, date)/3600;
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
            label: "Time Spent (Hours)",
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

      document.getElementById("weekAvg").innerText = secondsToString((totalWeekTime / noOfDays).toFixed(2))+"hours";
      document.getElementById("weekMax").innerText = secondsToString((maxTime).toFixed(2)) + " on " + maxDate;
    });
  });

document.getElementById("emailSubmit").addEventListener('click',function(){
  let email = document.getElementById("email").value;
  document.getElementById("toto").innerHTML=email;
  
})

