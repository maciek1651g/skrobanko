import saveProduct from "./savePrice.js";

const getAllPricesOnOnePage = async (body, category) => {
    const productNames = getProductNames(body);
    const productPrices = getProductPrices(body);

    if (
        productNames &&
        productPrices &&
        productNames.length === productPrices.length &&
        productPrices.length !== 0
    ) {
        for (let i = 0; i < productNames.length; i++) {
            saveProduct(
                productNames[i].substring(1, productNames[i].length - 1),
                productPrices[i],
                category
            );
        }
    } else {
        console.log("Regexp error(price)");
        console.log(productNames.length);
        console.log(productPrices.length);
    }
};

const getProductNames = (pageBody) => {
    const reg = /data-click-href="\/.*?\/"|class="productLink" href="\/.*?\/"/gmu;
    const productNamesSet = new Set();
    let productNamesArray = pageBody.match(reg);

    if (productNamesArray !== null) {
        for (let i = 0; i < productNamesArray.length; i++) {
            productNamesSet.add(
                productNamesArray[i].substring(
                    productNamesArray[i].search("/"),
                    productNamesArray[i].length - 1
                )
            );
        }
    }

    return Array.from(productNamesSet);
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
