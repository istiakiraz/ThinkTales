export const blogsPromise = (query) =>{
    return fetch(`https://thinktales-server.vercel.app/blogs?${query}`).then(res=> res.json())
}