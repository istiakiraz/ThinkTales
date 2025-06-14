export const commentPromise = (query) =>{
    return fetch(`http://localhost:3000/comments/${query}`).then(res=> res.json())
}