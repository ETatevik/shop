import React from 'react';
import Item from "./ShopItem";
import Stack from "@mui/material/Stack";
import ProductCard from "./ProductCard";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import {translations} from "../../utils/config";
import {Button} from "@mui/material";
import Box from "@mui/material/Box";

function FullShop({products, justifyContentLeft, remove, removeProducts}) {
    return (
        <>
            <Stack
                direction={{sx: 'column', md: 'row'}}
                justifyContent={Boolean(justifyContentLeft) ? "left" : "center"}
                flexWrap="wrap"
                alignItems="center"
            >
                {products.map(product =>
                    <Item key={product?.id + product?.name + product?.startDate}>
                        <ProductCard product={product} remove={remove}/>
                    </Item>
                )}
            </Stack>
            {remove &&
                <Box sx={{mt: 3, textAlign: "right"}}>
                    <Button onClick={removeProducts} variant="outlined" color="error">
                        <AddCircleOutlineOutlinedIcon sx={{p: 1}}/>
                        {translations.REMOVE_ALL}
                    </Button>
                </Box>}
        </>

    );
}

export default FullShop;