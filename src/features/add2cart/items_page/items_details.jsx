import React, { useContext, useEffect, useState } from 'react'
import Product_Carts from '../../../context_api/context_carts/context_carts'
import "../../feature.css"
const Product = ({ name, description, imageUrl, productId, index }) => {
    return (
        <>

            <div className="image-container" >
                <img src={imageUrl} alt={name} style={{ 'objectPosition': "50% 50%" }} />
            </div>
            <h2 className='text-sm'>{name}</h2>
            <p className='text-sm'>{description}</p>
            <p className='text-sm'>Product ID: {productId}</p>
        </>
    );
};

const Loader = () => {
    return (
        <>
            <img style={{ "transform": "rotate(-90deg)" }} src='https://i.pinimg.com/originals/10/69/a7/1069a7113c399a9a9ca3185769c59134.gif' alt="" />
        </>)
}
const Items_display = () => {
    const { product_carts, set_product_carts } = useContext(Product_Carts)

    useEffect(() => {
    }, [product_carts]);
    return (
        <>
            <div className="app pb-[50px]">
                <h1 className='text-[25px] py-4 text-white'>Fake Product Details</h1>
                <div className=" flex gap-1 flex-wrap justify-center">
                    {product_carts.products &&
                        product_carts.products.map((product_val, index) => {
                            return (
                                <div
                                    className={`relative flex flex-col w-[250px] gap-1 h-[300px] bg-slate-200 cursor-pointer rounded-lg overflow-hidden ${product_carts.carts[index] ? "block-card product-details " : "product-details release-cards"}`} onClick={() => {
                                        set_product_carts({ type: 'ToggleCarts', payload: index })

                                    }} key={`index-${index}`} >
                                    <Product
                                        key={index}
                                        name={product_val.name}
                                        description={product_val.description}
                                        imageUrl={product_val.imageUrl}
                                        productId={product_val.productId}
                                        index={index}
                                    />
                                </div>
                            );
                        })}
                    {/* {product_carts.products.length == 0 && <Loader />} */}
                </div>
            </div>
        </>
    )
}

export default Items_display;