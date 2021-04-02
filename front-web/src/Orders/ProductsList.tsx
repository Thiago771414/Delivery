import ProductCard from "./ProductCard";
import { Product } from "./types";

//props parâmetro para o componente
type Props = {
    products: Product[];
}

//componente
//map manipular a lista
// key={product.id} react para retirar erro
function ProductsList({ products }: Props) {
    return (
        <div className="orders-list-container">
            <div className="orders-list-items">
                {products.map(product => (
                    <ProductCard key={product.id} product={product}/>
                ))}
            </div>
        </div>
    )
}

export default ProductsList;