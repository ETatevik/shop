import React from 'react';
import {Grid, TextField} from "@mui/material";
import {translations} from "../../utils/config";
import DatePicker from "./DatePicker";
import {isEmpty} from "../../utils/help";
import {useSelector} from "react-redux";

function Add({name, setName, price, setPrice, weight, setWeight, stDate, setStDate, enDate, setEnDate}) {
    const editProduct = useSelector(state => state.products.editProduct);
    const disabled = !isEmpty(editProduct);

    return (
        <>
            <Grid item sx={12} md={2}>
                <TextField
                    fullWidth
                    required
                    name={`product_${translations.NAME}`}
                    type="text"
                    label={translations.NAME}
                    value={name}
                    onChange={e => setName(e.target.value)}
                    disabled={disabled}
                />
            </Grid>
            <Grid item sx={12} md={2}>
                <TextField
                    fullWidth
                    required
                    name={`product_${translations.PRICE}`}
                    type="number"
                    label={translations.PRICE}
                    value={price}
                    onChange={e => setPrice(e.target.value)}
                />
            </Grid>
            <Grid item sx={12} md={2}>
                <TextField
                    fullWidth
                    required
                    name={`product_${translations.WEIGHT}`}
                    type="number"
                    label={translations.WEIGHT}
                    value={weight}
                    onChange={e => setWeight(e.target.value)}
                />
            </Grid>
            <Grid item sx={12} md={4}>
                <DatePicker startDate={stDate} endDate={enDate} handleChangeStartDate={setStDate}
                            handleChangeEndDate={setEnDate}/>
            </Grid>
        </>
    );
}

export default Add;