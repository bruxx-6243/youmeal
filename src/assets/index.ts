import burgerIcon from "./icons/burgers.png";
import snacksIcon from "./icons/snacks.png";
import hotDogIcon from "./icons/hot-dog.png";
import comboIcon from "./icons/combo.png";
import shawarmaIcon from "./icons/shawarma.png";
import pizzaIcon from "./icons/pizza.png";
import patatosIcon from "./icons/patatos.png";
import dessertsIcon from "./icons/dessert.png";
import sauceIcon from "./icons/sauces.png";

interface navigationProps {
  to: string;
  title: string;
  icon: string;
}

export const navigation: navigationProps[] = [
  {
    to: "/",
    title: "Бургеры",
    icon: burgerIcon,
  },
  {
    to: "/snacks",
    title: "Закуски",
    icon: snacksIcon,
  },
  {
    to: "/hot-dog",
    title: "Хот-доги",
    icon: hotDogIcon,
  },
  {
    to: "/combo",
    title: "Комбо",
    icon: comboIcon,
  },
  {
    to: "/shawarma",
    title: "Шаурма",
    icon: shawarmaIcon,
  },
  {
    to: "/pizza",
    title: "Пицца",
    icon: pizzaIcon,
  },
  {
    to: "/patatos",
    title: "Вок",
    icon: patatosIcon,
  },
  {
    to: "/dessert",
    title: "Десерты",
    icon: dessertsIcon,
  },
  {
    to: "/sauces",
    title: "Соусы",
    icon: sauceIcon,
  },
];
