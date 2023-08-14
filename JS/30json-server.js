// GET
async function getPosts() {
  const uri = "http://localhost:5000/posts";
  const res = await fetch(uri);
  const posts = await res.json();
  console.log(posts);
}
// getPosts();

// POST
async function postPosts() {
  const newPost = {
    userId: 1,
    title: "Title 4",
    body: "New Post Added",
  };

  const uri = "http://localhost:5000/posts";
  const res = await fetch(uri, {
    method: "POST",
    body: JSON.stringify(newPost),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const post = await res.json();
  console.log(post);
}
// postPosts();

// DELETE
async function deletePosts() {
  const uri = "http://localhost:5000/posts/4";
  const res = await fetch(uri, {
    method: "DELETE",
  });
  console.log(res.ok);
}
// deletePosts();

// PUT

async function updatePost() {
  const updatePost = {
    title: "Updated Title",
    body: "Changed body...",
  };
  const uri = "http://localhost:5000/posts/4";
  const res = await fetch(uri, {
    method: "PUT",
    body: JSON.stringify(updatePost),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const post = await res.json();
  console.log(post);
}

// updatePost();

// SEARCH
 /**
  * q: Json objeleri içinde aratmak istediğimiz kelimeyi tanımladığımız parametre.
  * _sort: Json objelerinin hangi property'e göre sıralanacağını seçer.
  * _order="asc","desc" value'larını alır. DESC tersten sıralama yapar.
  */
async function searchPost(){
    const uri = "http://localhost:5000/posts?q=lorem&_sort=body&_order=desc";
  const res = await fetch(uri);
  const posts = await res.json();
  console.log(posts);
}
searchPost();