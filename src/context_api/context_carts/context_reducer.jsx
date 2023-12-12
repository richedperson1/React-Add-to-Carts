import { useReducer } from "react";
import Product_Carts from "./context_carts";

import UserContext from "./userContext";


const product_reducer = (state, action) => {
    switch (action.type) {
        case ("add_carts"):
            return
    }

}
const Carts_context_provider = (props) => {
    const fake_product = {}
    const [state, dispatch] = useReducer(product_reducer, fake_product)

    return (
        <>
            <UserContext.Provider value={{ user, setUser }}>
                {props.children}
            </UserContext.Provider>
        </>
    )

}

export default Carts_context_provider;