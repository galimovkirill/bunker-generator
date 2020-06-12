const sexList = ["Мужчина", "Женщина"];
const ageList = Math.random();
const childFree = ["CHILD FREE", "NOT CHILD FREE"];

function selfRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomSex() {
  const index = selfRandom(0, 1);
  return sexList[index];
}

function getRandomAge() {
  let randomAge = selfRandom(18, 90);
  if (randomAge > 60) {
    randomAge = randomAge - 15;
  }
  return randomAge;
}

function getChildFree() {
  const index = selfRandom(0, 10);
  if (index > 2) {
    return childFree[1];
  } else {
    return childFree[0];
  }
}

function getRandomJob() {
  const index = selfRandom(0, jobList.length - 1);
  const randomJob = jobList[index];
  jobList.splice(index, 1);
  return randomJob;
}

function getRandomHealth() {
  const index = selfRandom(0, healthList.length - 1);
  const randomHealth = healthList[index];
  healthList.splice(index, 1);
  return randomHealth;
}

function getRandomCharacter() {
  const index = selfRandom(0, characterList.length - 1);
  const randomCharacter = characterList[index];
  characterList.splice(index, 1);
  return randomCharacter;
}

function getRandomHobby() {
  const index = selfRandom(0, hobbyList.length - 1);
  const randomHobby = hobbyList[index];
  hobbyList.splice(index, 1);
  return randomHobby;
}

function getRandomPhobia() {
  const index = selfRandom(0, phobiaList.length - 1);
  const randomPhobia = phobiaList[index];
  phobiaList.splice(index, 1);
  return randomPhobia;
}

function getRandomBaggage() {
  const index = selfRandom(0, baggageList.length - 1);
  const randomBaggage = baggageList[index];
  baggageList.splice(index, 1);
  return randomBaggage;
}

function getRandomAdditional() {
  const index = selfRandom(0, additionalList.length - 1);
  const randomAdditional = additionalList[index];
  additionalList.splice(index, 1);
  return randomAdditional;
}

function getRandomAction() {
  const index = selfRandom(0, actionList.length - 1);
  const randomAction = actionList[index];
  actionList.splice(index, 1);
  return randomAction;
}

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

for (let i = 0; i < 10; i++) {
  const blob = buildFile(getRandomPerson);
  downloadFile(blob, `Бункер${i}.txt`);
}
