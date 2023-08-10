function getData(url) {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status === 200) {
        // Başarılı
        const data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState === 4) {
        // Hata
        reject("Data Çekilemedi.");
      }
    });

    request.open("GET", url);
    request.send();
  });
}

getData("https://jsonplaceholder.typicode.com/comments")
  .then((response) => {
    console.log("comments", response);
    return getData("https://jsonplaceholder.typicode.com/posts");
  })
  .then((response) => {
    console.log("post", response);
  })
  .catch((message) => {
    console.log(message);
  });
