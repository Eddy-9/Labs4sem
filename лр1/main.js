//Задача №1 Приведение типов данных
console.log("Задача №1 Приведение типов данных");

    console.log(typeof("салат"));
// Предположение: String
// Фактический: String

    console.log(typeof(9));
// Предположение: number
// Фактический: number

    console.log(typeof(1.2));
// Предположение: number
// Фактический: number

    console.log(typeof(NaN));
// Предположение: number
// Фактический: number

    console.log(typeof("Hello World"));
// Предположение: string
// Фактический: string

    console.log(typeof(true));
// Предположение: boolean
// Фактический: boolean

    console.log(typeof(2 != 1));
// Предположение: boolean
// Фактический: boolean

    console.log("сыр" + "ы");
// Предположение: сыры
// Фактический: сыры

    console.log("сыр" - "ы");
// Предположение: NaN
// Фактический: NaN

    console.log("2" + "4");
// Предположение: 24
// Фактический: 24

    console.log("2" - "4");
// Предположение: NaN
// Фактический: -2

    console.log("Сэм" + 5);
// Предположение: Сэм5
// Фактический: Сэм5

    console.log("Сэм" - 5);
// Предположение: NaN
// Фактический: NaN

    console.log(99 * "шары");
// Предположение: NaN
// Фактический: NaN


//Задача №2 Прямоугольник
console.log("Задача №2 Прямоугольник");

let a = Number(prompt('Задача №2 Прямоугольник' + '\nВведите длину а'));
let b = Number(prompt('Задача №2 Прямоугольник' + '\nВведите ширину b'));
console.log(a, b);

let P = a * 2 + b * 2;
console.log(P);

let S = a * b;
console.log(S);

let ratio = P / S;
console.log(ratio);


//Задача №3 Конвертация единиц измерения
console.log("Задача №3 Конвертация единиц измерения");

let C = Number(prompt('Задача №3 Конвертация единиц измерения' + '\nВведите температуру в \xB0C'));
let F = Number(prompt('Задача №3 Конвертация единиц измерения' + '\nВведите температуру в \xB0F'));

let C1 = (F-32)/1.8;
let F1 = C*1.8+32;

console.log(`${C}\xB0C соответствует ${F1}\xB0F`);
console.log(`${F}\xB0F соответствует ${C1}\xB0C`);


//Задача №4 Високосный год
console.log("Задача №4 Високосный год");

let year = Number(prompt('Задача №4 Високосный год' + '\nВведите год для проверки'));

if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0){
    console.log(`${year} - високосный год`)
    alert(true)
}
else {
    console.log(`${year} - невисокосный год`)
    alert(false)
}


//Задача №5 Проверка
console.log("Задача №5 Проверка");

let n1 = Number(prompt('Задача №5 Проверка' + '\nВведите первое число'));
let n2 = Number(prompt('Задача №5 Проверка' + '\nВведите первое число'));

if (n1 == 10 || n2 == 10 || n1+n2 == 10) {
    alert(true)
}
else {
    alert(false)
}


//Задача №6 Считаем овец
console.log("Задача №6 Считаем овец");

let X = Number(prompt('Задача №6 Считаем овец' + '\nВведите количество овец'));

let X1 = "";
for (let i = 1; i <= X; i++) {
    X1 += `${i} овечка... `
}

console.log(X1);


//Задача №7 Четное-нечетное
console.log("Задача №7 Четное-нечетное");

for (let i = 0; i <= 15; i++) {
    if (i % 2 == 0) {
        console.log(`"${i} четное"`)
    }
    else {
        console.log(`"${i} нечетное"`)
    }
}


//Задача №8 Елка к новому году
console.log("Задача №8 Елка к новому году");

let Pine = "\n";
for (let i = 1; i <= 15; i++) {
    if (i % 2 == 0) {
        for (let j = 1; j <= i; j++) {
            Pine += '#'
        }
    }
    else {
        for (let j = 1; j <= i; j++) {
            Pine += '*'
        }
    }
    Pine += "\n";
}
console.log(Pine);


//Задача №9 Сортировка
console.log("Задача №9 Сортировка");

let a1 = Number(prompt('Задача №9 Сортировка' + '\nВведите первое число'));
let a2 = Number(prompt('Задача №9 Сортировка' + '\nВведите второе число'));
let a3 = Number(prompt('Задача №9 Сортировка' + '\nВведите третье число'));

let buffer;
if (a1 >= a2) {
    buffer = a1;
    a1 = a2;
    a2 = buffer;
}
if (a1 >= a3) {
    buffer = a1;
    a1 = a3;
    a3 = buffer;
}
if (a2 >= a3) {
    buffer = a2;
    a2 = a3;
    a3 = buffer;
}

console.log(a1, a2, a3);


//Задача №10 Максимальное значение
console.log("Задача №10 Максимальное значение");

let b1 = Number(prompt('Задача №10 Максимальное значение' + '\nВведите первое число'));
let b2 = Number(prompt('Задача №10 Максимальное значение' + '\nВведите второе число'));
let b3 = Number(prompt('Задача №10 Максимальное значение' + '\nВведите третье число'));
let b4 = Number(prompt('Задача №10 Максимальное значение' + '\nВведите четвертое число'));
let b5 = Number(prompt('Задача №10 Максимальное значение' + '\nВведите пятое число'));

let Max = b1;
if (b2 > Max) {
    Max = b2;
}
if (b3 > Max) {
    Max = b3;
}
if (b4 > Max) {
    Max = b4;
}
if (b5 > Max) {
    Max = b5;
}

console.log(Max);