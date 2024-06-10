const notification20 = [
  { source: "Telephone", text: "Hello", date: "05.06.2024" },
  { source: "Computer", text: "How are you", date: "06.06.2024" },
  { source: "Server", text: "Attention", date: "07.06.2024" },
];

notification20[Symbol.iterator] = function() {
  let index = 0;
  let subIndex = 0;
  const keys = Object.keys(this[0]);

  return {
      next: () => {
          if (index >= this.length) {
              return { done: true };
          }

          const value = this[index][keys[subIndex]];
          subIndex++;

          if (subIndex >= keys.length) {
              subIndex = 0;
              index++;
          }

          return { value, done: false };
      }
  };
};

for (const element of notification20) {
  console.log(element);            // Telephone   Hello   05.06.2024     Computer   How are you   06.06.2024    Server    Attention    07.06.2024

}
///////////////////////////////////////////////////////////////////
function slow(myDate) {
  if (myDate === 5) {
    return 23;
  }
  console.log(`Called from ${myDate}`);
  return myDate + 3;
}

function memoize(func) {
  let cache = new Map();
  return function (x) {
    if (cache.has(x)) {
      return cache.get(x);
    }
    let result = func(x);
    if (![...cache.values()].includes(result)) {    /* check for duplicates (якщо в завданні малося на увазі перевірку дублікатів по ключу, то вона і так є вище  if (cache.has(x)) {return cache.get(x);} )*/
      if (cache.size < 5) {
        cache.set(x, result);
      } else {
        const [[key0]] = cache;
        cache.delete(key0);
        cache.set(x, result);
      }
    }
    return result;
  };
}
slow = memoize(slow);

console.log(slow(10)); // slow(1) is cached and the result returned
console.log("Again: " + slow(10)); // slow(1) result returned from cache

console.log(slow(5)); // slow(2) is cached and the result returned
console.log("Again: " + slow(5)); // slow(2) result returned from cache*/

console.log(slow(20)); // slow(2) is cached and the result returned
console.log("Again: " + slow(20)); // slow(2) result returned from cache*/

console.log(slow(30)); // slow(2) is cached and the result returned
console.log("Again: " + slow(30)); // slow(2) result returned from cache*/

console.log(slow(40)); // slow(2) is cached and the result returned
console.log("Again: " + slow(40)); // slow(2) result returned from cache*/

console.log(slow(50)); // slow(2) is cached and the result returned
console.log("Again: " + slow(50)); // slow(2) result returned from cache*/

////////////////////////////////////////////////////////////////////////////////
/*1)Вам необхідно використовувати масив нотифікацій з минулих занять. До отриманого під час групування об'єкта notifications,
 вам необхідно додати ітератор, щоб під час перебору в циклі for of ми отримували кожен елемент 
 із вкладених списків об'єкта notifications таким чином, немов працюємо з "плоским" масивом.*/
/*2)Вам необхідно реалізувати функцію memoize(fn), яка приймає вхід функцію і додає їй можливість кешування результатів виконання, щоб уникнути повторних обчислень.
 Це означає, що в разі, коли функція викликається з однаковими параметрами, то результат необхідно брати з кешу. (Тільки примітиви у параметрах та використовуйте Map)*/
//3)Встановіть обмеження на розмір кеша у вигляді числа N. Якщо це значення перевищено, то вам необхідно перезаписати перше значення, потім друге і так далі.
//4)Додайте перевірку, щоб прибрати дублікати результатів із кешу.

//////////////////////////////////////////