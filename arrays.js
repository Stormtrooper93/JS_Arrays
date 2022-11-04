`use strict`;


//1. Задача на повернення ініціалів для кожного імені з масиву, посортованих в алфавітному порядку:

const userNames = ["Петрик Ольга Іванівна", "Гнатюк Петро Антонович", "Рудко Андрій Опанасович"];
const initials = userNames.map((user) => user.split(" ").map((n)=>n[0]).join("."));

console.log(initials); // [ "Г.П.А", "П.О.І", "Р.А.О"]



//2. Задача на розворот числа:  

const currentMaxValue = 4589;
let reverseMaxValue;

reverseMaxValue = currentMaxValue
    .toString()
    .split("")
    .reverse()
    .join("");

reverseMaxValue = +reverseMaxValue;

console.log(reverseMaxValue); // 9854
console.log(typeof reverseMaxValue); // 'number'



//3. Задача на знаходження добутку масиву чисел з невідомою глибиною вкладеності:

const resultsArray = [1, 2, [3, [4]]];
let productOfArray;

const initialValue = 1;

flatArray = resultsArray.flat(Infinity);

productOfArray = flatArray.reduce((a, b) => a*b, initialValue);

console.log(productOfArray); // 24