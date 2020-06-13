function buildFile(person) {
  const strings = [];
  const item = person();

  strings.push(`
    1) Общие данные: ${item.sex}, ${item.age}, ${item.childFree}, ${item.orientation} \r\n
    2) Профессия: ${item.job} \r\n
    3) Состояние здоровья: ${item.health} \r\n
    4) Черта характера: ${item.character} \r\n
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
