export const addItemToCartLocalStore = async (id, item) => {
    let itemCart = {
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: 1,
        description: item.description,
        image: item.image,
        totalPrice: parseInt(item.price)
    }
    let cart = JSON.parse(localStorage.getItem('cart'))
    if (cart.length === 0) {
        cart.push(itemCart)
        alert('Add succes')
    }
    else {
        let res = cart.find(ele => ele.id === id)
        if (res === undefined) {
            cart.push(itemCart)
            alert('Add succes')
        }
        else {
            for(let pro of cart){
                if(pro.id === id){
                    if(pro.quantity <= item.quantity){
                        pro.quantity += 1
                        pro.totalPrice = pro.quantity * parseInt(item.price)
                        alert('Add succes')
                    }
                   else{
                        alert('Product is out of stock')
                   }
                }
            }
            localStorage.setItem('cart', JSON.stringify(cart))
        }
    }
    localStorage.setItem('cart', JSON.stringify(cart))
}

export const removeItemCart = (id) => {
    let cart = JSON.parse(localStorage.getItem('cart'))
    cart = cart.filter(x => x.id !== id)
    localStorage.setItem('cart', JSON.stringify(cart))
}