$("#inviteButton").on("click", function (t) {
  window.location.href = "https://eazyautodelete.xyz/invite/";
});

$("#supportButton").on("click", function (t) {
  window.location.href = "https://eazyautodelete.xyz/discord/";
});

$(document).ready(function () {
  let t = " Discord Bot to automatically delete messages.",
    e = 0;

  !(function o() {
    !(e >= t.length) &&
      ((document.getElementById("intro-writer").innerHTML =
        document.getElementById("intro-writer").innerHTML + t.charAt(e)),
      e++,
      setTimeout(() => o(), 25));
  })();

  let o = 0;
  function n() {
    o >= 41e4 ||
      ((document.getElementById("member-count").innerHTML = Math.round(o).toLocaleString() + "+"),
      (o += 820),
      setTimeout(() => n(), 1));
  }
  setTimeout(() => n(), 1);

  let i = 0;
  function r() {
    i >= 1583 ||
      ((document.getElementById("server-count").innerHTML = Math.round(i).toLocaleString() + "+"),
      (i += 1583 / 501),
      setTimeout(() => r(), 1));
  }
  setTimeout(() => r(), 1);

  setInterval(() => {
    console.log("You know what you are doing? Contact qreepex#0001 on Discord to get hired!"),
      console.log("Work for us: Add qreepex#0001 on discord and send a message to him.");
  }, 2e3);

  $('[data-toggle="tooltip"]').tooltip();

  $("#mode-1").prop("src", "https://cdn.eazyautodelete.xyz/assets/02568459-37c5-436a-a82b-b6e4c92c6c59");
  $("#mode-2").prop("src", "https://cdn.eazyautodelete.xyz/assets/02568459-37c5-436a-a82b-b6e4c92c6c59");
});
