$("#inviteButton").on("click", function (_) {
  window.location.href = "https://eazyautodelete.xyz/invite/";
}),
  $("#supportButton").on("click", function (_) {
    window.location.href = "https://eazyautodelete.xyz/discord/";
  }),
  $(document).ready(function () {
    let _ = " Discord Bot to organise and clean up your channels!",
      t = 0;
    !(function e() {
      t >= _.length
        ? console.log(50 * t)
        : ((document.getElementById("intro-writer").innerHTML =
            document.getElementById("intro-writer").innerHTML + _.charAt(t)),
          t++,
          setTimeout(() => e(), 25));
    })();
    let e = 0;
    function o() {
      e >= 41e4 ||
        ((document.getElementById("member-count").innerHTML = Math.round(e).toLocaleString() + "+"),
        (e += 820),
        setTimeout(() => o(), 1));
    }
    setTimeout(() => o(), 1);
    let n = 0;
    function i() {
      n >= 1583 ||
        ((document.getElementById("server-count").innerHTML = Math.round(n).toLocaleString() + "+"),
        (n += 1583 / 501),
        setTimeout(() => i(), 1));
    }
    setTimeout(() => i(), 1),
      setInterval(() => {
        console.log(
          "\n   _____      _     _    _ _              _                                           _  _    ___   ___   ___ __ \n  / ____|    | |   | |  | (_)            | |_                                       _| || |_ / _ \\ / _ \\ / _ \\_ |\n | |  __  ___| |_  | |__| |_ _ __ ___  __| (_)   __ _ _ __ ___  ___ _ __   _____  ___  __  _| | | | | | | | | | |\n | | |_ |/ _ \\ __| |  __  | | '__/ _ \\/ _` |    / _` | '__/ _ \\/ _ \\ '_ \\ / _ \\ \\/ /_| || |_| | | | | | | | | | |\n | |__| |  __/ |_  | |  | | | | |  __/ (_| |_  | (_| | | |  __/  __/ |_) |  __/>  <|_  __  _| |_| | |_| | |_| | |\n  \\_____|\\___|\\__| |_|  |_|_|_|  \\___|__,_(_)   \\__, |_|  \\___|___|  .__/ \\___/_/\\_\\ |_||_|  \\___/ \\___/ \\___/|_|\n                                                   | |             | |                                           \n                                                   |_|             |_|                                           "
        ),
          console.log("You know what you are doing? Contact qreepex#0001 on Discord to get hired!");
      }, 5e3),
      $('[data-toggle="tooltip"]').tooltip(),
      setTimeout(function () {
        $("#cookieConsent").fadeIn(200);
      }, 35),
      $("#closeCookieConsent, .cookieConsentOK").click(function () {
        $("#cookieConsent").fadeOut(200);
      });
  });
