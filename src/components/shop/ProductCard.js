import React from 'react';
import {Box, Button, CardContent} from "@mui/material";
import Typography from "@mui/material/Typography";
import {translations} from "../../utils/config";
import {useDispatch} from "react-redux";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import {removeProduct} from "../../slices/productsSlice";
import {expiredProduct} from "../../utils/help";

function ProductCard({product, remove}) {
    const dispatch = useDispatch();
    const expired = expiredProduct(product?.endDate);
    const productDesc = {
        title: expired ? translations.EXPIRED_PRODUCT : translations.AVAILABLE_PRODUCT,
        color: expired ? "error.main" : "success.main"
    }
    const handlerRemoveProduct = () => {
        const {id} = product;
        dispatch(removeProduct(id));
    }

    return (
        <div>
            <CardContent sx={{position: 'relative', paddingTop: 3}}>
                {remove ? <Button sx={{position: 'absolute', top: 0, right: 0, minWidth: "30px"}}
                                  onClick={handlerRemoveProduct} variant="text"><HighlightOffIcon/></Button> : null}
                {remove ? <Box sx={{my: 3}} color={productDesc.color}>{productDesc.title}</Box> : null}
                <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                    {translations.NAME} : {product.name}
                </Typography>
                <Typography variant="h5" component="div">
                    {translations.PRICE} : {product.price}
                </Typography>
                <Typography sx={{mb: 1.5}} color="text.secondary">
                    {translations.WEIGHT} : {product.weight}
                </Typography>
                <Typography variant="body2">
                    {product?.startDate?.toLocaleDateString()}
                    <span>&nbsp; - &nbsp;</span>
                    {product?.endDate?.toLocaleDateString()}
                </Typography>
            </CardContent>
        </div>
    )
        ;
}

export default ProductCard;