import { atom, map } from 'nanostores';

export const isCartOpen = atom(false);

export type CartItem = {
	id: string;
	name: string;
	image: string;
    price: number;
	quantity: number;
};

export type CartItemDisplayInfo = Pick<CartItem, 'id' | 'name' | 'image' | 'price'>;

export const cartItems = map<Record<string, CartItem>>({});

export function addCartItem({ id, name, image, price }: CartItemDisplayInfo) {
	const existingEntry = cartItems.get()[id];
	if (existingEntry) {
		cartItems.setKey(id, {
			...existingEntry,
			quantity: existingEntry.quantity + 1,
		});
	} else {
		cartItems.setKey(id, {
			id,
			name,
			image,
            price,
			quantity: 1,
		});
	}
}
