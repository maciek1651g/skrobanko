import getPriceFromMoreleSite from "./getPriceFromMoreleSite.js";
import saveProduct from "./savePrice.js";

const getPriceAndSave = async (name, category) => {
    const productLink = "https://www.morele.net" + name;
    getPriceFromMoreleSite(productLink).then((price) => {
        if (price !== null) {
            saveProduct(name.substring(1, name.length - 1), price, category);
        }
    });
};
export default getPriceAndSave;
