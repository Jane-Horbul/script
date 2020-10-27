const orderPieces = 7;

const credits = 23580;
const pricePerDroid = 3000;
const CANCELED_BY_USER = "Отменено пользователем!";
const ACCESS_DENIED = "Недостаточно средств на счету!";

let totalPrice;
totalPrice = orderPieces * pricePerDroid;
let balanceCredit;
balanceCredit = credits - totalPrice;
let message;

if (orderPieces === null) {
  message = CANCELED_BY_USER;
} else if (orderPieces <= 7) {
  message = `Вы купили ${orderPieces} дроидов, на счету осталось ${balanceCredit} кредитов`;
} else if (orderPieces > 7) {
  message = ACCESS_DENIED;
}

console.log(message);
