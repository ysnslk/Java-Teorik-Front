function getBooks(books = [], callback) {
  const bookStr = books.join(", ");
  setTimeout(() => {
    if (callback) {
      callback(bookStr);
    }
  }, 3000);
}

const myBooks = ["Sefiller", "Genç Werther'in Acıları", "Harry Poter"];
const isAlert = true;

function writeToConsole(books) {
  console.log(`Benim ${books} isimli kitaplarım var.`);
}

function showOnAlert(books) {
  alert(`Benim ${books} isimli kitaplarım var.`);
}

getBooks(myBooks, isAlert ? showOnAlert : writeToConsole);
