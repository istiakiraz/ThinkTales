export const recentBlogsPromise = () =>{
    return fetch('http://localhost:3000/blogs/recent').then(res=> res.json())
}