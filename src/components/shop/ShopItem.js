import Paper from "@mui/material/Paper";
import styled from "@emotion/styled";


const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff', ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    margin: '10px',
    minWidth: '200px'
}));
export default Item;