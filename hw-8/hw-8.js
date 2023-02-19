
// Задание 1. Написать функцию, которая на вход принимает массив чисел и callback-функцию. Функции, вычисляющие произведение и сумму чисел массива, также необходимо реализовать.

// const  arrNumber = [2,4,6,8,10,12]

// function getResult(arr, operation) {
//     return Math.round(operation(arr));
// }

// const sum = (arr) => arr.reduce((acc, rec) => acc + rec);
// const mult = (arr) => arr.reduce((acc, rec) => acc * rec, 1);



// console.log(getResult(arrNumber, mult)); 
// console.log(getResult(arrNumber, sum)); 

// Задание 2. Необходимо отсортировать элементы массива в порядке увеличения возраста.

// const users = [
// 	{name: 'Jon', age: 22},
// 	{name: 'Richard', age: 18},
// 	{name: 'Anton', age: 32},
// 	{name: 'Lida', age: 23},
// 	{name: 'Bob', age: 44}
// ];

// function sort(arr, compareFunction) {
//     for (let i = 0; i < arr.length; i++) {
// 		for (let j = i; j < arr.length; j++) {
// 			const condition = compareFunction ? compareFunction(arr[i], arr[j]) > 0 
//             : arr[i].toString() > arr[j].toString();
// 				if (condition) {
// 				let temp = arr[i];
//                 arr[i] = arr[j];
//                 arr[j] = temp;
//             }
//         }
//     }
//     return arr;
// }

// function compareUser(a, b) { 
// 	if (a.age > b.age) return 2;
// 	if (a.age < b.age) return -5;
// 	return 0;
// }

// users.sort(compareUser); 
// console.table(users);


// Задание 3. Создайте функцию each, которая может производить любые манипуляции над переданным массивом в зависимости от переданной callback-функции. Реализуйте несколько callback-функций, которые будут делать следующее: переорачивать массив и преобразовывать все элементы к числу.

// const arr = [1, '4', 9, 'two'];
// const arr2 = [1, '4', false, 9, 'two'];

// const each = (arr, operation) => operation(arr); 

// const reverseArray = (arr) => arr.reverse();

// const numberArray = (arr) => {
//     let resultArray = [];

//     arr.map((el) => {
//         if (!isNaN(el)) {
//             resultArray.push(+el);
//         }
//     });

//     return resultArray;
// }

// console.log(each(arr,reverseArray));
// console.log(each(arr2,numberArray));


// Задание 4. Напишите программу, которая на протяжении 30 секунд, каждые 3 секунды, будет выводить в консоль текущую дату. Последней строкой должно выводиться сообщение «30 секунд прошло».

// function printDate() {
//   let currentDate = new Date();
//   console.log(currentDate);
// }

// printDate()

// function timer() {
//   const interval = setInterval(printDate, 3000);
//   setTimeout(() => {
//       clearInterval(interval);
//       console.log('Время истекло!')
//   }, 30000 , interval)
// };

// timer();

// Задание 5. исправить данный код так, чтобы выводилась верная последовательность:'Звоню!','Идут гудки…', 'Разговор'

// function calling() {
//   console.log('Звоню!')
// };

// function beeps(callback) {
//   setTimeout(() => {
//       console.log('Идут гудки...')
//       callback()
//   }, 1000);

// }

// function talk() {
//   console.log('Разговор')
// }

// calling();
// beeps(talk);



