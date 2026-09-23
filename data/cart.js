export const cart = [];


export function addToCart(productId)
{
  let matchingItem;
  cart.forEach((cartItem) => {
      if(productId  === cartItemtem.productId)
      {
        matchingItem = cartItem;
      }
    });
    if(matchingItem){
      matchingItem.quantity += 1;
    }
    else{
      cart.push({
      productId,
      quantity:1
    });
    }
}