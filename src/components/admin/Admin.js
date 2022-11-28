import React, {useEffect, useState} from 'react';
import { translations } from "../../utils/config";
import {useSelector} from "react-redux";
import EmptyShop from "../shop/EmptyShop";
import FullShop from "../shop/FullShop";
import {Button} from "@mui/material";
import AddProductModal from "./AddProductModal";
import Typography from "@mui/material/Typography";
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

const Admin = () => {
    const products = useSelector(state => state.products);
    const productModal = useSelector(state => state.productModal);
    const [open, setOpen] = useState(productModal);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        if(open !== productModal){
            setOpen(productModal);
        }
    }, [productModal])

    return (
        <div className="sp-admin_wrapper">
            <Button onClick={handleOpen} variant="outlined">
                <AddCircleOutlineOutlinedIcon sx={{p:1}}/>
                {translations.ADD_NEW_PRODUCT}
            </Button>
            <Typography sx={{mb: 5, mt: 3}} variant="h4">{translations.PRODUCTS}</Typography>

            {products?.length === 0 ?
                <EmptyShop/> : <FullShop products={products} justifyContentLeft="true" remove="true" />
            }

            <AddProductModal open={open} onClose={handleClose} />
        </div>
    );
};
export default Admin;