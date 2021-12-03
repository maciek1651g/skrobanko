import fetch from "node-fetch";
import getAllPricesOnOnePage from "./getAllPricesOnOnePage.js";
import getCountOfPages from "./getCountOfPages.js";

const scanAllProductsInCategory = async (category) => {
    const categoryLink = "https://www.morele.net/kategoria/" + category + "/";
    const countOfPages = await getCountOfPages(categoryLink);

    if (countOfPages !== null) {
        console.log(category);
        for (let i = 1; i <= countOfPages; i++) {
            console.log("Strona: " + i);

            const response = await fetch(
                categoryLink + ",,,,,,,,,,,,/" + i + "/"
            ).catch((err) => console.log("Request error(category pages)"));

            if (response) {
                const body = await response.text();
                getAllPricesOnOnePage(body, category);
            }
        }
    }
    return null;
};

export default scanAllProductsInCategory;
