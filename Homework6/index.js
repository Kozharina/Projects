
// Задание 1. Необходимо создать цикл, который будет выводить элементы массива до тех пор, пока не встретит значение 10. После вывода значения 10 в консоль цикл должен прекратить свою работу.

// const numbs = [1, 5, 4, 10, 0, 3];

// for (let i = 0; i < numbs.length; i++) {
// 	console.log(numbs[i]);
//  if (numbs[i] == 10) break;
// }

// Задание 2. Дан массив: [1, 5, 4, 10, 0, 3]. Найдите позицию числа 4 в этом массиве.

// const numbs1 = [1, 5, 4, 10, 0, 3];
// console.log(numbs1.indexOf(4));

// Задание 3. С помощью метода join выведите элементы массива через пробел (пустую строку ' ').

// const numbs3 = [1, 3, 5, 10, 20];
// console.log(numbs3.join(' '));

// Задание №4 

// let numbers = []

// const arrRandom = (arrNumbers, length, min, max) =>{
//   for (let i=0; i < length; i++) {
//     arrNumbers[i] = Math.round(Math.random()*(max-min) + min);

//   }
// }
// arrRandom(numbers, 10 , 0, 10 ) 
// console.log(numbers)


//  const numbersOdd = numbers.filter(item => {
//     return item % 2 === 0
// })

// console.log(numbersOdd)

// Задание №5 С помощью вложенных циклов создайте многомерный массив вида: [[1, 1, 1], [1, 1, 1], [1, 1, 1]].

// let array = [];

// for (let x = 0; x < 3; x++) {
// 	array[x] = [];

// 	for (let y = 0; y < 3; y++) {
// 		array[x].push(1); 
// 	}
// }
// console.log(array);

// Задание №6 Дан массив: [1, 1, 1]. Добавьте в конец массива значения 2, 2, 2.

// let numbersOne = [1, 1, 1]; 

// numbersOne.push(2, 2, 2); 
// console.log(numbersOne);

// Задание №7 Дан массив:[9, 8, 7, 'a', 6, 5].С помощью метода sort отсортируйте массив и удалите букву 'a' из данного массива.

// let arr = [9, 8, 7, 'a', 6, 5]; 
// arr = arr.sort();

// console.log(arr.pop());
// console.log(arr);

// Задание №8 Пользователь с клавиатуры вводит число от 1 до 10. Необходимо проверить, содержится ли введенное пользователем число в данном массиве.

// let userNumber = Number(prompt('Введите число от 0 до 10'));

// const arrNumber = [9, 8, 7, 6, 5];

// const findNumber = (array) => {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === userNumber) {
//       return 'Число содержится в массиве';
//     }
// 		else {
// 			return 'Число не содержится в массиве';
// 		}
//   }
// };

// console.log(findNumber(arrNumber));

// Задание №9 Дана строка: 'abcdef'.Необходимо, чтобы программа вывела в консоль 'fedcba'.

// const userString = 'abcdef';

// const reverseString = userString.split('').reverse().join('');

// console.log(reverseString);

// Задание №10 

// let numbers3 = [20, 34, 46, 54, 56, 78];  

// const getAverage = numbers3 => {
// const sum = numbers3.reduce((i, number) => i + number, 0);
// const length = numbers3.length;
// 	return sum / length;
// }

// console.log(getAverage(numbers3))

// Задание №11 Дан массив: [[1, 2, 3,],[4, 5, 6]].Выведите в консоль массив вида: [1, 2, 3, 4, 5, 6].

// const arr3 =[
// 	[1, 2, 3,],
// 	[4, 5, 6]
// ];

// console.log(arr3.flat());

// Задание №12 

// const generateArray = (min, max) => (
//   [...new Array(min, max)]
//     .map(() => Math.round(Math.random() * max))
// );

// const numbers5 = generateArray(1, 10);
// console.log(numbers5); 

// for (let i = 0; i < numbers5.length-1; i++) { 
// 	console.log(`Сумма элементов равна ${numbers5[i]+numbers5[i+1]}`);
// }
//   console.log(`[${numbers5.join(', ')}]`);
