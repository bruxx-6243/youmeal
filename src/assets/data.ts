import burger1 from "./images/burgers/01.png";
import burger2 from "./images/burgers/02.png";
import burger3 from "./images/burgers/03.png";
import burger4 from "./images/burgers/04.png";
import burger5 from "./images/burgers/05.png";
import burger6 from "./images/burgers/06.png";
import snack1 from "./images/snacks/01.png";
import snack2 from "./images/snacks/02.png";
import snack3 from "./images/snacks/03.png";
import hotdog1 from "./images/hotdogs/01.png";
import hotdog2 from "./images/hotdogs/02.png";
import hotdog3 from "./images/hotdogs/03.png";

export const products = [
  {
    id: 1,
    path: "",
    title: "Бургеры",
    items: [
      {
        id: 1,
        name: "Мясная бомба",
        price: 689,
        weight: 520,
        thumbnail: burger1,
      },
      {
        id: 2,
        name: "Супер сырный",
        price: 550,
        weight: 512,
        thumbnail: burger2,
      },
      {
        id: 3,
        name: "Сытный",
        price: 639,
        weight: 580,
        thumbnail: burger3,
      },
      {
        id: 4,
        name: "Тяжелый удар",
        price: 480,
        weight: 470,
        thumbnail: burger4,
      },
      {
        id: 5,
        name: "Вечная классика",
        price: 450,
        weight: 450,
        thumbnail: burger5,
      },
      {
        id: 6,
        name: "Итальянский",
        price: 560,
        weight: 510,
        thumbnail: burger6,
      },
    ],
  },
  {
    id: 2,
    path: "snacks",
    title: "Закуски",
    items: [
      {
        id: 7,
        name: "Начос",
        price: 250,
        weight: 220,
        thumbnail: snack1,
      },
      {
        id: 8,
        name: "Картошка фри",
        price: 245,
        weight: 180,
        thumbnail: snack2,
      },
      {
        id: 9,
        name: "Луковые кольца",
        price: 230,
        weight: 160,
        thumbnail: snack3,
      },
    ],
  },
  {
    id: 3,
    path: "hot-dog",
    title: "Хот-доги",
    items: [
      {
        id: 10,
        name: "Домашний хот-дог",
        price: 290,
        weight: 250,
        thumbnail: hotdog1,
      },
      {
        id: 11,
        name: "Жгучий хот-дог",
        price: 239,
        weight: 245,
        thumbnail: hotdog2,
      },
      {
        id: 12,
        name: "Классический хот-дог",
        price: 220,
        weight: 115,
        thumbnail: hotdog3,
      },
    ],
  },
  {
    id: 4,
    path: "combo",
    title: "Комбо",
    items: [],
  },
  {
    id: 5,
    path: "shawarma",
    title: "Шаурма",
    items: [],
  },
  {
    id: 6,
    path: "pizza",
    title: "Пицца",
    items: [],
  },
  {
    id: 7,
    path: "patatos",
    title: "Вок",
    items: [],
  },
  {
    id: 8,
    path: "dessert",
    title: "Десерты",
    items: [],
  },
  {
    id: 9,
    path: "sauces",
    title: "Соусы",
    items: [],
  },
];
