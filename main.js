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

  const checkbox = document.querySelectorAll(".form_row__checkbox input");
  checkbox.forEach((item) => {
    item.disabled = true;
    // if (!item.checked) {
    //   let id = item.id;
    //   person[id] = null;
    // }
  });

  console.log(person);

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
  const personCounter = document.querySelector("#generation_persons__count");
  const downloadPersonsBtn = document.querySelector(
    "#generation_persons_download"
  );

  downloadPersonsBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const filesCount = +personCounter.value;
    for (let i = 0; i < filesCount; i++) {
      const blob = buildFile(getRandomPerson);
      downloadFile(blob, `Бункер_${i}.txt`);
    }
  });
})();

// Form Characters
