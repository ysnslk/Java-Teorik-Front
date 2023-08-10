let sinif = ["Kerem", "Hivda", "Merve", "Uğur", "Mustafa"];
for (let i = 0; i < sinif.length; i++) {
  const element = sinif[i];
  // console.log(element);
}

let id = 1;
for (; id < sinif.length; id++) {
  const element = sinif[id];
  //  console.log(element);
}

id = 1;
for (; id < sinif.length; ) {
  const element = sinif[id];
  id = id + 2;
  //  console.log(element);
}

id = 1;
while (id < sinif.length) {
  const element = sinif[id];
  id = id + 2;
  //  console.log(element);
}

const hivda = {
  name: "Hivda",
  surname: "Aydogan",
  date: 1998,
  town: "Ankara",
};

// hivda["name"]="Hivda"

for (const key in hivda) {
  const value = hivda[key];
  // console.log(`${key}: ${value}`);
}

let total = 0;

const ages = [30, 27, 30, 25, 28, 27, 30, 26, 26];
for (const age of ages) {
  total += age; // total = total + age;
}

console.log("Toplam yaş : ", total);
console.log("Ortalama Yaş : ",total/ages.length);
