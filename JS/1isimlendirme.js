// Variable
// camelCase
var dogName = "Karabaş";

// boolean
// camelCase
var hasOwner = true; // false

// function
// camelCase
function getName() {
  console.log("Yasin Solak");
}

// constant
// UPPER_SNAKE_CASE
const DAYS_UNTIL_TOMORROW = 1;

// class
// PascalCase
class DogProps {
  constructor(dogName, ownerName) {
    this.dogName = dogName;
    this.ownerName = ownerName;
  }
}

// component
// PascalCase
function DogInfos(info = {}) {
  return "dogs";
  // return (
  //     <div>
  //         <span>Dog Name: {info.dogName}</span>
  //         <span>Owner Name: {info.ownerName}</span>
  //     </div>
  // );
}

class DogCartoon {
  constructor(dogName, ownerName) {
    this.dogName = dogName;
    this.ownerName = ownerName;
    this.type = "Kangal";
  }

  // method
  // camelCase
  getName() {
    return this.dogName;
  }

  // private
  // underscope
  _tooName(ownerName) {
    return ownerName;
  }
}

const myDog = DogCartoon("Karabaş", "Köpek Filmi");

//file isimleri küçük harflerle aralarına tire koyularak veya camelCase ile yazılabilir

console.log("It's working!");
