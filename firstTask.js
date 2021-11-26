/*
Напишите программу, которая выводит на экран числа от 1 до 100.
При этом вместо чисел, кратных трем, программа должна выводить слово Fizz,
а вместо чисел, кратных пяти — слово Buzz.
Если число кратно пятнадцати, то программа должна выводить слово FizzBuzz.
*/

// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// Fizz Buzz
// 16
// 17
// ...

var end = 100;
var Fizz = "Fizz";
var Buzz = "Buzz";

for ( i = 1; i <= end; i ++ ) {

    if (i % 15 === 0) {
        console.log(`${Fizz} ${Buzz}`)
        continue
    }
    
    if (i % 3 === 0) {
        console.log(Fizz)
        continue
    }

    if (i % 5 === 0) {
        console.log(Buzz)
        continue
    }


    console.log (i);
}