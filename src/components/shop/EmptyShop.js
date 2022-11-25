import React from 'react';
import {translations} from "../../utils/config";
import {Alert} from "@mui/material";
import Stack from "@mui/material/Stack";

function EmptyShop(props) {
    return (
        <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert severity="info">{translations.EMPTY_BOARD}</Alert>
        </Stack>
    );
}

export default EmptyShop;