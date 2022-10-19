const express = require('express')
const app = express()
const port = 3000

app.use(express.json());

let products = [
    {
        id: 1,
        name : 'Shampoo para bebe',
        description: 'Expert - 100 gr',
        price : 100,
        img: "./res/aco_blondifier 1.png",
        stock: 10
    },

    {
        id: 2,
        name : 'Mandelico Crema',
        description: 'Lidherma - 150 gr',
        price : 250,
        img: "./res/formula-mandelico-crema-50gr-lidherma-mandelico-removebg-preview-21-22b7107b3924272e0b15983821673282-640-0 1.png",
        stock: 2
    },

    {
        id: 3,
        name : 'loreal elvive',
        description: 'shampoo - 300 gr',
        price : 180,
        img: "./res/loreal-elvive-oleo-extraordinario-shampoo-packshot 1.png",
        stock: 5
    }
]


app.get('/api/products', (req, res) => {
    res.send(products)
})

app.post('/api/pay', (req, res) => {
   
    const ids = req.body;
    const productsCopy = products.map(p=> ({...p}))
    ids.forEach(id => {
        const product = products.find(p => p.id == id)
        if(product != undefined && product.stock > 0) {
            product.stock--
        }
    });
    res.send(products)
})

app.use('/', express.static('tienda')); 

app.listen(port, () => {
    console.log(`localhost ${port} `)
})