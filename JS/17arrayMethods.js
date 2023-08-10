const sinif = [
  "Ayşe",
  "Yasin",
  "Sinem",
  "Damla",
  "Mehmet",
  "Ahmet",
  "Zeynep",
  "Kazım",
];

const numbers = [10, 50, 24, 65, 35, 458];

// --FOREACH
// foreach method'u içerideki elementleri göstermek istediğimizde veya
// o elementleri bir işlem dahilinde kullanmak istediğimizde kullanılır.

sinif.forEach((element, index, arr) => {
  // console.log(index === 0 ? "ilk element" : arr[index]);
  // console.log(`${element} sınıfın ${index} index'li öğrencisidir.`);
});

sinif.forEach((element) => {
  // console.log(element);
});

// --MAP
// var olan array'in (sinif) elemanları üzerinde yaptığımız değişikliklere yeni bir array
// yaratmamızı sağlar.
// const yeniSinif = sinif.map((element, index, arr) => {
//   return `${element} sınıfın bir elemanıdır.`;
// });
const yeniSinif = sinif.map((element) => `${element} sınıfın bir elemanıdır.`);

// console.log(yeniSinif);

// --FILTER
// var olan array'in istenilen kriterlere göre filtrelenip yeni bir array yaratılmasını sağlar.
const filteredSinif = sinif.filter((element, index, arr) => {
  return element.length > 5;
});
// console.log(filteredSinif);

// const filteredNumber = numbers.filter((element) =>{
//   return element > 50;
// });
const filteredNumber = numbers.filter((element) => element > 50);
// console.log(filteredNumber);

// --EVERY
// every method'u belirlenen kural tüm elementler için doğru ise true döner. Değilse false döner.
// Bir elementte dahi kural geçerli değil ise false döner.
const everyNumbers1 = numbers.every((element) => element > 0);
// console.log(everyNumbers);
const everyNumbers2 = numbers.every((element) => element > 1);
// console.log(everyNumbers2);

// --SOME
// Some method'u elemanlardan en az bir tanesinin kuralı sağlamasıyla true döner.
// hiçbir eleman kuralı sağlamazsa false döner.
// const someNumbers = numbers.some((element) => {
//   const isTrue = element > 50;
//   return isTrue;
// });
// console.log(someNumbers);
const someNumbers1 = numbers.some((element) => element > 60);
// console.log(someNumbers1);
const someNumbers2 = numbers.some((element) => {
  const isTrue = element > 500;
  return isTrue;
});
// console.log(someNumbers2);

// --FIND
// find method'u array'de belirlenen koşulu sağlayan ilk elemanı verir.
// numbers array'i içerisinde 50'den büyük olan ilk eleman nedir ?
const higherThan50 = numbers.find((element) => element > 50);
// console.log(higherThan50);

// --FINDLAST
// findLast method'u array içinde belirlenen koşulu sağlayan en son elemanı verir.
// numbers array'i içerisinde 50'den büyük olan son eleman nedir ?
const higherThan50ForLast = numbers.findLast((element) => {
  const isTrue = element > 50;
  return isTrue;
});
// console.log(higherThan50ForLast);

// --FINDINDEX
// findIndex method'u array'de koşulu sağlayan ilk elemanın index'ini verir.
// numbers array'i içerisinde 50'den büyük olan ilk elemanın index'i nedir ?
const higherThan50Index = numbers.findIndex((element) => element > 50);
// console.log(higherThan50Index);

// --FINDLASTINDEX
// findLastIndex method'u array içinde belirlenen koşulu sağlayan en son eleman'ın indexini verir.
const higherThan50LastIndex = numbers.findLastIndex((element) => element > 50);
// console.log(higherThan50LastIndex);

// --SORT
// sort method'u verilen array'in belirlenen koşul ile sıralanmasını sağlar.
// ilgili array'i değiştirerek sıralanmış halini verir.
// numbers.sort((a, b) => {
//   const val = a - b;
//   return val;
// });
//numbers.sort((a, b) => a - b);
// console.log("numbers", numbers);
// console.log("sinif başlangıç", sinif);
// sinif.sort();
//console.log("sinif", sinif);
//sinif.forEach((element) => console.log(element));

// --REVERSE
// reverse method'u verilen array'i tersten sıralar.
// console.log(numbers);
// numbers.reverse();
// console.log(numbers);
// console.log(sinif);
// sinif.reverse();
// console.log(sinif);

// --REDUCE
// reduce method ' u genellikle number arrayler için işlemler yapılmak istendiğinde kullanılır.
// kullanılan array için return'de yapılan ilemin sonucunu bir sonraki döngüde parametre
// olarak verir.
// Bu sayede arrayler içerisinde birleştirme işlemi yapılır ya da bir işlemin sonucuna ulaşılır.
const totalNumber = numbers.reduce((total, element) => {
  return total + element;
});
// console.log(totalNumber);
const siniftakiKisiler = sinif.reduce((kisiler, element) => {
  return `${kisiler} , ${element}`;
});
console.log(siniftakiKisiler);

const carpim = numbers.reduce((total, element) => {
  return total * element;
});
console.log("Çarpım : ", carpim);
