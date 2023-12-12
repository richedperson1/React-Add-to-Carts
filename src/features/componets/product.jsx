import React, { useEffect, useState } from 'react';
import faker from 'faker';

// Product component
const Product = ({ name, description, imageUrl, productId }) => {
    return (
        <div className="product flex flex-col w-[250px] gap-1 bg-slate-400 cursor-pointer rounded-lg overflow-hidden">
            <div className="image-container">
                <img src={imageUrl} alt={name} />
            </div>
            <h2 className='text-sm'>{name}</h2>
            <p className='text-sm'>{description}</p>
            <p className='text-sm'>Product ID: {productId}</p>
        </div>
    );
};
// 29,39,55

const Loader = () => {
    return (
        <>
            <img src='https://i.pinimg.com/originals/10/69/a7/1069a7113c399a9a9ca3185769c59134.gif' alt="" />
        </>)
}

// App component using Product component
const App = () => {
    const [fakeProduct, setFakeProduct] = useState([]);

    const generateProductId = () => {
        return Math.floor(Math.random() * 10000); // You can adjust this to suit your requirements
    };

    const getRandomImage4Faker = async () => {
        try {
            const products = [];
            for (let ind = 0; ind < 15; ind++) {
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

                products.push(product);
            }
            setFakeProduct(products);

            // const newArray = new Array(5).fill(0).map(() => {
            //     const Geneator = async () => {


            //         const response = await fetch('https://source.unsplash.com/300x200/?product');
            //         const imageUrl = response.url;
            //         const productDescription = faker.commerce.productDescription();

            //         const productId = generateProductId();
            //         const productName = faker.commerce.productName();

            //         const product = {
            //             name: productName,
            //             description: productDescription,
            //             imageUrl: imageUrl,
            //             productId: productId
            //         };

            //         return product
            //     }
            //     return Geneator()
            // })

            const newArray = await Promise.all(
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

            console.log("This is final array : ", newArray);

        } catch (error) {
            console.error('Error fetching image:', error);
        }
    };

    useEffect(() => {
        getRandomImage4Faker();
    }, []);

    return (
        <div className="app pb-[50px]">
            <h1 className='text-[25px] py-4 text-white'>Fake Product Details</h1>
            <div className=" flex gap-1 flex-wrap ">
                {fakeProduct &&
                    fakeProduct.map((product_val, index) => {
                        return (

                            <Product
                                key={index} // Add a unique key when rendering a list of components
                                name={product_val.name}
                                description={product_val.description}
                                imageUrl={product_val.imageUrl}
                                productId={product_val.productId}
                            />
                        );
                    })}

                {fakeProduct.length == 0 && <Loader />}
            </div>
        </div>
    );
};

export default App;
