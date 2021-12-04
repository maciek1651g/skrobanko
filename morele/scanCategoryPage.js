import fetch from "node-fetch";
import getAllPricesOnOnePage from "./getAllPricesOnOnePage.js";

const scanCategoryPage = async (url, category) => {
    const response = await fetch(url).catch((err) =>
        console.log("Request error(category pages)")
    );

    if (response) {
        const body = await response.text();
        getAllPricesOnOnePage(body, category);
    }
};
export default scanCategoryPage;
