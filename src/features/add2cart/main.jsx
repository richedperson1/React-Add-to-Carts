import React, { useContext } from 'react'
import Carts_context_provider from '../../context_api/context_carts/context_reducer'
import Items_display from './items_page/items_details'
const Add_2_carts_main_fun = () => {
    return (
        <>
            <Carts_context_provider>
                <div>Add_2_carts_main_fun</div>
                <Items_display />
            </Carts_context_provider>
        </>
    )
}

export default Add_2_carts_main_fun;