import React, {useState} from 'react';
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {translations} from "../utils/config";
import {FILTER_BY_LIST} from "../costansts";

function Filter() {
    const [filterby, setFilterby] = useState('');
    const handleFilterChange = (e) => {
        setFilterby(e.target.value);
    }

    return (
        <div style={{textAlign: 'center'}}>
            <FormControl fullWidth  sx={{ m: '10px auto', maxWidth: 420 }}>
                <InputLabel id="sp_filter-select-label">{translations.FILTER_BY}</InputLabel>
                <Select
                    labelId="sp_filter-select-label"
                    id="sp_filter-select"
                    value={filterby}
                    label={translations.FILTER_BY}
                    onChange={handleFilterChange}
                >
                    {
                        FILTER_BY_LIST.map(filter =>
                            <MenuItem key={`${filter.Value}_${filter.Title}_filter`}
                                      value={filter.Value}>{filter.Title}
                            </MenuItem>)
                    }
                </Select>
            </FormControl>
        </div>
    );
}

export default Filter;