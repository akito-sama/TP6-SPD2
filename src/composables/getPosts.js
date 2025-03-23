export async function getPosts() {
    let info;
    await fetch(`http://localhost:3000/posts/`).then(response => response.json()).then(data => info = data).catch(err => console.log(err))
    return info
}