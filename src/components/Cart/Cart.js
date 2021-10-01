import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const { cart } = props;
    console.log(cart);
    let totalQuantity = 0;
    let total = 0;
    for (const product of cart) {
        if (!product.quantity) {
            product.quantity = 1;
        }
        total += product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }
    // const total = cart.reduce(
    //     (previous, product) => previous + product.price,
    //     0
    // );
    const shipping = total > 0 ? 15 : 0;
    const tax = (total + shipping) * 0.1;
    const grandTotal = total + shipping + tax;

    return (
        <div>
            <h3>Order Summary</h3>
            <h5>Items Ordered: {totalQuantity}</h5>
            <br />
            <p>Price: {total.toFixed(2)}</p>
            <p>Shipping: {shipping}</p>
            <p>Tax: {tax.toFixed(2)}</p>
            <p>Grand Total: {grandTotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;
