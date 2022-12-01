import * as React from 'react';
import { useSelector } from "react-redux";
import FullShop from "./FullShop";
import EmptyShop from "./EmptyShop";
import {allAvailableProducts} from "../../utils/help";
import Filter from "../Filter";

const Shop = () => {
    const products= useSelector(state => state.products);
    const filterProducts =  allAvailableProducts(products);

    return (
        <>
            {filterProducts?.length > 0 ?
                <>
                    <Filter/>
                    <FullShop products={filterProducts} />
                </>
                : <EmptyShop/>
            }
        </>
    );
};
export default Shop;



