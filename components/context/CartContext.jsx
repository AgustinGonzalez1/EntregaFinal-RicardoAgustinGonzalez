"use client";
import { createContext, useContext, useState } from "react";

const cartContext = createContext();

export const useCartContext = () => {
	return useContext(cartContext);
};

export const CartContextProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

	const addToCart = (item, quantity) => {
		if (isInCart(item.slug)) {
			setCart((prevCart) => {
				const updatedCart = prevCart.map((prod) => {
					if (prod.slug === item.slug) {
						return { ...prod, quantity: prod.quantity + quantity };
					}
					return prod;
				});
				return updatedCart;
			});
		} else {
			setCart((prevCart) => [...prevCart, { ...item, quantity: quantity }]);
		}
	};

	const deleteItem = (id) => {
		const items = cart.filter((prod) => prod.slug !== id);
		setCart([...items]);
	};

	const clear = () => {
		setCart([]);
	};

	const isInCart = (id) => {
		return cart.some((prod) => prod.slug === id);
	};

	return <cartContext.Provider value={{ cart, addToCart, clear, deleteItem }}>{children}</cartContext.Provider>;
};
