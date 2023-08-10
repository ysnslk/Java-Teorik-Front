// truthy
true;
5;
("string");
const obj = { name: "Uğur Gürkan", surname: "Yağmur" };

// 1.obj var mı?
// 2.Eğer ki obj varsa  obj.name var mı ?
if (obj?.name) {
  console.log("obj bir truthy değildir");
  console.log(obj.name);
}
if (obj && obj.name) {
  console.log("obj bir truthy değildir");
  console.log(obj.name);
}

//falsy
false;
0;
null;
undefined;
NaN;
console.log(3456 / "abc");

if (3456 / "abc") {
  console.log("3456 / abc bir truthy değildir.");
}

if (NaN || undefined || null || 0 || false || "") {
  console.log("girdi");
}

if (!!obj) {
  console.log("girdi");
}

console.log(!obj);
console.log(!!obj);
