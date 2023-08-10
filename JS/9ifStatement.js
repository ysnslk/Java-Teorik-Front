const a = 3 + 4;
const b = 7;
const c = "7";

//Nested if yapısı
if (a == c) {
  // a, c'ye eşittir.
  if (c == b) {
    // c, b değerine eşittir.
    console.log("a, b ve c değerleri birbirine eşittir.");
  } else {
    // a, c'ye eşit.
    console.log("a ve c sayı değerleri birbirine eşittir.");
  }
} else if (a === b) {
  // a, b'ye eşittir.
  console.log("a ve b değerleri birbirine eşittir.");
} else {
  console.log("a değeri hem b değerine hem de c değerine eşit değildir.");
}

if (a == c && c == b) {
  console.log("a, b ve c değerleri birbirilerine eşittir.");
} else if (a == c || c == b) {
  console.log("c değeri a veya b değerine eşittir.");
}else if(a==c){
    console.log("a ve c sayı değerleri birbirine eşittir.");
}else if(c!=a && c!=b){
 console.log("c değeri hem a hem b değerine eşit değildir.");
}else if (a===b){
    console.log("a ve b değerleri birbirine eşittir.");
}else{
    console.log("a değer hem b değerine hemde c değerine eşit değildir.");
}
