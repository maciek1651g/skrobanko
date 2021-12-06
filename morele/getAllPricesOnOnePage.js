import saveProduct from "./savePrice.js";

const getAllPricesOnOnePage = async (body, category) => {
    const productNames = getProductNames(body);
    const productPrices = getProductPrices(body);

    if (productNames.length === productPrices.length && productPrices.length !== 0) {
        for (let i = 0; i < productNames.length; i++) {
            saveProduct(productNames[i], productPrices[i], category);
        }
    } else {
        console.log("Regexp error(price)");
    }
};

const getProductNames = (pageBody) => {
    const reg = /data-product-name="(.*?)"/gmu;
    const productNames = [];
    let productName;

    while ((productName = reg.exec(pageBody)) !== null) {
        productNames.push(productName[1]);
    }

    return productNames;
};

const getProductPrices = (pageBody) => {
    const reg = /data-product-price="([\d\.]*?)"/gmu;
    const productPrices = [];
    let productPrice;

    while ((productPrice = reg.exec(pageBody)) !== null) {
        productPrices.push(parseFloat(productPrice[1]));
    }

    return productPrices;
};
export default getAllPricesOnOnePage;
