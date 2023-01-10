import * as React from 'react';

import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { MobileDateRangePicker } from '@mui/x-date-pickers-pro/MobileDateRangePicker';
import {useEffect} from "react";
import {translations} from "../../utils/config";

const DatePicker = ({startDate, endDate, handleChangeStartDate, handleChangeEndDate}) => {
    const [value, setValue] = React.useState([startDate, endDate]);

    useEffect(() => {
        if(value[0]) handleChangeStartDate(value[0]?.$d || value[0]);
        if(value[1]) handleChangeEndDate(value[1]?.$d || value[1])
    }, [value, setValue]);

    return (
        <Stack spacing={3}>
            <LocalizationProvider
                dateAdapter={AdapterDayjs}
                localeText={{ start: translations.START_DATE, end: translations.END_DATE }}
            >
                <MobileDateRangePicker
                    value={value}
                    onChange={(newValue) => {
                        setValue(newValue);
                    }}
                    renderInput={(startProps, endProps) => (
                        <React.Fragment>
                            <TextField {...startProps} />
                            <Box sx={{ mx: 2 }}> to </Box>
                            <TextField {...endProps} />
                        </React.Fragment>
                    )}
                />
            </LocalizationProvider>
        </Stack>
    );
}

export default DatePicker;