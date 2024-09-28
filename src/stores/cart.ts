import { persist } from 'zustand/middleware'
import { createStore } from 'zustand/vanilla'

import type { ICartProduct, IProductForCart } from '@/types/global'

export interface CartState {
	cart: ICartProduct[]
	totalQuantity: number
	totalPrice: number
}

export interface CartActions {
	incrementProductQuantity: (product: IProductForCart) => void
	decrementProductQuantity: (product: IProductForCart) => void
	removeFromCart: (product: IProductForCart) => void
	clearCart: () => void
}

export type CartStore = CartState & CartActions

export const defaultInitState: CartState = {
	cart: [],
	totalQuantity: 0,
	totalPrice: 0
}

export const createCartStore = (initState: CartState = defaultInitState) => {
	return createStore(
		persist<CartStore>(
			(set, get) => ({
				...initState,

				incrementProductQuantity: product => {
					const cart = get().cart
					const cartProduct = cart.find(pr => pr.id === product.id)
					if (cartProduct) {
						const updatedCart = cart.map(pr =>
							pr.id === cartProduct.id
								? {
										...pr,
										quantity: pr.quantity + 1,
										priceOfAll: pr.priceOfAll + (pr.discount?.value ?? pr.priceOfOne)
									}
								: pr
						)
						set(() => ({
							cart: updatedCart
						}))
					} else {
						set(state => ({
							cart: [
								...state.cart,
								{ ...product, quantity: 1, priceOfAll: product.discount?.value ?? product.priceOfOne }
							]
						}))
					}
					set(state => ({
						totalQuantity: state.totalQuantity + 1,
						totalPrice: state.totalPrice + (product.discount?.value ?? product.priceOfOne)
					}))
				},

				decrementProductQuantity: product => {
					const cart = get().cart
					const cartProduct = cart.find(pr => pr.id === product.id)
					if (cartProduct) {
						const updateCart =
							cartProduct.quantity > 1
								? cart.map(pr =>
										pr.id === cartProduct.id
											? {
													...pr,
													quantity: pr.quantity - 1,
													priceOfAll: pr.priceOfAll - (cartProduct.discount?.value ?? cartProduct.priceOfOne)
												}
											: pr
									)
								: cart.filter(pr => pr.id !== cartProduct.id)

						set(state => ({
							cart: updateCart,
							totalQuantity: state.totalQuantity - 1,
							totalPrice: state.totalPrice - (cartProduct.discount?.value ?? cartProduct.priceOfOne)
						}))
					}
				},

				removeFromCart: product => {
					const cart = get().cart
					const cartProduct = cart.find(pr => pr.id === product.id)
					if (cartProduct) {
						const updateCart = cart.filter(pr => pr.id !== cartProduct.id)
						set(state => ({
							cart: updateCart,
							totalQuantity: state.totalQuantity - cartProduct.quantity,
							totalPrice: state.totalPrice - cartProduct.priceOfAll
						}))
					}
				},

				clearCart: () => {
					set(() => ({
						cart: [],
						totalQuantity: 0,
						totalPrice: 0
					}))
				}
			}),
			{ name: 'cart' }
		)
	)
}
