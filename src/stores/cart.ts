import { computed, map } from 'nanostores';

export const $cart = map<Record<number, CartItem>>({});

export function addItemToCart(item: ShopItem) {
	const cartItem = $cart.get()[item.id];

	const quantity = cartItem ? cartItem.quantity : 0;

	$cart.setKey(item.id, {
		item,
		quantity: quantity + 1,
	});
}

export function removeItemFromCart(itemId: number) {
	// @ts-ignore
	$cart.setKey(itemId, undefined);
}

export const subTotal = computed($cart, (entries) => {
	let subT = 0;
	Object.values(entries).forEach((entry) => {
		if (!entry) {
			return subT;
		}

		subT += entry.quantity * entry.item.price;
	});
	return subT;
});
