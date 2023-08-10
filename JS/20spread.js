// array kopyalama
const arr1 = [1, 2, 3];
const arr2 = [...arr1];
// console.log(arr2);
// arr2.push(4);
// console.log(arr1);
// console.log(arr2);
console.log("arr1 ?== arr2", arr1 === arr2);
console.log("arr1 ?= arr2", arr1 == arr2);
console.log("arr1", arr1);
console.log("arr2", arr2);

const arr3 = [3, 4, 5];
const arr4 = [...arr1, ...arr3]; // 1,2,3,3,4,5
console.log("arr4", arr4);

// object kopyalama
const obj1 = { isim: "Yasin", soyisim: "Solak" };
const obj2 = { ...obj1 };
// console.log(obj2);
// obj2.yas = 28;
// console.log(obj1);
// console.log(obj2);
console.log("obj1 ?=== obj2", obj1 === obj2);
console.log("obj1 ?== obj2", obj1 == obj2);
console.log("obj1 : ", obj1);
console.log("obj2 : ", obj2);

const obj3 = { isim: "Yasin", soyisim: "Solak", yas: 27 };
const obj4 = { ...obj1, ...obj3, sehir: "Eskişehir" }; // iisim: "Yasin", soyisim: "Solak"
console.log("obj4 : ", obj4);
