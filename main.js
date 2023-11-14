// Завдання 1.
// Рекурсивне зведення в ступінь
// Реалізувати рекурсивну функцію, яка зводить число в ступінь.
// Число, яке треба піднести до ступеню, передається як перший аргумент у функції;
// Ступінь передається як другий аргумент у функціюpow (num, degree).

let num = +prompt('enter number', 'Ex.:1, 2, 3...');
let num_pow = +prompt('enter pow', 'Ex.:1, 2, 3...');

function pow(num, degree) {
    return (degree === 0) ? 1 : num * pow(num, degree - 1);
  }
  let result = pow(num, num_pow); 
  console.log(`${num} в степені ${num_pow} = ${result}`);

// Завдання 2. Реалізуйте функцію removeElement
// Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.
// Наприклад:
// const array = [1, 2, 3, 4, 5, 6, 7];
// removeElement(array, 5 );
// console.log(array);
// // Результат: [1, 2, 3, 4, 6, 7]

// Крок 1: Попросити користувача ввести числа та створити початковий масив
let userInput = prompt('Введіть числа (наприклад, 1, 2, 3):');
const originalArray = userInput.split(',').map(Number);
let numberToRemove = prompt(`Введіть число яке хочете видалити з масиву: [${originalArray.join(', ')}]`);
numberToRemove = Number(numberToRemove);
if (!isNaN(numberToRemove)) {
  let newArray = originalArray.filter(element => element !== numberToRemove);
  console.log(`Новий масив: [${newArray.join(', ')}]`);
} else {
  console.log('Введено некоректне число або відмінено.');
}

  
// Завдання 3. Реалізуйте функцію generateKey
// Реалізуйте функцію generateKey(length, characters), яка повертає рядок випадкових символів із набору characters довжиною length. span>
// Наприклад:
// const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
// const key = generateKey(16, characters);
// console.log(key); // eg599gb60q926j8i

function generateKey(length, characters) {
    let key = '';
    const charactersLength = characters.length;
  
    for (let i = 0; i < length; i++) {
      let randomIndex = Math.floor(Math.random() * charactersLength);
      key += characters.charAt(randomIndex);
    }
    return key;
  }
  const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
  const key = generateKey(8, characters);
  console.log(`${key} generated from ${characters}`);
  