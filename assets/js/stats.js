const statOptions = {
  day: "today",
  week: "last 7 days",
  month: "last 30 days",
  year: "last year",
};

const statsCache = {
  day: 0,
  week: 0,
  month: 0,
  year: 0,
};

$("#stats").on("click", function () {
  const statsElem = $(this);
  const currentStat = statsElem.attr("data-stat");
  const nextStat =
    Object.keys(statOptions)[(Object.keys(statOptions).indexOf(currentStat) + 1) % Object.keys(statOptions).length];

  statsElem.attr("data-stat", nextStat);
  statsElem.html(statOptions[nextStat]);

  if (statsCache[nextStat] != 0) {
    animateDeletedMessages(0, statsCache[nextStat], animationDuration / 3);
  } else {
    let request = new XMLHttpRequest();
    request.timeout = 1000;
    request.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        stats = Math.round(JSON.parse(this.responseText).count / 1e3) * 1e3;
        animateDeletedMessages(0, stats, animationDuration / 3);

        statsCache[nextStat] = stats;
      }
    };
    request.open("GET", "https://api.eazyautodelete.xyz/public/stats/deleted-messages/" + nextStat, true);
    request.setRequestHeader("Content-Type", "application/json");
    request.send();
  }
});

try {
  let initStatsRequest = new XMLHttpRequest();
  initStatsRequest.timeout = 1000;
  initStatsRequest.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      stats = Math.round(JSON.parse(this.responseText).count / 1e3) * 1e3;
      animateDeletedMessages(0, stats, animationDuration);

      statsCache["week"] = stats;
    }
  };
  initStatsRequest.open("GET", "https://api.eazyautodelete.xyz/public/stats/deleted-messages/week", true);
  initStatsRequest.setRequestHeader("Content-Type", "application/json");
  initStatsRequest.send();
} catch (e) {
  console.log(e);
}
