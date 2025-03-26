import products from "../data/products";
import { useState } from 'react'


export default function Products() {
    const [addedProducts, setAddedProducts] = useState([])
    function addToCart(product) {
        if (addedProducts.some((p) => p.name === product.name)) {

            setAddedProducts(addedProducts.map((p) => {
                if (p.name === product.name) {
                    return {
                        ...p,
                        quantity: p.quantity + 1
                    }
                }
                return p
            }))
            return
        }
        setAddedProducts([...addedProducts, { ...product, quantity: 1 }])




    }
    function removeToCart(product) {
        setAddedProducts(addedProducts.filter((p) => p.name !== product.name))
    }


    return (
        <div>
            <h1>Prodotti disponibili</h1>
            <ul>
                {products.map((p, i) => <li key={i}>
                    <span> {p.name} <strong>{p.price} $</strong></span> <button onClick={() => addToCart(p)}>Aggiungi al carrello</button>
                </li>)}
            </ul>
            <h2>Tuo carello</h2>
            <ul>

                {addedProducts.length > 0 && addedProducts.map((p, i) => <li key={i}>
                    <span> {p.name} <strong>{p.price}</strong> $ quantita:{p.quantity}</span> <button onClick={() => removeToCart(p)}>Elimina</button>
                </li>)
                }

            </ul>
            {addedProducts.length > 0 && <div>
                <h3>Totale da pagere</h3>
                <p>{addedProducts.reduce((acc, p) => {
                    return p.price * p.quantity + acc
                }, 0).toFixed(2)} $</p>
            </div>
            }

        </div>

    )
}