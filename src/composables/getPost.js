export async function getPost(id) {
  let info;
  await fetch(`http://localhost:3000/posts/${id}`)
    .then((response) => response.json())
    .then((data) => (info = data))
    .catch((err) => console.log(err));
  return info;
}
