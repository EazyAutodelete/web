<div class="container-fluid" style="font-family: 'Exo'">
  <div class="mt-5 pt-4" style="background-color: #26262b">
    <div class="row justify-content-center">
      <div class="col-10 text-center fw-bolder mb-3">
        <div>
          <img
            src="/assets/img/logo-small.png"
            height="128"
            width="128"
            style="border-radius: 35px"
            class="mb-4 shadow-lg animated-105"
            alt="EazyAutodelete Logo"
          />
          <h1 class="fs-1 fw-bold">
            Hey, I'm
            <a href="invite" style="text-decoration: none"><span class="accent">EazyAutodelete</span></a>!
          </h1>
        </div>
        <div>
          <h2 class="fs-lg-2 fs-3" id="intro-writer" aria-label="A Discord Bot to automatically delete messages!">A</h2>
        </div>
      </div>
      <div class="col-10 row text-center justify-content-center">
        <div class="order-lg-3 col-12 col-lg-12 mt-lg-2 mb-4 mb-lg-0 align-items-center pb-lg-3 animated-105">
          <a href="invite"
            ><button
              type="button"
              class="col-10 col-md-6 col-xl-4 col-xx mt-2 btn btn-outline-primary shadow"
              style="color: #fff; background-color: #5865f2; border-color: #5865f2; border-radius: 50px"
            >
              Add to Server
            </button></a
          >
        </div>
        <div class="col-5 col-md-3 col-xl-2 me-2 stats shadow">
          <div>
            <h4 id="server-count">0+</h4>
          </div>
          <div>
            <p>Servers</p>
          </div>
        </div>
        <div class="col-5 col-md-3 col-xl-2 ms-2 me-2 stats shadow">
          <div>
            <h4 id="msg-count">0+</h4>
          </div>
          <div>
            <p style="display: inline; padding-right: 4px">Deleted Messages</p>
            <a id="stats" data-stat="week">last 7 days</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div style="background-color: #1b1c1c">
  <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 400" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M 0,400 C 0,400 0,133 0,133 C 85.25936104431463,139.16695293713502 170.51872208862926,145.33390587427002 237,135 C 303.48127791137074,124.66609412572998 351.1844726897974,97.83132944005497 407,95 C 462.8155273102026,92.16867055994503 526.7433871521813,113.34077636551012 603,137 C 679.2566128478187,160.65922363448988 767.841978701477,186.80556509790455 841,174 C 914.158021298523,161.19443490209545 971.88869804191,109.43696324287184 1031,107 C 1090.11130195809,104.56303675712816 1150.603229130883,151.44658193060806 1219,164 C 1287.396770869117,176.55341806939194 1363.6983854345585,154.77670903469595 1440,133 C 1440,133 1440,400 1440,400 Z"
      stroke="none"
      stroke-width="0"
      fill="#26262b88"
      class="transition-all duration-300 ease-in-out delay-150 path-0"
      transform="rotate(-180 720 200)"
    />
    <path
      d="M 0,400 C 0,400 0,266 0,266 C 51.69632428718651,267.71350051528685 103.39264857437303,269.4270010305737 178,266 C 252.60735142562697,262.5729989694263 350.1257299896944,254.00549639299211 432,247 C 513.8742700103056,239.99450360700789 580.1044314668499,234.5510133974579 632,252 C 683.8955685331501,269.4489866025421 721.4565441429064,309.7904500171762 793,312 C 864.5434558570936,314.2095499828238 970.0693919615251,278.28718653383714 1055,255 C 1139.930608038475,231.71281346616286 1204.2658880109927,221.0608038474751 1265,225 C 1325.7341119890073,228.9391961525249 1382.8670559945035,247.46959807626246 1440,266 C 1440,266 1440,400 1440,400 Z"
      stroke="none"
      stroke-width="0"
      fill="#26262bff"
      class="transition-all duration-300 ease-in-out delay-150 path-1"
      transform="rotate(-180 720 200)"
    />
  </svg>
</div>

<div class="container-fluid" style="font-family: 'Exo'; background-color: #1b1c1c">
  <div class="container" id="features">
    <div class="row content mb-5 justify-content-center mb-5 pb-5">
      <div class="col-10 col-lg-5 p-3" data-aos="fade-up">
        <div class="row align-items-end">
          <div class="fs-2 col-12 mb-4 fw-bold">
            <i class="bi bi-stopwatch accent" style="font-size: 150%" /> S<span
              style="
                      text-decoration: underline;
                      text-decoration-color: #5865f2;
                      text-decoration-thickness: 15%;
                      text-underline-position: below;
                    ">et WHEN to delete the messages&#160;</span
            >
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            Choose from 4 different
            <a href="https://docs.eazyautodelete.xyz/config/mode" target="_blank">modes</a> that delete the messages.<br
            />You can delete the messages after a certain number of messages, a certain duration or many other criteria.
          </div>
        </div>
      </div>
      <div class="col-10 col-lg-5 mb-5 mb-lg-0 row ps-3 mt-5" data-aos="fade-up">
        <div class="col-6 pb-2 col-lg-9 ps-lg-5 ms-lg-5">
          <img
            src="/assets/gif/mode-1.gif"
            id="mode-1"
            class="rounded-3 animated-105 shadow"
            width="80%"
            alt="Visualization of deletion algorithm"
            loading="lazy"
          />
        </div>
        <div class="col-6 pb-2 col-lg-9">
          <img
            src="/assets/gif/mode-3.gif"
            class="img-fluid rounded-3 animated-105 shadow"
            width="70%"
            id="mode-2"
            alt="Visualization of deletion algorithm"
            loading="lazy"
          />
        </div>
      </div>
    </div>

    <hr />

    <div class="row content mb-5 justify-content-center mt-5 pt-5 mb-5 pb-5">
      <div class="col-10 col-lg-5 mb-5 mb-lg-0 row ps-3 mt-5" data-aos="fade-up">
        <div class="col-6 pb-2 col-lg-9">
          <img
            src="/assets/img/filters.png"
            class="rounded-3 animated-105 shadow"
            width="100%"
            alt="A list of available filters"
          />
        </div>
      </div>
      <div class="col-10 col-lg-5 p-3" data-aos="fade-up">
        <div class="row align-items-end">
          <div class="fs-2 col-12 mb-4 fw-bold">
            <i class="bi bi-funnel accent" style="font-size: 150%" /> S<span
              style="
                      text-decoration: underline;
                      text-decoration-color: #5865f2;
                      text-decoration-thickness: 15%;
                      text-underline-position: below;
                    ">et WHICH messages to delete&#160;</span
            >
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            You can choose from a large number of
            <a href="https://docs.eazyautodelete.xyz/config/filters" target="_blank">filters</a> that the messages must
            meet in order to be deleted.<br />Set whether
            <a href="https://docs.eazyautodelete.xyz/config/filter-behavior" target="_blank"
              >only one filter or all filters</a
            >
            must be met for a message to be deleted.
          </div>
        </div>
      </div>
    </div>

    <hr />

    <div class="row content justify-content-center mt-5 pt-5 mb-5 pb-5">
      <div class="col-10 col-lg-5 p-3" data-aos="fade-up">
        <div class="row align-items-end">
          <div class="fs-2 col-12 mb-4 fw-bold">
            <i class="bi bi-person-check accent" style="font-size: 150%" /> S<span
              style="
                      text-decoration: underline;
                      text-decoration-color: #5865f2;
                      text-decoration-thickness: 15%;
                      text-underline-position: below;
                    ">et WHOSE messages to delete&#160;</span
            >
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <a href="https://docs.eazyautodelete.xyz/config/ignore-roles" target="_blank">Ignore messages</a> from
            members with certain roles or delete messages from
            <a href="https://docs.eazyautodelete.xyz/config/filters" target="_blank">bots only</a>.<br />The many
            settings allow you to customize everything exactly to your needs.
          </div>
        </div>
      </div>
      <div class="col-10 col-lg-5 mb-5 mb-lg-0 row ps-3 mt-5" data-aos="fade-up">
        <div class="col-5 pb-2 col-lg-7">
          <img src="/assets/img/ignore.png" class="rounded-3 animated-105 shadow" width="100%" alt="Role selection" />
        </div>
        <div class="col-5 pb-2 col-lg-8 ps-lg-5 ms-lg-5">
          <img
            src="/assets/img/bots.png"
            class="img-fluid rounded-3 animated-105 shadow"
            alt="Toggle author is bot or author isnt bot"
          />
        </div>
      </div>
    </div>

    <div class="col-12 row text-center mt-5 pt-5 justify-content-center">
      <div
        class="col-7 col-md-5 col-lg-4 col-xl-3 fs-3 pt-2 pb-2 animated-105 shadow"
        style="background-color: #242424; border-radius: 20px"
      >
        <a href="/invite" style="color: #fff; text-decoration: none"
          ><i class="bi bi-arrow-right-circle-fill" /> G<a
            href="/invite"
            style="
                    color: #fff;
                    text-decoration: underline;
                    text-decoration-color: #5865f2;
                    text-decoration-thickness: 15%;
                    text-underline-position: below;
                  ">et started...&#160;</a
          ></a
        >
      </div>
    </div>
  </div>
</div>

<div style="background-color: #1b1c1c">
  <svg
    width="100%"
    height="100%"
    id="svg"
    viewBox="0 0 1440 400"
    xmlns="http://www.w3.org/2000/svg"
    class="transition duration-300 ease-in-out delay-150"
  >
    <path
      d="M 0,400 C 0,400 0,133 0,133 C 53.204397114393686,147.87873582961183 106.40879422878737,162.75747165922365 173,168 C 239.59120577121263,173.24252834077635 319.5692201992443,168.84884919271727 391,170 C 462.4307798007557,171.15115080728273 525.3143249742357,177.84713156990728 603,168 C 680.6856750257643,158.15286843009272 773.1734799038131,131.7626245276537 836,115 C 898.8265200961869,98.2373754723463 931.9917554105118,91.10237031947786 995,104 C 1058.0082445894882,116.89762968052214 1150.8594984541394,149.8278941944349 1230,158 C 1309.1405015458606,166.1721058055651 1374.5702507729302,149.58605290278257 1440,133 C 1440,133 1440,400 1440,400 Z"
      stroke="none"
      stroke-width="0"
      fill="#26262b88"
      class="transition-all duration-300 ease-in-out delay-150 path-0"
    />
    <path
      d="M 0,400 C 0,400 0,266 0,266 C 56.51803503950532,284.29543112332533 113.03607007901064,302.5908622466506 188,300 C 262.96392992098936,297.4091377533494 356.3737547234628,273.9319821367228 431,262 C 505.6262452765372,250.06801786327722 561.4689110271385,249.68120920645833 616,257 C 670.5310889728615,264.31879079354167 723.7506011679835,279.34318103744414 795,277 C 866.2493988320165,274.65681896255586 955.5286843009276,254.94606664376505 1040,246 C 1124.4713156990724,237.05393335623495 1204.1346616283065,238.8725523874957 1270,244 C 1335.8653383716935,249.1274476125043 1387.9326691858469,257.56372380625214 1440,266 C 1440,266 1440,400 1440,400 Z"
      stroke="none"
      stroke-width="0"
      fill="#26262bff"
      class="transition-all duration-300 ease-in-out delay-150 path-1"
    />
  </svg>
</div>

<div class="container-fluid">
  <div class="container text-center pb-5 mb-5">
    <div class="pb-2">
      <h3 class="fs-1 fw-bold">Trusted by large & <span class="accent">partnered</span> Servers</h3>
    </div>
    <div class="row justify-content-center pt-3 pt-lg-0">
      <div class="сol-10 col-md-5 col-lg-3 mt-2">
        <a href="https://discord.gg/dayzaftermath" target="_blank" style="text-decoration: none">
          <div style="background-color: #2c2c44" class="rounded animated-105">
            <div class="row pt-2 pb-2 ps-4">
              <div class="col-3">
                <img src="assets/img/dayz.webp" alt="DayZ Aftermath Discord Logo" class="img-fluid" />
              </div>
              <div class="col-9 text-start">
                <div>
                  <svg width="16" height="16" viewBox="0 0 16 15.2" class="me-2">
                    <path
                      fill="#5865F2"
                      fill-rule="evenodd"
                      d="M16 7.6c0 .79-1.28 1.38-1.52 2.09s.44 2 0 2.59-1.84.35-2.46.8-.79 1.84-1.54 2.09-1.67-.8-2.47-.8-1.75 1-2.47.8-.92-1.64-1.54-2.09-2-.18-2.46-.8.23-1.84 0-2.59S0 8.39 0 7.6s1.28-1.38 1.52-2.09-.44-2 0-2.59 1.85-.35 2.48-.8S4.78.28 5.53 0 7.2.83 8 .83s1.75-1 2.47-.8.91 1.64 1.53 2.09 2 .18 2.46.8-.23 1.84 0 2.59S16 6.81 16 7.6z"
                    />
                    <path
                      d="M10.59 6.4l-1.398.9c-.2.1-.3.1-.5 0-.1-.1-.299-.2-.399-.3-.4-.1-.699 0-.999.2l-.499.3-2.497 1.7c-.6.3-1.299.2-1.598-.4-.4-.5-.2-1.2.3-1.6l2.996-2c.799-.5 1.798-.7 2.697-.5.799.2 1.398.6 1.898 1.2.2.2.1.4 0 .5zM13.487 7.8c0 .4-.2.8-.5 1l-3.096 2c-.599.4-1.198.6-1.897.6-.3 0-.5 0-.8-.1-.799-.2-1.398-.6-1.897-1.2-.1-.2 0-.4.1-.5l1.398-.9c.1-.1.3-.1.4 0 .2.1.399.2.499.3.4 0 .7 0 .999-.2l.699-.4L11.39 7l.3-.2c.499-.3 1.298-.2 1.597.3.2.3.2.5.2.7z"
                      fill="#fff"
                    />
                  </svg>
                  <span class="fw-bold" style="color: white">DayZ Aftermath</span>
                </div>
                <div class="mt-1">
                  <svg
                    class="me-2"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 18.433a4.074 4.074 0 013.432-4.023l.178-.029a15.163 15.163 0 014.78 0l.178.029A4.074 4.074 0 0115 18.433c0 .865-.702 1.567-1.567 1.567H4.567A1.567 1.567 0 013 18.433zM12.5 7.5a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0z"
                      fill="rgba(154,161,181,0.16)"
                      data-fill="secondary"
                    />
                    <path
                      d="M3 18.433a4.074 4.074 0 013.432-4.023l.178-.029a15.163 15.163 0 014.78 0l.178.029A4.074 4.074 0 0115 18.433c0 .865-.702 1.567-1.567 1.567H4.567A1.567 1.567 0 013 18.433zM12.5 7.5a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0z"
                      stroke="#9B9D9F"
                      data-stroke="main"
                      stroke-width="1.5"
                    />
                    <path
                      d="M15 11a3.5 3.5 0 100-7m2.39 16h2.043c.865 0 1.567-.702 1.567-1.567a4.074 4.074 0 00-3.432-4.023v0a2.28 2.28 0 00-.359-.029h-.968"
                      stroke="#9B9D9F"
                      data-stroke="main"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                  <span style="color: white">29,900+</span>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>

      <div class="сol-10 col-md-5 col-lg-3 mt-2">
        <a href="https://discord.gg/apexclub" target="_blank" style="text-decoration: none">
          <div style="background-color: #2c2c44" class="rounded animated-105">
            <div class="row pt-2 pb-2 ps-4">
              <div class="col-3">
                <img src="assets/img/apex.webp" alt="Apex Club Discord Logo" class="img-fluid" />
              </div>
              <div class="col-9 text-start">
                <div>
                  <svg width="16" height="16" viewBox="0 0 16 15.2" class="me-2">
                    <path
                      fill="#5865F2"
                      fill-rule="evenodd"
                      d="M16 7.6c0 .79-1.28 1.38-1.52 2.09s.44 2 0 2.59-1.84.35-2.46.8-.79 1.84-1.54 2.09-1.67-.8-2.47-.8-1.75 1-2.47.8-.92-1.64-1.54-2.09-2-.18-2.46-.8.23-1.84 0-2.59S0 8.39 0 7.6s1.28-1.38 1.52-2.09-.44-2 0-2.59 1.85-.35 2.48-.8S4.78.28 5.53 0 7.2.83 8 .83s1.75-1 2.47-.8.91 1.64 1.53 2.09 2 .18 2.46.8-.23 1.84 0 2.59S16 6.81 16 7.6z"
                    />
                    <path
                      d="M10.59 6.4l-1.398.9c-.2.1-.3.1-.5 0-.1-.1-.299-.2-.399-.3-.4-.1-.699 0-.999.2l-.499.3-2.497 1.7c-.6.3-1.299.2-1.598-.4-.4-.5-.2-1.2.3-1.6l2.996-2c.799-.5 1.798-.7 2.697-.5.799.2 1.398.6 1.898 1.2.2.2.1.4 0 .5zM13.487 7.8c0 .4-.2.8-.5 1l-3.096 2c-.599.4-1.198.6-1.897.6-.3 0-.5 0-.8-.1-.799-.2-1.398-.6-1.897-1.2-.1-.2 0-.4.1-.5l1.398-.9c.1-.1.3-.1.4 0 .2.1.399.2.499.3.4 0 .7 0 .999-.2l.699-.4L11.39 7l.3-.2c.499-.3 1.298-.2 1.597.3.2.3.2.5.2.7z"
                      fill="#fff"
                    />
                  </svg>
                  <span class="fw-bold" style="color: white">APEX同好会</span>
                </div>
                <div class="mt-1">
                  <svg
                    class="me-2"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 18.433a4.074 4.074 0 013.432-4.023l.178-.029a15.163 15.163 0 014.78 0l.178.029A4.074 4.074 0 0115 18.433c0 .865-.702 1.567-1.567 1.567H4.567A1.567 1.567 0 013 18.433zM12.5 7.5a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0z"
                      fill="rgba(154,161,181,0.16)"
                      data-fill="secondary"
                    />
                    <path
                      d="M3 18.433a4.074 4.074 0 013.432-4.023l.178-.029a15.163 15.163 0 014.78 0l.178.029A4.074 4.074 0 0115 18.433c0 .865-.702 1.567-1.567 1.567H4.567A1.567 1.567 0 013 18.433zM12.5 7.5a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0z"
                      stroke="#9B9D9F"
                      data-stroke="main"
                      stroke-width="1.5"
                    />
                    <path
                      d="M15 11a3.5 3.5 0 100-7m2.39 16h2.043c.865 0 1.567-.702 1.567-1.567a4.074 4.074 0 00-3.432-4.023v0a2.28 2.28 0 00-.359-.029h-.968"
                      stroke="#9B9D9F"
                      data-stroke="main"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                  <span style="color: white">13,400+</span>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>

      <div class="сol-10 col-md-5 col-lg-3 mt-2">
        <a href="https://discord.gg/coolcatsclub" target="_blank" style="text-decoration: none">
          <div style="background-color: #2c2c44" class="rounded animated-105">
            <div class="row pt-2 pb-2 ps-4">
              <div class="col-3">
                <img src="assets/img/coolcats.webp" alt="Cool Cats Club Discord Logo" class="img-fluid" />
              </div>
              <div class="col-9 text-start">
                <div>
                  <svg width="16" height="16" viewBox="0 0 16 15.2" class="me-2">
                    <path
                      fill="#5865F2"
                      fill-rule="evenodd"
                      d="M16 7.6c0 .79-1.28 1.38-1.52 2.09s.44 2 0 2.59-1.84.35-2.46.8-.79 1.84-1.54 2.09-1.67-.8-2.47-.8-1.75 1-2.47.8-.92-1.64-1.54-2.09-2-.18-2.46-.8.23-1.84 0-2.59S0 8.39 0 7.6s1.28-1.38 1.52-2.09-.44-2 0-2.59 1.85-.35 2.48-.8S4.78.28 5.53 0 7.2.83 8 .83s1.75-1 2.47-.8.91 1.64 1.53 2.09 2 .18 2.46.8-.23 1.84 0 2.59S16 6.81 16 7.6z"
                    />
                    <path
                      d="M10.59 6.4l-1.398.9c-.2.1-.3.1-.5 0-.1-.1-.299-.2-.399-.3-.4-.1-.699 0-.999.2l-.499.3-2.497 1.7c-.6.3-1.299.2-1.598-.4-.4-.5-.2-1.2.3-1.6l2.996-2c.799-.5 1.798-.7 2.697-.5.799.2 1.398.6 1.898 1.2.2.2.1.4 0 .5zM13.487 7.8c0 .4-.2.8-.5 1l-3.096 2c-.599.4-1.198.6-1.897.6-.3 0-.5 0-.8-.1-.799-.2-1.398-.6-1.897-1.2-.1-.2 0-.4.1-.5l1.398-.9c.1-.1.3-.1.4 0 .2.1.399.2.499.3.4 0 .7 0 .999-.2l.699-.4L11.39 7l.3-.2c.499-.3 1.298-.2 1.597.3.2.3.2.5.2.7z"
                      fill="#fff"
                    />
                  </svg>
                  <span class="fw-bold" style="color: white">Cool Cats Club (18+)</span>
                </div>
                <div class="mt-1">
                  <svg
                    class="me-2"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 18.433a4.074 4.074 0 013.432-4.023l.178-.029a15.163 15.163 0 014.78 0l.178.029A4.074 4.074 0 0115 18.433c0 .865-.702 1.567-1.567 1.567H4.567A1.567 1.567 0 013 18.433zM12.5 7.5a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0z"
                      fill="rgba(154,161,181,0.16)"
                      data-fill="secondary"
                    />
                    <path
                      d="M3 18.433a4.074 4.074 0 013.432-4.023l.178-.029a15.163 15.163 0 014.78 0l.178.029A4.074 4.074 0 0115 18.433c0 .865-.702 1.567-1.567 1.567H4.567A1.567 1.567 0 013 18.433zM12.5 7.5a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0z"
                      stroke="#9B9D9F"
                      data-stroke="main"
                      stroke-width="1.5"
                    />
                    <path
                      d="M15 11a3.5 3.5 0 100-7m2.39 16h2.043c.865 0 1.567-.702 1.567-1.567a4.074 4.074 0 00-3.432-4.023v0a2.28 2.28 0 00-.359-.029h-.968"
                      stroke="#9B9D9F"
                      data-stroke="main"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                  <span style="color: white">6,400+</span>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>

      <div class="сol-10 col-md-5 col-lg-3 mt-2">
        <a href="https://discord.gg/fightory" target="_blank" style="text-decoration: none">
          <div style="background-color: #2c2c44" class="rounded animated-105">
            <div class="row pt-2 pb-2 ps-4">
              <div class="col-3">
                <img src="assets/img/fightory.webp" alt="The Fightory Discord Logo" class="img-fluid" />
              </div>
              <div class="col-9 text-start">
                <div>
                  <svg width="16" height="16" viewBox="0 0 16 15.2" class="me-2">
                    <path
                      fill="#5865F2"
                      fill-rule="evenodd"
                      d="M16 7.6c0 .79-1.28 1.38-1.52 2.09s.44 2 0 2.59-1.84.35-2.46.8-.79 1.84-1.54 2.09-1.67-.8-2.47-.8-1.75 1-2.47.8-.92-1.64-1.54-2.09-2-.18-2.46-.8.23-1.84 0-2.59S0 8.39 0 7.6s1.28-1.38 1.52-2.09-.44-2 0-2.59 1.85-.35 2.48-.8S4.78.28 5.53 0 7.2.83 8 .83s1.75-1 2.47-.8.91 1.64 1.53 2.09 2 .18 2.46.8-.23 1.84 0 2.59S16 6.81 16 7.6z"
                    />
                    <path
                      d="M10.59 6.4l-1.398.9c-.2.1-.3.1-.5 0-.1-.1-.299-.2-.399-.3-.4-.1-.699 0-.999.2l-.499.3-2.497 1.7c-.6.3-1.299.2-1.598-.4-.4-.5-.2-1.2.3-1.6l2.996-2c.799-.5 1.798-.7 2.697-.5.799.2 1.398.6 1.898 1.2.2.2.1.4 0 .5zM13.487 7.8c0 .4-.2.8-.5 1l-3.096 2c-.599.4-1.198.6-1.897.6-.3 0-.5 0-.8-.1-.799-.2-1.398-.6-1.897-1.2-.1-.2 0-.4.1-.5l1.398-.9c.1-.1.3-.1.4 0 .2.1.399.2.499.3.4 0 .7 0 .999-.2l.699-.4L11.39 7l.3-.2c.499-.3 1.298-.2 1.597.3.2.3.2.5.2.7z"
                      fill="#fff"
                    />
                  </svg>
                  <span class="fw-bold" style="color: white">The Fightory</span>
                </div>
                <div class="mt-1">
                  <svg
                    class="me-2"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 18.433a4.074 4.074 0 013.432-4.023l.178-.029a15.163 15.163 0 014.78 0l.178.029A4.074 4.074 0 0115 18.433c0 .865-.702 1.567-1.567 1.567H4.567A1.567 1.567 0 013 18.433zM12.5 7.5a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0z"
                      fill="rgba(154,161,181,0.16)"
                      data-fill="secondary"
                    />
                    <path
                      d="M3 18.433a4.074 4.074 0 013.432-4.023l.178-.029a15.163 15.163 0 014.78 0l.178.029A4.074 4.074 0 0115 18.433c0 .865-.702 1.567-1.567 1.567H4.567A1.567 1.567 0 013 18.433zM12.5 7.5a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0z"
                      stroke="#9B9D9F"
                      data-stroke="main"
                      stroke-width="1.5"
                    />
                    <path
                      d="M15 11a3.5 3.5 0 100-7m2.39 16h2.043c.865 0 1.567-.702 1.567-1.567a4.074 4.074 0 00-3.432-4.023v0a2.28 2.28 0 00-.359-.029h-.968"
                      stroke="#9B9D9F"
                      data-stroke="main"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                  <span style="color: white">1,900+</span>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>

  <div class="container text-center pt-5">
    <div class="pb-2">
      <h3 class="fs-1 fw-bold">Ready? Then what are you waiting for?</h3>
    </div>
    <div class="row justify-content-center pt-3 pt-lg-0">
      <button type="button" class="col-5 col-lg-2 btn btn-outline-primary btn-lg rounded-3 me-2" id="inviteButton">
        Add to Server
      </button>
      <button type="button" class="col-5 col-lg-2 btn btn-outline-secondary btn-lg rounded-3 ms-2" id="supportButton">
        Support Server
      </button>
    </div>
  </div>
</div>
