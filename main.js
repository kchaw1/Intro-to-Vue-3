const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_green.jpg',
            inStock: false,
            inventory: 1,
            details: ['50% cototn', '30% wool', '20% polyester'],
            variants: [
                {id: 1, color:'green'},
                {id: 2, color:'blue'}
            ]
        }
    }
})