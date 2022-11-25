import React from 'react';
import {translations} from "../../utils/config";
import {Grid} from "@mui/material";
import ProductItems from "./ProductItems";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';

function ShowProduct({products}) {
    return (
        <Grid xs={12} sx={{mb: 5}} item>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="right">{translations.NAME}</TableCell>
                            <TableCell align="right">{translations.PRICE}</TableCell>
                            <TableCell align="right">{translations.WEIGHT}</TableCell>
                            <TableCell align="right">{translations.START_DATE}</TableCell>
                            <TableCell align="right">{translations.END_DATE}</TableCell>
                        </TableRow>
                    </TableHead>
                    {products.map( product => {
                        return  <ProductItems key={product.id + '_add'} product={product}/>
                    })}
                </Table>
            </TableContainer>
        </Grid>
    );
}

export default ShowProduct;