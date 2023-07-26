import React, { useState, useContext } from 'react'

const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);


const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);


    const addProduct = (item, quantity) => {
        if (isInCart(item.id)) {
            setCart(cart.map(product => {
                return product.id === item.id ? { ...product, quantity: product.quantity + quantity } : product
            }));

        } else {
            setCart([...cart, { ...item, quantity }]);
        }
    }

    //sumar el total del precio//
    const totalPrice = () => {
        return cart.reduce((prev, act) => prev + act.quantity * act.price, 0);
    }

    //total de productos//
    const totalProducts = () => cart.reduce((acumulador, productoActual) => acumulador + productoActual.quantity, 0);

    const clearCart = () => setCart([]); //limpiar carrito//

    const isInCart = (id) => cart.find(product => product.id === id) ? true : false;

    const removeProducto = (id) => setCart(cart.filter(product => product.id !== id));


    return (
        <CartContext.Provider value={{
            clearCart,
            isInCart,
            removeProducto,
            addProduct,
            totalPrice,
            totalProducts,
            cart,
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;
