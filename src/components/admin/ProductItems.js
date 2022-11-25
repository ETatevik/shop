import React from 'react';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

function ProductItems({product}) {
    return (
        <>
            <TableBody>
                <TableRow
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell align="right">{product.name}</TableCell>
                    <TableCell align="right">{product.price}</TableCell>
                    <TableCell align="right">{product.weight}</TableCell>
                    <TableCell align="right">{product.startDate.toLocaleDateString()}</TableCell>
                    <TableCell align="right">{product.endDate.toLocaleDateString()}</TableCell>
                </TableRow>
            </TableBody>
        </>
    );
}

export default ProductItems;
