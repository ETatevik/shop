import Paper from "@mui/material/Paper";
import styled from "@emotion/styled";


const Item = styled(Paper)(() => ({
    backgroundColor: '#fff',
    padding: 1,
    textAlign: 'center',
    color: "secondary",
    margin: '10px',
    minWidth: '200px'
}));
export default Item;