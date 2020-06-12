const sexList = ["Мужчина", "Женщина"];
const ageList = Math.random();
const childFree = ["CHILD FREE", "NOT CHILD FREE"];

function getRandomPerson() {
  const person = {
    sex: getRandomSex(),
    age: getRandomAge(),
    childFree: getChildFree(),
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

function buildFile(person) {
  const strings = [];
  const item = person();

  strings.push(`
    1) Общие данные: ${item.sex}, ${item.age}, ${item.childFree} \r\n
    2) Профессия: ${item.job} \r\n
    3) Состояние здоровья: ${item.health} \r\n
    4) Человеческая черта: ${item.character} \r\n
    5) Хобби: ${item.hobby} \r\n
    6) Фобия: ${item.phobia} \r\n
    7) Багаж: ${item.baggage} \r\n
    8) Дополнительная информация: ${item.additional} \r\n\r\n

    Карты действия: \r\n
    1) ${item.action_1} \r\n
    2) ${item.action_2} \r\n
  `);

  return new Blob([strings.join("\n")], { type: "text/plain" });
}

function downloadFile(blob, fileName) {
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.style = "display: none";
  a.href = url;
  a.download = fileName;

  document.body.appendChild(a);

  a.click();
  a.remove();

  URL.revokeObjectURL(url);
}

// Form

const counterInput = document.querySelector("#count_characters");

const downloadBtn = document.querySelector("#download-btn");
downloadBtn.addEventListener("click", (e) => {
  const filesCount = +counterInput.value;
  e.preventDefault();
  for (let i = 0; i < filesCount; i++) {
    const blob = buildFile(getRandomPerson);
    downloadFile(blob, `Бункер${i}.txt`);
  }
});
