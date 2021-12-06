import saveProduct from "./savePrice.js";

const getAllPricesOnOnePage = async (body, category) => {
    const products = getProductDivs(body);

    if (products?.length > 0) {
        for (let i = 0; i < products.length; i++) {
            saveProduct(
                products[i].name.substring(1, products[i].name.length - 1),
                products[i].price,
                category
            );
        }
    } else {
        console.log("Regexp error(category page)");
    }
};

const getProductDivs = (pageBody) => {
    const reg = /<div class="cat-product [\S\s]+?Do koszyka/gm;
    const divProducts = pageBody.match(reg);
    const products = [];

    if (divProducts !== null) {
        for (let i = 0; i < divProducts.length; i++) {
            let productName = null;
            let productPrice = null;

            const productNameRegex = /href="\/.*?\/"/gmu;
            const productNames = divProducts[i].match(productNameRegex);
            if (productNames !== null) {
                productName = productNames[0].substring(
                    6,
                    productNames[0].length - 1
                );
            }

            const priceRegex = /data-product-price="([\d\.]*?)"/gmu;
            const prices = divProducts[i].match(priceRegex);
            if (prices !== null) {
                productPrice = parseFloat(
                    prices[0].substring(20, prices[0].length - 1)
                );
            }

            if (productName && productPrice) {
                products.push({
                    name: productName,
                    price: productPrice,
                });
            } else {
                console.log("Regexp error(price)");
            }
        }
    }

    return products;
};
export default getAllPricesOnOnePage;
