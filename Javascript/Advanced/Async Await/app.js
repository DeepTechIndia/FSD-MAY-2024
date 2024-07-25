const postlist = document.getElementById("postlist");
const postContent = document.getElementById("postContent");

async function fetchPosts() {
  const apiurl = "https://jsonplaceholder.typicode.com/posts";
  try {
    const response = await fetch(apiurl);
    if (!response.ok) {
      throw new Error("Failed to fetch");
    }
    const posts = await response.json();
    renderposts(posts);
  } catch (error) {
    console.log(error);
  }
}

function renderposts(posts) {
  postlist.innerHTML = "";
  posts.forEach((post) => {
    const li = document.createElement("li");
    li.textContent = post.title;
    li.onclick = () => showContent(post);
    postlist.appendChild(li);
  });
}

function showContent(post) {
  postContent.innerHTML = `
    <h2>${post.title}</h2>
    <p>${post.body}</p>
    `;
}

fetchPosts();
