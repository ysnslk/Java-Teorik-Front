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

async function callServices() {
  const res1 = await getData("https://jsonplaceholder.typicode.com/comments");
  // console.log(res1);
  const res2 = await getData(
    `https://jsonplaceholder.typicode.com/comments?id=${res1[0].id}`
  );
  console.log(res2);
}

callServices();
