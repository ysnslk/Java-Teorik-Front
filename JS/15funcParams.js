// names default değeri olan bir parametredir.
// otherNames bir Rest parametresidir.
function getNames(names = [], ...otherNames) {
  if (names.length > 0) {
    for (const name of [...names, ...otherNames]) {
      console.log(name);
    }
  } else {
    console.log("Sınıfta hiç öğrenci yok.");
  }
}

let sinif = [
  "Ayşe",
  "Yasin",
  "Sinem",
  "Damla",
  "Mehmet",
  "Kerem",
  "Mustafa",
  "Nurgül",
];

getNames(sinif, "Ahmet", "Zeynep", "Kazım");
