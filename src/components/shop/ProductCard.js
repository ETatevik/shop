import React from 'react';
import {Button, CardContent} from "@mui/material";
import Typography from "@mui/material/Typography";
import {translations} from "../../utils/config";
import {useDispatch} from "react-redux";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import {removeProduct} from "../../slices/productsSlice";

function ProductCard({product, remove}) {
    const dispatch = useDispatch();

    const handlerRemoveProduct = () => {
        const {id} = product;
        dispatch(removeProduct(id));
    }

    return (
        <div>
            <CardContent sx={{ position: 'relative', paddingTop: 3 }}>
                {remove ? <Button sx={{ position: 'absolute', top: 0, right: 0, minWidth: "30px"}} onClick={handlerRemoveProduct} variant="text"><HighlightOffIcon/></Button> : null}
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {translations.NAME} : {product.name}
                </Typography>
                <Typography variant="h5" component="div">
                    {translations.PRICE} : {product.price}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {translations.WEIGHT} : {product.weight}
                </Typography>
                <Typography variant="body2">
                    {product?.startDate?.toLocaleDateString()}
                    <span>&nbsp; - &nbsp;</span>
                    {product?.endDate?.toLocaleDateString()}
                </Typography>
            </CardContent>
        </div>
    );
}

export default ProductCard;