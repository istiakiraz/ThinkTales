export const commentPromise = (query) =>{
    return fetch(`https://thinktales-server.vercel.app/comments/${query}`).then(res=> res.json())
}