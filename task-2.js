'use strict';

// Напиши функцию logItems(array), которая получает массив и использует цикл for, 
// который для каждого элемента массива будет выводить в консоль сообщение в формате [номер элемента] - [значение элемента].

// Нумерация должна начинаться с 1. К примеру для первого элемента массива ['Mango', 'Poly', 'Ajax'] с индексом 0 будет выведено '1 - Mango',
//  а для индекса 2 выведет '3 - Ajax'.

// 2задание: let count лишний, у тебя ведь есть уже i, 
// небольшая поправка и получится номер лементат в массиве

const logItems = function (array) {
  let countForElement = 0;
  for (let i = 1; i <= array.length; i += 1) {
    console.log(`${i} - ${array[countForElement]}`);
    countForElement += 1;
  }
}

logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);