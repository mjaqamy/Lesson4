const order = "Order#1456; date=2026-01-26 09:07:05; amount=15.3";

// преобразовать строку в формат:
// Заказ № 1456 от 26/01/2026 09:07 на сумму 16 рублей

const numOrder = order.slice(order.indexOf("#") + 1, order.indexOf(";"));

const newDate = order.slice(order.indexOf("=") + 1, order.indexOf("=") + 11);

const elementsOfDate = newDate.split("-");
const day = elementsOfDate[2];
const months = elementsOfDate[1];
const year = elementsOfDate[0];

const time = order.slice(order.indexOf("=") + 12, order.indexOf(":") + 3);
const amount = Math.ceil(Number(order.slice(order.indexOf("amount=") + 7)));

const NewOrder =
  "Заказ № " + numOrder + " от " + `${day}/${months}/${year} ` + time + " на сумму " + `${amount}` + " рублей";
console.log(NewOrder);
