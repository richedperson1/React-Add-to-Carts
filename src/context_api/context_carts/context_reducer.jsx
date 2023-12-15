import { useEffect, useReducer, useState } from "react";
import Product_Carts from "./context_carts";
import faker from 'faker';
// import UserContext from "./context_carts";


const product_reducer = (state, action) => {
    switch (action.type) {
        case ("Add2Carts"):
            const newAddCarts = [...state.carts]
            newAddCarts[action.payload] = true
            return { ...state, carts: [...newAddCarts] }

        case ("removeFromCarts"):
            const removeCarts = [...state.carts]
            removeCarts[action.payload] = false
            return { ...state, carts: [...removeCarts] }

        case ("ToggleCarts"):
            const newCartToggle = [...state.carts]
            newCartToggle[action.payload] = !newCartToggle[action.payload]
            return { ...state, carts: [...newCartToggle] }

        case ("SET_PRODUCTS"):
            return { 'products': action.payload.products, 'carts': action.payload.carts }
        default:
            return state;
    }

}

const Carts_context_provider = (props) => {
    const generateProductId = () => {
        return Math.floor(Math.random() * 10000); // You can adjust this to suit your requirements
    };

    useEffect(() => {
        const Fake_product_generator = async () => {

            const fake_product = await Promise.all(
                new Array(5).fill(0).map(async () => {
                    const response = await fetch('https://source.unsplash.com/300x200/?product');
                    const imageUrl = response.url;
                    const productDescription = faker.commerce.productDescription();

                    const productId = generateProductId();
                    const productName = faker.commerce.productName();

                    const product = {
                        name: productName,
                        description: productDescription,
                        imageUrl: imageUrl,
                        productId: productId
                    };

                    return product;
                })
            );
            const products_details = { 'products': fake_product, carts: new Array(fake_product.length).fill(false) }
            set_product_carts({ type: 'SET_PRODUCTS', payload: products_details });
            // console.log("products_details,====>", product_carts)
        }
        Fake_product_generator()

    }, [])

    const products_details = { 'products': [], carts: [] }

    const [product_carts, set_product_carts] = useReducer(product_reducer, products_details)

    return (
        <>
            <Product_Carts.Provider value={{ product_carts, set_product_carts }}>
                {props.children}
            </Product_Carts.Provider>
        </>
    )

}

export default Carts_context_provider;