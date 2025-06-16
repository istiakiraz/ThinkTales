export const wishListPromise = (query, accessToken ) =>{
    return fetch(`https://thinktales-server.vercel.app/wishlist/${query}`,{
        headers: {
            authorization : `Bearer ${accessToken}`
        }
    }).then(res=> res.json())
}