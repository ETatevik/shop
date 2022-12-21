import React, {useEffect, useState} from 'react';
import {translations} from "../../utils/config";
import {useDispatch, useSelector} from "react-redux";
import EmptyShop from "../shop/EmptyShop";
import FullShop from "../shop/FullShop";
import {Button} from "@mui/material";
import AddProductModal from "./AddProductModal";
import Typography from "@mui/material/Typography";
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import {cancelEditProduct, removeAllProducts} from "../../slices/productsSlice";
import {toggleModal} from "../../slices/productModalSlice";

const Admin = () => {
    const products = useSelector(state => state.products.productLists);
    const productModal = useSelector(state => state.productModal);
    const dispatch = useDispatch();
    const [open, setOpen] = useState(productModal);
    const handleOpen = () => {
        dispatch(toggleModal(true));
        setOpen(true);
    }
    const handleClose = () => {
        dispatch(toggleModal(false));
        dispatch(cancelEditProduct());
        setOpen(false);
    }

    useEffect(() => {
        if (open !== productModal) {
            setOpen(productModal);
        }
    }, [productModal, open]);

    const removeProducts = () => {
        dispatch(removeAllProducts());
    }

    return (
        <div className="sp-admin_wrapper">
            <Button onClick={handleOpen} variant="outlined">
                <AddCircleOutlineOutlinedIcon sx={{p: 1}}/>
                {translations.ADD_NEW_PRODUCT}
            </Button>
            <Typography sx={{mb: 5, mt: 3}} variant="h4">{translations.PRODUCTS}</Typography>

            {products?.length === 0 ?
                <EmptyShop/> :
                <FullShop products={products} justifyContentLeft="true" remove="true" removeProducts={removeProducts}/>
            }

            <AddProductModal open={open} onClose={handleClose}/>
        </div>
    );
};
export default Admin;