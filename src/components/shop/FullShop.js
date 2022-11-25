import React from 'react';
import Item from "./ShopItem";
import Stack from "@mui/material/Stack";
import ProductCard from "./ProductCard";

function FullShop({products, justifyContentLeft, remove}) {
    return (
        <Stack
            direction={{ sx: 'column', md: 'row' }}
            justifyContent={Boolean(justifyContentLeft) ? "left" : "center"}
            flexWrap="wrap"
            alignItems="center"
        >
            {products.map( product =>
                <Item key={product?.id + product?.name + product?.startDate}>
                    <ProductCard product={product} remove={remove}/>
                </Item>
            )}
        </Stack>
    );
}

export default FullShop;