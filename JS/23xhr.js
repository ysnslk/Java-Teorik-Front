function getData(url, callback) {
  const request = new XMLHttpRequest();

  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
      // Başarılı
      const data = JSON.parse(request.responseText);
      callback("Data Çeklidi.", data);
    } else if (request.readyState === 4) {
      // Hata
      callback("Data Çekilemedi.", undefined);
    }
  });

  request.open("GET", url);
  request.send();
}

getData("https://jsonplaceholder.typicode.com/comments", (message, data) => {
  if (!data) {
    console.log(message);
  } else {
    console.log(message);
    // console.log(data);
    if (data.length > 10) {
      for (let index = 0; index < 10; index++) {
        const element = data[index];
        getData(
          `https://jsonplaceholder.typicode.com/comments?id=${element.id}`,
          (message, data) => {
            console.log(message);
            if (data) {
              console.log(data);
            }
          }
        );
      }
    }
  }
});
