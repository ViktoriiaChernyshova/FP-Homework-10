// - Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….)

// let count ='';
// for (let num = 20; num<31; num +=0.5) {
//     count = `${count} ${num}`;
// } 
// console.log(count);

// - Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів

// let count = '';
// for (dol = 10, kurs = 27; dol<101; dol+=10) {
//     count = `${dol}$ * ${kurs} = ${dol * kurs}\n`;
//     console.log(count);
// }

// - Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N

// let count = '';
// let num = +prompt('Enter your number');
// for (sq = 1; sq<101; sq++) {
//     if ((sq**2) > num) continue;
//     count = `${count} ${sq},`;
// }
// console.log(count);

// - Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).

// let count = '';
// let num = +prompt('Enter your number');
//     for (a = 2; a<=num ; a++) {
//         for (b = 2; b < a; b++) {
//             if (a % b === 0);
//         }
//         if (num === a) {
//             count = 'Yes';
//         } else {
    //         count = 'No';
    //     }
//     }
// console.log (count);

// - Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна)

let count = ''; 
let num = +prompt('Enter your number');
for (a = 3; a<=num; a *= 3) {
    if (num === a) {
        count = 'Yes';
    } else {
        count = 'No';
    }
}
console.log(count);