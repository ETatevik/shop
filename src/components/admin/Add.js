import React from 'react';
import {Grid, TextField} from "@mui/material";
import {Field} from "react-final-form";
import {translations} from "../../utils/config";
import DatePicker from "./DatePicker";

function Add({name, setName, price, setPrice, weight, setWeight, stDate, setStDate, enDate, setEnDate}) {
    return (
        <>
            <Grid item sx={12} md={2}>
                <Field
                    fullWidth
                    required
                    name={`product_${translations.NAME}`}
                    component={TextField}
                    type="text"
                    label={translations.NAME}
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </Grid>
            <Grid item sx={12} md={2}>
                <Field
                    fullWidth
                    required
                    name={`product_${translations.PRICE}`}
                    component={TextField}
                    type="number"
                    label={translations.PRICE}
                    value={price}
                    onChange={e => setPrice(e.target.value)}
                />
            </Grid>
            <Grid item sx={12} md={2}>
                <Field
                    fullWidth
                    required
                    name={`product_${translations.WEIGHT}`}
                    component={TextField}
                    type="number"
                    label={translations.WEIGHT}
                    value={weight}
                    onChange={e => setWeight(e.target.value)}
                />
            </Grid>
            <Grid item sx={12} md={4}>
                <DatePicker startDate={stDate} endDate={enDate} handleChangeStartDate={setStDate} handleChangeEndDate={setEnDate} />
            </Grid>
        </>
    );
}

export default Add;