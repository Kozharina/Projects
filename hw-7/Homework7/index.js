
// Задание 1. Преобразуйте строку js в верхний регистр JS.

// const line = 'js';

// console.log(line.toUpperCase());

// Задание 2. Создайте функцию, которая в качестве параметров принимает массив строк и строку. Возвращать функция должна новый массив, содержащий только те элементы массива, которые начинаются с переданной строки.

// const arrStart1 = ['Кошка', 'Кит', 'Комар', 'Носорог'];
// const arrStart2 = ['яблоко', 'груша', 'гриб', 'огурец'];
// const arrStart3 = ['Дом', 'Банк', 'Больница', 'Театр'];

// const searchStart = (arr, str) => {
//     const newArray = []
//     arr.forEach((arr) => {
//         if (arr.toLowerCase().startsWith(str.toLowerCase())) {
//             newArray.push(arr);
//         }
//     });
//     return newArray;
// }

// console.log(searchStart(arrStart1, 'ко'));
// console.log(searchStart(arrStart2, 'гру'));
// console.log(searchStart(arrStart3, 'Кино'));


// Задание 3. Округлите число 32.58884

// const number = 32.58884

// console.log(Math.floor(number)); // округляем к меньшему числу
// console.log(Math.ceil(number)); // округляем к большему числу
// console.log(Math.round(number)); // до ближайшего целого

// Задание №4 Даны числа 52, 53, 49, 77, 21, 32. Необходимо найти среди этих чисел наименьшее и наибольшее числа и вывести их в консоль.

// const rowNumbers = [52, 53, 49, 77, 21, 32];

// console.log(`${Math.max(...rowNumbers)}` + ' максимальное число'); 
// console.log(`${Math.min(...rowNumbers)}`+ ' минимальное число');


// Задание №5 Создайте функцию, которая будет выводить в консоль рандомное число от 1 до 10.

// const arrRandom = (max,min) =>{
//   const numberRandom = (Math.round(Math.random()*(max-min) + min)) 
//    console.log(numberRandom)
// };

//  arrRandom(10,1);

// Задание №6 Напишите функцию, которая будет принимать на вход целое число, а возвращать массив случайных целых чисел от 0 до переданного числа.

// arr =[];

// const getRandomArrNumbers = (userNumber) => {
//   for (let i=0; i < Math.floor(userNumber/2); i++) {
//     arr.push(Math.round(Math.random()*userNumber));
   
//   }
// }
// console.log(getRandomArrNumbers(7));
// console.log(arr);

// Задание №7 Напишите функцию, которая на вход принимает 2 целых числа, а в качестве результата возвращает случайное целое число в этом диапазоне.

// const arrRandom = (min, max) => userRandomNumber = (Math.round(Math.random()*(max-min) + min));

// console.log(arrRandom (4, 25));

// Задание №8 Выведите в консоль текущую дату в стандартном режиме. Используйте один из трех рассмотренных в уроке способов.

// let currentDate = new Date();
// console.log(currentDate);

// Задание №9 Создайте переменную currentDate и сохраните в нее текущую дату. Выведите дату, которая наступит через 73 дня после текущей.

  // let currentDate = new Date(2023, 2, 17);
  // currentDate.setDate(currentDate.getDate() + 73);

  // console.log(currentDate);

// Задание №10 

// const months = ["января", "февраля", "марта", "апреля", "майя", "июня",
// "июля", "августа", "сентября", "октября", "ноября", "декабря"];

// let myDate = new Date();
// let fullDate = "Сегодня: " + myDate.getDate() + 
// " " + months[myDate.getMonth()] + 
// " " + myDate.getFullYear() + 
// " " + myDate.getHours() +
// ":" + myDate.getMinutes() +
// ":" + myDate.getSeconds();

// console.log(fullDate); 

// Задание №11 
