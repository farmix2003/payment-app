import { send, shield, star } from "../assets"

export const navigationLinks = [
    {
        id: 'home',
        title: 'Home'
    },
    {
        id: 'features',
        title: 'Features'
    }, {
        id: 'product',
        title: 'Product'
    }, {
        id: 'clients',
        title: 'Clients'
    },
]
export const stats = [
    {
        id: 1,
        title: 'Active clients',
        value: '9300+',
    },
    {
        id: 2,
        title: 'Sponsored by the Company',
        value: '100+',
    },
    {
        id: 2,
        title: 'Transactions',
        value: '+110M',
    }
]
export const features = [
    {
        id: 1,
        icon: star,
        title: "Awards",
        content: 'the best credit cards offer a great combination of promotions and rewards'
    },
    {
        id: 2,
        icon: shield,
        title: "100% Secure",
        content: 'We take proactive measures to ensure that your information and transactions are secure'
    },
    {
        id: 2,
        icon: send,
        title: "Balance transfer",
        content: 'A balance transfer credit card can save you a lot of money on interest payments'
    },
]