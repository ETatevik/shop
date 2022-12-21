export function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


export function allAvailableProducts(products) {
    let copyProducts = [...products];
    copyProducts = copyProducts.filter(({endDate}) => !expiredProduct(endDate));
    return copyProducts;
    // if (copyProducts.length <= 5) {
    //     return copyProducts
    // }
    //
    // const filteredProduct = [];
    // let arr1 = copyProducts.slice(0, Math.round(copyProducts.length / 2));
    // let arr2 = copyProducts.slice(Math.round(copyProducts.length / 2), copyProducts.length);
    //
    // // 1.
    // filteredProduct.push(arr1.splice(randomIndex(arr1.length), 1)[0]);
    //
    // //2.
    // arr1 = arr1.slice(0, Math.round(arr1.length / 2));
    // filteredProduct.push(arr1.splice(randomIndex(arr1.length), 1)[0]);
    //
    // //3.
    // filteredProduct.push(arr2.splice(randomIndex(arr2.length), 1)[0]);
    //
    // //4.
    // arr2 = arr2.slice(0, Math.round(arr2.length / 2));
    // filteredProduct.push(arr2.splice(randomIndex(arr2.length), 1)[0]);
    //
    // //5.
    // filteredProduct.push([...arr1, ...arr2][randomIndex(arr1.length + arr2.length)]);

    //return filteredProduct.sort((a, b) => b.weight - a.weight);
}

// function randomIndex(maxIndex) {
//     return Math.abs(Math.round(Math.random() * (maxIndex - 1)))
// }

export function isNumber(number) {
    return new RegExp(/^\d+$/).test(number);
}

export function expiredProduct(endDate) {
    return endDate < new Date();
}

export function filterAvailableProducts(products, filterType){
    switch (filterType) {
        case 1:
            return [...products].sort((a, b) => a.name - b.name);
        case 2:
            return [...products].sort((a, b) => a.price - b.price);
        case 3:
            return [...products].sort((a, b) => a.weight - b.weight);
        case 4:
            return [...products].sort((a, b) => a.startDate - b.startDate);
        default:
            return products;
    }
}

export function isEmpty(any) {
    const typeof_any = typeof any;
    switch (typeof_any.toLowerCase()) {
        case 'array':
            return any.length === 0;
        case 'object':
            return Object.keys(any).length === 0;
        default:
            return false;
    }
}