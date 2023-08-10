// Yanlış array kullanımı
["Kerem", "Turak", 1995];
const kerem = {
  name: "Kerem",
  surname: "Turak",
  date: 1995,
};

// Doğru kullanımı.
let sinif = ["Kerem", "Hivda", "Merve", "Uğur", "Mustafa"];
console.log(sinif[3]);
sinif[4] = "Mehmet";
console.log(sinif[4]);
sinif[5] = "Nurgül";
console.log(sinif);

// Array'e eleman ekleme
sinif.push("Damla");
sinif.push("Afife");
console.log(sinif);

// Array'deki son elemanı çıkarma
sinif.pop();
console.log(sinif);

// Array'in belirli aralıklardaki değerini alır ve yeni bir dizi döndürür.
const yeniSinif = sinif.slice(1, 4);
console.log(yeniSinif);

// Array'in belirlenen index'ten sonra girilen sayı kadar elemanı çıkartır.
// Sonrasında yeni elemanlar eklenebilir.
sinif.splice(1, 2, "Ayşe", "Yasin", "Ahmet");
console.log(sinif);

// Array'in bir elemanını index'ini bulmak için indexOf kullanılır.
const indexOfAhmet = sinif.indexOf("Ahmet");
console.log(indexOfAhmet);

// Array'in içerisinde aranılan elemanın olup olmadığını boolean olarak döner.
console.log(sinif.includes("Nurgül"));

if (sinif.includes("Nurgül")) {
  sinif[sinif.indexOf("Nurgül")] = "Sinem";
  console.log(sinif);
}

// Array'in ilk elemanını siler.
sinif.shift();
console.log(sinif);

// Array'e yeni elemanı index'i 0 olacak şekilde ekler.
sinif.unshift("Cem", "Afife", "Betül");
console.log(sinif);

// Array'in elemanlarını sondan başa doğru sıralar.
sinif.reverse();
console.log(sinif);

const yeniKisiler = ["Kerem", "Hivda"];
const newSinif = sinif.concat(yeniKisiler).concat("Merve");
console.log("NewSinif", newSinif);
console.log("Sinif : ", sinif);

const print = `Sinifimda ${newSinif.join(", ")} kişileri var.`;
console.log(print);
