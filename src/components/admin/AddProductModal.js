import React, {useEffect, useState} from 'react';
import {Form} from "react-final-form";
import {
    Paper,
    Grid,
    Button,
    Box,
    Modal,
    Alert
} from "@mui/material";
import {translations} from "../../utils/config";
import Typography from "@mui/material/Typography";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import ShowProduct from "./ShowProduct";
import Add from "./Add";
import {useDispatch, useSelector} from "react-redux";
import {addProduct} from "../../slices/productsSlice";
import {isEmpty, isNumber} from "../../utils/help";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '85%',
    maxHeight: 'calc(100vh - 100px)',
    bgcolor: 'background.paper',
    border: '1px solid #000',
    boxShadow: 24,
    p: 10,
    overflowY: "auto"
};

function AddProductModal({open, onClose}) {
    const [productsList, setProductsList] = useState([]);
    const products = useSelector(state => state.products.productLists);
    const editProduct = useSelector(state => state.products.editProduct);
    const [product, setProduct] = useState({});
    const [disabledAddMoreProduct, setDisabledAddMoreProduct] = useState(true);
    const [name, setName] = useState();
    const [price, setPrice] = useState();
    const [weight, setWeight] = useState();
    const [stDate, setStDate] = useState(null);
    const [enDate, setEnDate] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        setErrorMessage(false);
        if (name && price && weight && stDate && enDate) {
            if (isNumber(price) && isNumber(weight)) {
                setProduct({
                    id: Math.round(Math.random() * 1000),
                    name: name,
                    price: price,
                    weight: weight,
                    startDate: stDate,
                    endDate: enDate
                })
            } else {
                setErrorMessage(translations.ONLY_NUMBER_ERROR);
            }
        } else {
            setProduct({});
        }
    }, [name, setName, price, setPrice, weight, setWeight, stDate, setStDate, enDate, setEnDate])

    useEffect(() => {
        if (Object.keys(product).length > 0) {
            setDisabledAddMoreProduct(false);
        }
    }, [product, setProduct]);

    useEffect(() => {
        setName(editProduct.name);
        setPrice(editProduct.price);
        setWeight(editProduct.weight);
        setStDate(editProduct.startDate);
        setEnDate(editProduct.endDate);
    }, [editProduct]);

    const handlerAddMoreProduct = () => {
        if (productsList?.length > 0
            && (productsList.find(({name}) => name === product.name)
                || (products.length > 0 && products.find(({name}) => name === product.name)))) {
            setErrorMessage(translations.SAME_NAME_ERROR);
        } else {
            setErrorMessage('');
            setName('');
            setPrice('');
            setWeight('');
            setStDate(null);
            setEnDate(null);
            setProductsList(prevArray => [...prevArray, product]);
            setDisabledAddMoreProduct(true);
        }
    }

    const onSubmit = () => {
        if (Object.keys(productsList).length > 0) {
            dispatch(addProduct(productsList));
            setName('');
            setPrice('');
            setWeight('');
            setStDate(null);
            setEnDate(null);
            setProductsList([]);
            setDisabledAddMoreProduct(false);
        } else {
            if (Object.keys(product).length > 0) {
                if (products.length > 0 && !!products.find(({name}) => name === product.name)) {
                    setErrorMessage(translations.SAME_NAME_ERROR);
                    return;
                }
                dispatch(addProduct([product]));
                setName('');
                setPrice('');
                setWeight('');
                setStDate(null);
                setEnDate(null);
                setProductsList([]);
                setDisabledAddMoreProduct(false);
            } else {
                setErrorMessage(translations.SAME_NAME_ERROR);
                return;
            }
        }
        onClose();
    };

    const onEditProduct = () => {
        if (Object.keys(productsList).length > 0) {
            dispatch(addProduct(productsList));
            setName('');
            setPrice('');
            setWeight('');
            setStDate(null);
            setEnDate(null);
            setProductsList([]);
            setDisabledAddMoreProduct(false);
        } else {
            if (Object.keys(product).length > 0) {
                if (products.length > 0 && !!products.find(({name}) => name === product.name)) {
                    setErrorMessage(translations.SAME_NAME_ERROR);
                    return;
                }
                dispatch(addProduct([product]));
                setName('');
                setPrice('');
                setWeight('');
                setStDate(null);
                setEnDate(null);
                setProductsList([]);
                setDisabledAddMoreProduct(false);
            } else {
                setErrorMessage(translations.SAME_NAME_ERROR);
                return;
            }
        }
        onClose();
    };

    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className="sp-modal_wrapper"
        >
            <Box style={style}>
                <Form
                    onSubmit={isEmpty(editProduct) ? onSubmit : onEditProduct}
                    render={({handleSubmit}) => (
                        <form onSubmit={handleSubmit}>
                            <Paper style={{padding: 16}}>
                                <Typography variant="h5" sx={{mb: 3}}>{translations.NEW_PRODUCT}</Typography>
                                <Grid container alignItems="center" spacing={2}>
                                    {productsList.length > 0 ?
                                        <ShowProduct products={productsList}/> : null
                                    }
                                    <Add
                                        name={name}
                                        setName={setName}
                                        price={price}
                                        setPrice={setPrice}
                                        weight={weight}
                                        setWeight={setWeight}
                                        stDate={stDate}
                                        setStDate={setStDate}
                                        enDate={enDate}
                                        setEnDate={setEnDate}/>
                                    {isEmpty(editProduct) &&
                                        <Grid item sx={12} md={2} textAlign="center">
                                            <Button disabled={disabledAddMoreProduct} onClick={handlerAddMoreProduct}
                                                    variant="outlined" title={translations.ADD_MORE}>
                                                <AddCircleOutlineOutlinedIcon/>
                                            </Button>
                                        </Grid>}
                                    {errorMessage &&
                                        <Grid item xs={12} textAlign="right">
                                            <Alert severity="error">{errorMessage}</Alert>
                                        </Grid>
                                    }
                                </Grid>
                                <Grid item xs={12} style={{marginTop: 30, textAlign: "center"}}>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        type="submit"
                                    >
                                        {isEmpty(editProduct) ? translations.CREAT : translations.EDIT}
                                    </Button>
                                    {!isEmpty(editProduct) &&
                                        <Button
                                            variant="contained"
                                            color="error"
                                            type="button"
                                            sx={{ml: 2}}
                                        >
                                            {translations.CANCEL}
                                        </Button>}
                                </Grid>
                            </Paper>
                        </form>
                    )}
                />
            </Box>
        </Modal>
    );
}

export default AddProductModal;