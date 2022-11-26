import React from 'react';
import {translations} from "../../utils/config";
import {Alert, Box, Button} from "@mui/material";
import Stack from "@mui/material/Stack";
import {useDispatch, useSelector} from "react-redux";
import {PAGE_IDS} from "../../costansts";
import {changeMenu} from "../../slices/menuSlice";

function EmptyShop() {
    const menu = useSelector(state => state.menu);
    const isShopPage = menu === PAGE_IDS.SHOP;
    const dispatch = useDispatch();

    const backToAdminPage = () => {
        dispatch(changeMenu(PAGE_IDS.ADMIN))
    };

    return (
        <>
            {isShopPage ?
                <Box sx={{mb: 10}}>
                    <Button onClick={backToAdminPage} variant="outlined" color="primary">
                        {translations.ADD_NEW_PRODUCT}
                    </Button>
                </Box> : null
            }
            <Stack sx={{width: '100%'}} spacing={2}>
                <Alert severity="info">{translations.EMPTY_BOARD}</Alert>
            </Stack>
        </>
    );
}

export default EmptyShop;