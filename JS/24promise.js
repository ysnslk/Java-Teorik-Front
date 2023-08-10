// Promise parametre olarak bir function bekler.
// Bu function'ın bize verdiği resolve ve result parametreleri vardır.
// Resolve bir function'dır ve işlem başarılıysa resolve function'ı çağırır.
// Reject de bir function'dır ve işlem başarısızsa reject function'ı çağırılır.
function addString(prev, current) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${prev} ${current}`);
    }, 3000);
  });
}

addString("", "A")
  .then((result) => {
    return addString(result, "B");
  })
  .then((result) => {
    console.log(result);
  });
