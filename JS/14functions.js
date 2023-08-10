const hivda = {
  name: "Hivda",
  surname: "Aydogan",
  date: 1998,
  town: "Ankara",
  getInfo: function () {
    console.log(
      `Ìsmi ${this.name} olan kişinin doğum tarihi ${this.date}'dir.`
    );
  },
};

// Normal function'larda this bulunduğu method'un ya da class'ın özelliklerini taşır.
// Normal function'lar inmutable oldukları için kodun istenilen yerinde çağırılabilir.
function getHivdasInfo() {
  for (const key in hivda) {
    const value = hivda[key];
    console.log(`${key.toUpperCase()}: ${value}`);
  }
}

// Arrow function ES6 ile geldi.
// this objesi bulunduğu method'un ya da class'ın özelliklerini taşımaz.
// Arrow function'lar inmutable oldukları için fonksiyon yazıldığı yerin altında çağrılmalıdır.

const printDescription = () => {
  console.log("Hivda'nın Özellikleri aşağıda yer alıyor.");
};

const getHivdasLife = function () {
  printDescription();
  getHivdasInfo();
};

// getHivdasLife();

const getHivdasDate = () => {
  return hivda.date; // hivda[date];
};

// console.log(getHivdasDate());

hivda.getInfo();
