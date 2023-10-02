// Lab_4.3
// Гринчук Тарас
// Лабораторна робота № 4.3
// Табуляція функції, заданої формулою: функція з параметрами
// Варіант №4

// Ініціалізуємо змінні
let F, x, xp, xk, dx, a, b, c;

// Отримуємо значення
a = parseInt(prompt("Введіть значення a:"));
b = parseInt(prompt("Введіть значення b:"));
c = parseInt(prompt("Введіть значення c:"));
xp = parseInt(prompt("Введіть значення xp:"));
xk = parseInt(prompt("Введіть значення xk:"));
dx = parseInt(prompt("Введіть значення dx:"));

console.log("---------------------------");
console.log("|" + "\tx\t" + "|" + "\tF\t" + "|");
console.log("---------------------------");

x = xp;

while (x <= xk) {
   if (c < 0 && x !== 0) {
      F = -a * x - c;
   } else if (c > 0 && x === 0) {
      F = (x - a) / -c;
   } else {
      F = (b * x) / (c - a);
   }
   console.log("|\t" + x + "\t|\t" + F.toFixed(3) + "\t|");
   x += dx;
}

console.log("---------------------------");
