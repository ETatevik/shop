import * as React from 'react';
import { useSelector } from "react-redux";
import FullShop from "./FullShop";
import EmptyShop from "./EmptyShop";
import {allAvailableProducts, filterAvailableProducts} from "../../utils/help";
import Filter from "../Filter";

const Shop = () => {
    const products= useSelector(state => state.products);
    const filterByType = useSelector(state => state.filterByType)
    const allProducts =  allAvailableProducts(products, filterByType);
    const filterProducts = filterAvailableProducts(allProducts, filterByType);

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



