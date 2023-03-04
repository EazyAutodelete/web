$("#inviteButton").on("click", function () {
  window.location.href = "https://eazyautodelete.xyz/invite/";
});

$("#supportButton").on("click", function () {
  window.location.href = "https://eazyautodelete.xyz/discord/";
});

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

const animationDuration = 1750;

const animateDeletedMessages = (start, end, duration) => {
  let obj = document.getElementById("msg-count");
  let range = end - start;
  let minTimer = 50;
  let stepTime = Math.abs(Math.floor(duration / range));
  stepTime = Math.max(stepTime, minTimer);
  let startTime = new Date().getTime();
  let endTime = startTime + duration;
  let timer;
  function run() {
    let now = new Date().getTime();
    let remaining = Math.max((endTime - now) / duration, 0);
    let value = Math.round(end - remaining * range);
    obj.innerHTML = value.toLocaleString() + "+";
    if (value == end) {
      clearInterval(timer);
    }
  }
  timer = setInterval(run, stepTime);
  run();
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
    request.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        stats = Math.round(JSON.parse(this.responseText).count / 1e3) * 1e3;
        animateDeletedMessages(0, stats, animationDuration / 3);

        statsCache[nextStat] = stats;
      }
    };
    request.open("GET", "https://api.eazyautodelete.xyz/public/stats/deleted-messages/" + nextStat, false);
    request.setRequestHeader("Content-Type", "application/json");
    request.send();
  }
});

try {
  let initStatsRequest = new XMLHttpRequest();
  initStatsRequest.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      stats = Math.round(JSON.parse(this.responseText).count / 1e3) * 1e3;
      animateDeletedMessages(0, stats, animationDuration);

      statsCache["week"] = stats;
    }
  };
  initStatsRequest.open("GET", "https://api.eazyautodelete.xyz/public/stats/deleted-messages/week", false);
  initStatsRequest.setRequestHeader("Content-Type", "application/json");
  initStatsRequest.send();
} catch (e) {
  console.log(e);
}

$(document).ready(function () {
  ((text, write_duration) => {
    var i = 0;
    var interval = setInterval(function () {
      document.getElementById("intro-writer").innerHTML += text.charAt(i);
      i++;
      if (i == text.length) {
        clearInterval(interval);
      }
    }, write_duration / text.length);
  })("Discord Bot to automatically delete messages.", animationDuration);

  ((start, end, duration) => {
    let obj = document.getElementById("server-count");
    let range = end - start;
    let minTimer = 50;
    let stepTime = Math.abs(Math.floor(duration / range));
    stepTime = Math.max(stepTime, minTimer);
    let startTime = new Date().getTime();
    let endTime = startTime + duration;
    let timer;
    function run() {
      let now = new Date().getTime();
      let remaining = Math.max((endTime - now) / duration, 0);
      let value = Math.round(end - remaining * range);
      obj.innerHTML = value.toLocaleString() + "+";
      if (value == end) {
        clearInterval(timer);
      }
    }
    timer = setInterval(run, stepTime);
    run();
  })(0, 1750, animationDuration);

  $("#mode-1").prop("src", "https://cdn.eazyautodelete.xyz/assets/02568459-37c5-436a-a82b-b6e4c92c6c59");
  $("#mode-2").prop("src", "https://cdn.eazyautodelete.xyz/assets/02568459-37c5-436a-a82b-b6e4c92c6c59");

  setInterval(() => {
    console.log("You know what you are doing? Contact qreepex#0001 on Discord to get hired!");
    console.log("Work for us: Add qreepex#0001 on discord and say hi.");
  }, 2e3);

  $('[data-toggle="tooltip"]').tooltip();
});
