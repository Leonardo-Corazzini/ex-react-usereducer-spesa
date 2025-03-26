import products from "../data/products";


export default function Products() {
    return (
        <ul>
            {products.map((p, i) => <li key={i}>
                <p> {p.name} <strong>{p.price} $</strong></p>
            </li>)}
        </ul>
    )
}