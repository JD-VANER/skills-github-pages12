const items = [
  "Пошёл нахуй",
  "Йох",
  "т110e5",
  "t110e3",
  "t110e4",
  "leopad 1",
  "e 50 m",
  "e 100",
  "vk 72",
  "grille 15",
  "t100lt",
  "oj 260",
  "oj 268/4",
  "fv4002",
  "fv215d",
  "fv215d 183",
  "fv205",
  "fv4005",
  "type 71",
  "wz 113",
  "b-c 25t",
  "amx 50b",
  "кран",
];

function getRandomItem(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

const randomItem = getRandomItem(items);
console.log("Случайный инвалид: " + randomItem);
