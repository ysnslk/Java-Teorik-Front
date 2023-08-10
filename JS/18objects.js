const myCar = {
  marka: "Seat",
  model: "Lyon",
  yil: 2014,
  renk: "kirmizi",
  yakitTuru: "dizel",
};

console.log(myCar.renk);
console.log(myCar["renk"]);

// object vs array
const obj1 = { isim: "Yasin", soyisim: "Solak" };
const obj2 = { isim: "Yasin", soyisim: "Solak" };
const obj3 = { isim: "Kerem", soyisim: "Turak" };
const obj4 = obj1;
console.log("obj1 ? obj2", JSON.stringify(obj1) === JSON.stringify(obj2));
console.log("obj1 ? obj3", obj1 === obj3);
console.log("obj1 ? obj4", obj1 === obj4);
// obj'e property ekleme
obj4.yas = 30;
console.log(obj1);
const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
const arr3 = [3, 4, 5];
const arr4 = arr1;
console.log("arr1 ? arr2", JSON.stringify(arr1) === JSON.stringify(arr2));
console.log("arr1 ? arr3", arr1 === arr3);
console.log("arr1 ? arr4", arr1 === arr4);
arr4.push(4);
console.log(arr1);

function compareObj(obj1, obj2) {
  return obj1.isim === obj2.isim && obj1["soyisim"] === obj2["soyisim"];
}

console.log("obj1 ? obj2", compareObj(obj1, obj2));

// hasOwnProperty
if (myCar.hasOwnProperty("yakitTuru")) {
  console.log(myCar.yakitTuru);
}

// entries
// array döner
console.log(Object.entries(myCar)); // [["marka","seat"],["model","leon"],....]
for (const [key, value] of Object.entries(myCar)) {
  console.log(`${key}:  ${value}`);
}

//keys
// array döner
console.log(Object.keys(myCar));

for (const key of Object.keys(myCar)) {
  console.log(myCar[key]);
}

// values
// array döner
console.log(Object.values(myCar));

for (const value of Object.values(myCar)) {
  console.log(value);
}

// freeze
// Object.freeze(myCar);
// myCar.prop1 = "prop1"; // Yeni property eklenmez
// myCar.marka = "VW"; // var olan key'in valuesu değiştirilmez.
// delete myCar.marka;
// console.log(myCar);

// seal
// Object.seal(myCar);
// myCar.prop1 = "prop1"; // Yeni property eklenmez
// myCar.marka = "VW"; // var olan key'in valuesu değiştirilebilir..
// delete myCar.marka; // prop çıkarılmaz
// console.log(myCar);

// Object.freeze(obj1);
// const objects = [obj1, obj2, obj3, obj4];
// for (const iterator of objects) {
//   iterator.isim = "Muhittin";
// }
// console.log(objects);

for (const key in myCar) {
  console.log(`${key}: ${myCar[key]}`);
}

const yasin = { isim: "Yasin", soyisim: "Solak" };
const fakeYasin = { soyisim: "Solakoğlu", cinsiyet: "E" };
console.log("yasin", yasin);
console.log("fakeYasin", fakeYasin);
const newObj = Object.assign(yasin, fakeYasin);
console.log("yasin", yasin);
console.log("fakeYasin", fakeYasin);
console.log("newObj", newObj);
console.log("damla ? newObj", damla === newObj);
