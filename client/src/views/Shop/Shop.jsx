import { Box } from "@mui/material"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import Paginations from "../../components/Pagination/Paginations"
import ProductCard from "../../components/ProductCard/ProductCard"
import { fetchProducts } from "../../store/products/action"

const Shop = () => {
  const dispatch = useDispatch()
  const productsList = useSelector((state) => state.products.productsList)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  return (
    <div>
      <div className="shop-container">
        {productsList.map((product) => {
          return (
            <Link to={"/shop/${product._id}"} key={product._id}>
              <ProductCard
                name={product.name}
                description={product.description}
                photos={product.photos[0]}
                amount={product.amount}
                price={product.price}
              />
            </Link>
          )
        })}
      </div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "2%",
          color: "white",
        }}
      >
        <Paginations />
      </Box>
    </div>
  )
}

export default Shop
