function asenkron() {
  setTimeout(() => {
    console.log("asenkron");
  }, 3000);
  for (let index = 0; index < 100; index++) {
    console.log(index);
  }
}

function senkron() {
  console.log("senkron");
}

asenkron();
senkron();
