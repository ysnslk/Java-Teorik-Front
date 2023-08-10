function getData(url, method = "GET", body) {
  return fetch(url, {
    method, // method: method
    headers: {
      "Content-Type": "application/json",
    },
    ...(body ? { body: JSON.stringify(body) } : {}),
  })
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      return response;
    });
}

async function callServices() {
  const res1 = await getData(
    "https://jsonplaceholder.typicode.com/comments",
    "GET",
    null
  );
  console.log(res1);
  const res2 = await getData(
    `https://jsonplaceholder.typicode.com/comments?id=${res1[0].id}`,
    "GET",
    null
  );
  console.log(res2);
  const res3 = await getData(
    "https://jsonplaceholder.typicode.com/posts",
    "POST",
    {
      title: "Post 1",
      body: "Lorem ipsum",
      userId: 1,
    }
  );
  console.log(res3);
}

callServices();
