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

  // const checkbox = document.querySelectorAll(".form_row__checkbox input");
  // checkbox.forEach((item) => {
  //   item.disabled = true;
  //   // if (!item.checked) {
  //   //   let id = item.id;
  //   //   person[id] = null;
  //   // }
  // });

  return person;
}

// Tabs switcher
(function () {
  const tabLinks = document.querySelectorAll(".generation_links__item");
  const tabItems = document.querySelectorAll(".generation_tabs__item");
  tabLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      tabLinks.forEach((item) => {
        item.classList.remove("active-link");
      });
      link.classList.add("active-link");

      tabItems.forEach((tab) => {
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
    for (let i = 0; i < FILES_COUNT; i++) {
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
    const FILES_COUNT = COUNTER.value;

    for (let i = 0; i < FILES_COUNT; i++) {
      const PERSON = getRandomPerson();
      const CHARACTER_TYPE = SELECT[SELECT.selectedIndex].text;
      const NEW_CHARACTER = PERSON[SELECT.value];

      downloadFile(
        `Характеристика_${i}`,
        `Ваша новая характеристика «${CHARACTER_TYPE.toUpperCase()}» - ${NEW_CHARACTER}`
      );
    }
  });
})();
