export function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


export function randomFiveProduct(products) {
    let copyProducts = [...products];
    copyProducts = copyProducts.filter(({endDate}) => endDate > new Date());
    copyProducts.sort((a, b) => b.weight - a.weight);

    if(copyProducts.length <= 5){
        return copyProducts
    }

    const filteredProduct = [];
    let arr1 = copyProducts.slice(0, Math.round(copyProducts.length/2));
    let arr2 = copyProducts.slice(Math.round(copyProducts.length/2), copyProducts.length);

    // 1.
    filteredProduct.push(arr1.splice(randomIndex(arr1.length), 1)[0]);

    //2.
    arr1 = arr1.slice(0, Math.round(arr1.length/2));
    filteredProduct.push(arr1.splice(randomIndex(arr1.length), 1)[0]);

    //3.
    filteredProduct.push(arr2.splice(randomIndex(arr2.length), 1)[0]);

    //4.
    arr2 = arr2.slice(0, Math.round(arr2.length/2));
    filteredProduct.push(arr2.splice(randomIndex(arr2.length), 1)[0]);

    //5.
    filteredProduct.push([...arr1,...arr2][randomIndex(arr1.length+arr2.length)]);

    return filteredProduct.sort((a, b) => b.weight - a.weight);
}

function randomIndex(maxIndex) {
   return  Math.abs(Math.round(Math.random()*(maxIndex - 1)))
}

export function isNumber(number) {
    return new RegExp(/^\d+$/).test(number);
}