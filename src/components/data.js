import { contentBuyTicket } from "./content";

let places = [
  [300, 300, 400, 600, 600, 500, 400, 50],
  [300, -300, 500, 500, 500, 500, 300, 300],
  [200, 200, 300, 500, 500, 400, 200, 200],
  [100, 200, 300, 300, 400, 300, 200, 100],
  [100, 200, 300, 300, 400, 300, -200, 100],
  [100, -200, 300, 300, 400, 300, 200, 100],
  [100, 200, 300, 300, 300, 200, 200, 100],
];

let performance = {
  title: 'Опера-минуэт: "Пёс да лис"',
  date: "20-10-2020",
  place: "Наш театр",
  hall: "Малый зал",
  raws: 7,
  columns: 8,
  id: "Svinopas 20-10-2020",
  freePlaces: places,
};

performance.buy = function (raw, column) {
  this.freePlaces[raw][column] = 0 - this.freePlaces[raw][column];
};

export { performance };
