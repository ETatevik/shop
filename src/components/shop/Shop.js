import * as React from 'react';
import { useSelector } from "react-redux";
import FullShop from "./FullShop";
import EmptyShop from "./EmptyShop";
import {randomFiveProduct} from "../../utils/help";

const Shop = () => {
    const products= useSelector(state => state.products);
    const filterProducts =  randomFiveProduct(products); //TODO: Change logic for show products

    return (
        <>
            {filterProducts?.length > 0 ?
                <FullShop products={filterProducts} /> : <EmptyShop/>
            }
        </>
    );
};
export default Shop;



