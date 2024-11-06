#!/usr/bin/node

function fibs(n) {
   if (n === 0) return [];
   if (n === 1) return [0];

   let fibbonacci = [0, 1];

   for (let i = 2; i < n; i++) {
    fibbonacci.push(fibbonacci[i - 1] + fibbonacci[i -2]);
   }
   return fibbonacci;
}

console.log(fibs(8));