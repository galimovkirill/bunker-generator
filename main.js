function getRandomPerson() {
  const person = {
    sex: getRandomSex(),
    age: getRandomAge(),
    childFree: getChildFree(),
    orientation: getRandomOrientation(),
    job: getRandomJob(),
    health: getRandomHealth(),
    character: getRandomCharacter(),
    hobby: getRandomHobby(),
    phobia: getRandomPhobia(),
    baggage: getRandomBaggage(),
    additional: getRandomAdditional(),
    action_1: getRandomAction(),
    action_2: getRandomAction(),
  };

  return person;
}

// Tabs switcher
(function () {
  const TAB_LINKS = document.querySelectorAll(".generation_links__item");
  const TAB_ITEMS = document.querySelectorAll(".generation_tabs__item");
  TAB_LINKS.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      TAB_LINKS.forEach((item) => {
        item.classList.remove("active-link");
      });
      link.classList.add("active-link");

      TAB_ITEMS.forEach((tab) => {
        tab.classList.remove("shown");
        if (tab.dataset.tab === e.target.dataset.tab) {
          tab.classList.add("shown");
        }
      });
    });
  });
})();

// Form Person
(function () {
  const COUNTER = document.querySelector("#generation_persons__count");
  const DOWNLOAD_BTN = document.querySelector("#generation_persons_download");

  DOWNLOAD_BTN.addEventListener("click", (e) => {
    e.preventDefault();
    const FILES_COUNT = +COUNTER.value;

    for (let i = 1; i <= FILES_COUNT; i++) {
      let CONTENT = setContent(getRandomPerson);
      downloadFile(`Бункер_${i}.txt`, CONTENT);
    }
  });
})();

// Form Characters
(function () {
  const COUNTER = document.querySelector("#generation_characters__count");
  const SELECT = document.querySelector("#generation_characters__select");
  const DOWNLOAD_BTN = document.querySelector(
    "#generation_characters_download"
  );

  DOWNLOAD_BTN.addEventListener("click", (e) => {
    e.preventDefault();
    const FILES_COUNT = COUNTER.value;

    for (let i = 1; i <= FILES_COUNT; i++) {
      const PERSON = getRandomPerson();
      const CHARACTER_TYPE = SELECT[SELECT.selectedIndex].text;
      const NEW_CHARACTER = PERSON[SELECT.value];

      downloadFile(
        `${CHARACTER_TYPE.toUpperCase()}_${i}`,
        `Ваша новая характеристика «${CHARACTER_TYPE.toUpperCase()}» - ${NEW_CHARACTER}`
      );
    }
  });
})();

// Form Bunker
(function () {
  const GENERATE_BTN = document.querySelector("#generation_bunker");
  GENERATE_BTN.addEventListener("click", (e) => {
    e.preventDefault();
    const PARAGRAPH = document.querySelector(".bunker_info");
    const STORY = getRandomStory();
    const DURATION = getRandomStayDuration();
    const SURVIVORS = getRandomSurvivors();
    const AREA = getRandomArea();
    const ROOM_1 = getRandomRoom();
    const ROOM_2 = getRandomRoom();
    const BAGGAGE_1 = getRandomBaggage();
    const BAGGAGE_2 = getRandomBaggage();

    PARAGRAPH.innerHTML = `<b>СЮЖЕТ</b> <br> ${STORY} <br>`;
    PARAGRAPH.innerHTML += `<b>Длительность пребывания в бункере: </b> ${DURATION} <br>`;
    PARAGRAPH.innerHTML += `<b>Выжившие люди: </b> ${SURVIVORS} <br>`;
    PARAGRAPH.innerHTML += `<b>Площадь бункера: </b> ${AREA} кв.м. <br>`;
    PARAGRAPH.innerHTML += `<b>Комнаты в бункере:</b> ${ROOM_1}, ${ROOM_2} <br>`;
    PARAGRAPH.innerHTML += `<b>В бункере вы также нашли:</b> ${BAGGAGE_1}, ${BAGGAGE_2} <br>`;
  });
})();
