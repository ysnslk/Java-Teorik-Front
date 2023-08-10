const arr1 = [1, 2, 3, 4, 5];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
// const d = arr[3];
// const e = arr[4];

const [a, b, c, d, e] = arr1;
// Aşağıdaki durumda destructuring işlemi yapılırsa array'in 3. elemanı atlanarak sıradki değerler
// variable olarak atanır. a=1, b=2, d=4, e=5 şeklinde.
// const [a, b, , d, e] = arr1;
console.log("a", a);
console.log("b", b);
console.log("c", c);
console.log("d", d);
console.log("e", e);

const obj1 = { isim: "Merve", soyisim: "Adler", yas: 30 };
// const isim = obj1.isim;
// const soyisim = obj1.soyisim;
// const yas = obj1.yas;
const { isim, soyisim, yas } = obj1;
console.log("isim", isim);
console.log("soyisim", soyisim);
console.log("yas", yas);

// function return array
function getValues() {
  return [1, 2, 3];
}
const [x, y, z] = getValues();
console.log("x", x);
console.log("y", y);
console.log("z", z);

// function return object
function getUser() {
  return {
    name: "Ayşe",
    surname: "Özcan",
    age: 27,
  };
}
const { surname, age, name } = getUser();
console.log("name", name);
console.log("surname", surname);
console.log("age", age);
