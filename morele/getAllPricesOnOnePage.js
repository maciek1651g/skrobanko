import saveProduct from "./savePrice.js";

const getAllPricesOnOnePage = async (body, category) => {
    const reg = /class="productLink" href="(.*?)"/gmu;
    let productName;
    const products = [];
    while ((productName = reg.exec(body)) !== null) {
        products.push([productName[1]]);
    }

    const reg2 = /data-price="([\d\.]*?)"/gmu;
    let productPrice;
    for (let i = 0; (productPrice = reg2.exec(body)) !== null; i++) {
        products[i].push(productPrice[1]);
    }

    for (let i = 0; i < products.length; i++) {
        saveProduct(
            products[i][0].substring(1, products[i][0].length - 1),
            parseFloat(products[i][1]),
            category
        );
    }
};
export default getAllPricesOnOnePage;
