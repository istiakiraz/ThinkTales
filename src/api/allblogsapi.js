export const blogsPromise = (query) =>{
    return fetch(`http://localhost:3000/blogs?${query}`).then(res=> res.json())
}