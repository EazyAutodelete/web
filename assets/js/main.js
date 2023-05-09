$("#inviteButton").on("click", function () {
  window.location.href = "https://eazyautodelete.xyz/invite/";
});

$("#supportButton").on("click", function () {
  window.location.href = "https://eazyautodelete.xyz/discord/";
});

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

  (() => {
    let guilds = 2e3;
    const request = new XMLHttpRequest();
    request.timeout = 500;
    request.onreadystatechange = function () {
      4 == this.readyState &&
        200 == this.status &&
        (guilds = 100 * Math.round(JSON.parse(this.responseText).count / 100));
    };
    request.open("GET", "https://api.eazyautodelete.xyz/public/stats/guilds", !0);
    request.setRequestHeader("Content-Type", "application/json");
    request.send();
    const object = document.getElementById("server-count");
    const s = Math.max(Math.abs(Math.floor(animationDuration / guilds)), 50);

    let interval;
    const l = new Date().getTime() + animationDuration;
    function run() {
      const a = new Date().getTime();
      const s = Math.max((l - a) / animationDuration, 0);
      const r = Math.round(guilds - s * guilds);
      object.innerHTML = r.toLocaleString() + "+";
      r == guilds && clearInterval(interval);
    }
    interval = setInterval(run, s);
    run();
  })();

  $("#mode-1").prop("src", "https://cdn.eazyautodelete.xyz/assets/02568459-37c5-436a-a82b-b6e4c92c6c59");
  $("#mode-2").prop("src", "https://cdn.eazyautodelete.xyz/assets/02568459-37c5-436a-a82b-b6e4c92c6c59");

  setInterval(() => {
    console.log("You know what you are doing? Contact qreepex#0001 on Discord to get hired!");
    console.log("Work for us: Add qreepex#0001 on discord and say hi.");
  }, 2e3);

  $('[data-toggle="tooltip"]').tooltip();
});
