export const wishListPromise = (query) =>{
    return fetch(`http://localhost:3000/wishlist/${query}`).then(res=> res.json())
}