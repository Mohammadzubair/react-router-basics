import { Link } from "react-router-dom"
import { DUMMY_PRODUCTS } from "../../utils"

const Products = () => {
  return (
    <div>
      <h1>Products page</h1>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Link to={product.id} >
              {product.name}
            </Link>
            <p>{product.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Products