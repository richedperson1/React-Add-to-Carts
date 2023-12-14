import React, { useContext, useEffect } from 'react'
import Product_Carts from '../../../context_api/context_carts/context_carts'

const Product = ({ name, description, imageUrl, productId, index = 0 }) => {
    const { product_carts, set_product_carts } = useContext(Product_Carts)
    return (
        <div className="product flex flex-col w-[250px] gap-1 bg-slate-400 cursor-pointer rounded-lg overflow-hidden">
            <div className="image-container" onClick={() => {
                console.log("This elemennt is click : ", index);
            }}>
                <img src={imageUrl} alt={name} style={{ 'objectPosition': "50% 50%" }} />
            </div>
            <h2 className='text-sm'>{name}</h2>
            <p className='text-sm'>{description}</p>
            <p className='text-sm'>Product ID: {productId}</p>
        </div>
    );
};

const Loader = () => {
    return (
        <>
            <img src='https://i.pinimg.com/originals/10/69/a7/1069a7113c399a9a9ca3185769c59134.gif' alt="" />
        </>)
}
const Items_display = () => {
    const { product_carts, set_product_carts } = useContext(Product_Carts)
    useEffect(() => {
        console.log("product_carts, set_product_carts", product_carts);

    }, [product_carts])
    return (
        <>
            <div className="app pb-[50px]">
                <h1 className='text-[25px] py-4 text-white'>Fake Product Details</h1>
                <div className=" flex gap-1 flex-wrap ">
                    {product_carts &&
                        product_carts.products.map((product_val, index) => {
                            return (

                                <Product
                                    key={index}
                                    name={product_val.name}
                                    description={product_val.description}
                                    imageUrl={product_val.imageUrl}
                                    productId={product_val.productId}
                                    index={index}
                                />
                            );
                        })}
                    {product_carts.length == 0 && <Loader />}
                </div>
            </div>
        </>
    )
}

export default Items_display;