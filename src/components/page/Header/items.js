import { nanoid } from "nanoid";


const items = [
    {
        id: nanoid(),
        to: '/',
        text: 'Home',
    },
    {
        id: nanoid(),
        to: '/cart',
        text: 'Cart',
    },
    {
        id: nanoid(),
        to: '/about',
        text: 'About',
    }
];

export default items;