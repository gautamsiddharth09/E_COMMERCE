import React from 'react'
import {ShopContext} from '../Context/ShopContext'
import {useParams} from 'react-router-dom' 
import { useContext } from 'react'
import Breadcrum from '../Components/BreadCrum/Breadcrum'
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay'
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox'
import RelaresProducts from '../Components/RelaresProducts/RelaresProducts'

const Product = () => {

  const {all_product} = useContext(ShopContext)
  const {productId} = useParams();
  const Product = all_product.find((e)=> e.id === Number(productId));
  return (
    

    <div> 
      <Breadcrum  product={Product} />
      <ProductDisplay product={Product}/>
      <DescriptionBox />
      <RelaresProducts />
    </div>
  )
}

export default Product