const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            inStock: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                {id:"456578", color: "red"},
                {id:"457867", color: "green"},
            ],
            sizes: ['p','m','g','gg','xg']
        }
    }
})
