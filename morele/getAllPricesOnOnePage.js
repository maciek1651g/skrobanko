import getPriceAndSave from "./getPriceAndSave.js";

const getAllPricesOnOnePage = async (body, category) => {
    const reg = /class="productLink" href="(.*?)"/gmu;
    let productName;
    while ((productName = reg.exec(body)) !== null) {
        getPriceAndSave(productName[1], category);
    }
};
export default getAllPricesOnOnePage;
