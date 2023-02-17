// https://prog-center.pro/frontend/3
// Напишите цикл for, который выводит числа в консоль от 0 до 10.

// for (let i = 0; i < 11 ; i++){
//    console.log(i);
// }

// https://prog-center.pro/frontend/4
// Напишите цикл for, который выводит числа в консоль от 0 до 10 c шагом 2.

// for (let i = 0; i < 11; i+=2){
//     console.log(i);
// }

// https://prog-center.pro/frontend/5
// Напишите цикл for, который выводит числа в консоль от 5 до 10.

// for (let i = 5; i < 11 ; i++){
//     console.log(i);
// }

// https://prog-center.pro/frontend/6
// Напишите цикл for, который выводит числа в консоль от 10 до 0.

// for (let i = 10; i >=0; i--){
//     console.log(i);
// }

// https://prog-center.pro/frontend/7
// В программе заданы две переменные n и m с числовым значением каждая. Напишите цикл, который выводит в консоль числа от большего числа до меньшего,

// for (let i = Math.max(n, m); i >= Math.min(n, m); i--) {
//     console.log(i);
//   }


// https://prog-center.pro/frontend/8
// В программе заданы две переменные n и m с числовым значением каждая. Число n больше числа m. Напишите цикл, который выводит в консоль все четные числа от m до n. 

// for (let i = m; i <= n; i++){
//     if (i % 2 === 0){
//       console.log(i);
//     }
//   }


// https://prog-center.pro/frontend/9
// В программе заданы две переменные n и m с числовым значением каждая. Напишите цикл, который считает сумму четных чисел и нечетных чисел от n до m. Суммы выведите в консоль (в начале сумму четных чисел, а затем сумму нечетных). 


// ?????



// https://prog-center.pro/frontend/10
// В программе задана переменная n. Напишите программу, которая с помощью цикла считает сумму чисел от 1 до n и выводит в консоль.

// let result = 0;

// for (let i = 1; i <= n; i++){
//   result += i;
// }

// console.log(result);



// https://prog-center.pro/frontend/11
// Напишите функцию power, которая в качестве аргумента n принимает число и возвращает квадрат этого числа.

// function power(n) {
//     return n * n;
//   }



// https://prog-center.pro/frontend/13
// Напишите функцию, max_number, которая принимает два аргумента с числовым значением и возвращает большее значение.

// function max_number(value, power){
//     if(value > power){
//         return value
//     }else{
//         return power
//     }
// }


// https://prog-center.pro/frontend/14
// Напишите функцию, range, которая принимает два аргумента (n и m) с числовым значением и возвращает массив с числами от меньшего до большего -1.

// function range(n, m) {
//     if (n > m) {
//       [n, m] = [m, n];
// }
      
// const massiv = [];
//     for (let i = n; i < m; i++) {
//       massiv.push(i);
//  }
      
//     return massiv;
// }
