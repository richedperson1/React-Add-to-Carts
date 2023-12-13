import React, { useContext, useEffect } from 'react'
import Product_Carts from '../../../context_api/context_carts/context_carts'
const Items_display = () => {
    const { product_carts, set_product_carts } = useContext(Product_Carts)
    useEffect(() => {
        console.log("product_carts, set_product_carts", product_carts);

    }, [product_carts])
    return (
        <>
            <div>Items_display</div>
        </>
    )
}

export default Items_display;