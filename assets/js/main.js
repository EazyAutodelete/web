$("#inviteButton").on("click", function () {
  window.location.href = "https://eazyautodelete.xyz/invite/";
});

$("#supportButton").on("click", function () {
  window.location.href = "https://eazyautodelete.xyz/discord/";
});

$(document).ready(function () {
  const animationDuration = 1750;

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
    let obj = document.getElementById("member-count");
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
  })(0, 600000, animationDuration);

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
    console.log("You know what you are doing? Contact qreepex#0001 on Discord to get hired!"),
      console.log("Work for us: Add qreepex#0001 on discord and say hi.");
  }, 2e3);

  $('[data-toggle="tooltip"]').tooltip();
});
