function downloadFile(filename, text) {
  var element = document.createElement("a");
  element.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," + encodeURIComponent(text)
  );
  element.setAttribute("download", filename);

  element.style.display = "none";
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

function setContent(person) {
  const item = person();

  let content = `
    * Общие данные: ${item.sex}, ${item.age} \r\n
    * Сексуальная ориентация: ${item.childFree}, ${item.orientation} \r\n
    * Профессия: ${item.job} \r\n
    * Состояние здоровья: ${item.health} \r\n
    * Черта характера: ${item.character} \r\n
    * Хобби: ${item.hobby} \r\n
    * Фобия: ${item.phobia} \r\n
    * Багаж: ${item.baggage} \r\n
    * Дополнительная информация: ${item.additional} \r\n\r\n

    Карты действия: \r\n
    * ${item.action_1} \r\n
    * ${item.action_2} \r\n
  `;

  return content;
}
