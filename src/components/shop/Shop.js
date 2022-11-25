import * as React from 'react';
import { useSelector } from "react-redux";
import FullShop from "./FullShop";
import EmptyShop from "./EmptyShop";
import {randomFiveProduct} from "../../utils/help";

export const Shop = () => {
    const products = useSelector(state => state.products);
    const filterProducts =  randomFiveProduct(products);
    
    return (
        <>
            {filterProducts?.length > 0 ?
                <FullShop products={filterProducts} /> : <EmptyShop/>
            }
        </>
    );
};





