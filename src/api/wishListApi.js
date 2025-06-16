export const wishListPromise = (query, accessToken ) =>{
    return fetch(`http://localhost:3000/wishlist/${query}`,{
        headers: {
            authorization : `Bearer ${accessToken}`
        }
    }).then(res=> res.json())
}