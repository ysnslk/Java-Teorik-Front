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

async function getChars() {
  const chars = await getData(
    "https://rickandmortyapi.com/api/character/?page=2"
  );
  return chars.results;
}

function drawChars() {
  getChars().then((response) => {
    const chars = response.map((char) => {
      const statusClass =
        char.status === "Alive"
          ? "green"
          : char.status === "Dead"
          ? "red"
          : "gray";
      return `<div class="box-container">
      <div class="img-container">
        <img
          src="${char.image}"
        />
      </div>
      <div class="info-container">
        <h2 class="hover" >${char.name}</h2>
        <p class="${statusClass}">${char.status} - ${char.species} </p>
        <div class="detail-container">
          <h5>Last know location:</h5>
          <p class="hover" >${char.location.name}</p>
        </div>
        <div class="detail-container">
          <h5>First seen in:</h5>
          <p class="hover" >${char.origin.name}</p>
        </div>
      </div>
    </div>`;
    });
    document.getElementById("chars").innerHTML = chars.join("");
  });
}

drawChars();
