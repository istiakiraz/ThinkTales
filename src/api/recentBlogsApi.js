export const recentBlogsPromise = () =>{
    return fetch('https://thinktales-server.vercel.app/blogs/recent').then(res=> res.json())
}