// 1. let ve const anahtar kelimeleri geldi.

// 2. Arrow function
const arrowFunction = (param1, param2) => {
  // do smth
};

// 3. destructuring

// 4. spread
function func1(
  param1,
  param2,
  ...otherParams /* Spread işlemi gerçekleştirildi. */
) {
  console.log(...otherParams);
  console.log(otherParams);
}
func1(1, 2, 3, 4, 5, 6);

class Car {
  constructor(color, model) {
    this.color = color;
    this.model = model;
  }

  getCarProperties(){
    console.log(`Renk : ${this.color}, Model : ${this.model}`);
  }
}

const myCar = new Car("siyah", "Volvo");
myCar.getCarProperties();
