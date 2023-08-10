console.log("variableType: ", variableType);
// console.log("letType: ", letType);

var variableType = "var";
let letType = "let";
const CONST_TYPE = "const";

function varLetDiffrence() {
  // hoisting ile a değişkenini function içerisinde tanımlamış olduk.
  console.log(a);
  // console.log(b);
  if (true) {
    // global variable
    var a = "a";
    // local variable
    let b = "b";
    console.log("if içinde a: ", a);
    console.log("if içinde b: ", b);
  }
  console.log("if dışında a: ", a);
  console.log("if dışında b: ", typeof b);
}

varLetDiffrence();
console.log("function dışında a: ", typeof a);
console.log("function dışında b: ", typeof b);
