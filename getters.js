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
  const index = selfRandom(1, 100);
  if (index > 5) {
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

function getRandomOrientation() {
  const index = selfRandom(1, 100);
  if (index < 2) {
    return orientationList[1];
  }
  if (index >= 2 && index < 4) {
    return orientationList[2];
  }
  if (index >= 4 && index < 6) {
    return orientationList[3];
  }
  if (index >= 6 && index < 8) {
    return orientationList[4];
  }
  if (index >= 8 && index < 10) {
    return orientationList[5];
  } else {
    return orientationList[0];
  }
}

// function getChildFree() {
//   const index = selfRandom(0, 10);
//   if (index > 2) {
//     return childFree[1];
//   } else {
//     return childFree[0];
//   }
// }
