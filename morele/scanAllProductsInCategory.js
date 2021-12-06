import getCountOfPages from "./getCountOfPages.js";
import getBody from "./getBody.js";
import getAllPricesOnOnePage from "./getAllPricesOnOnePage.js";

const scanAllProductsInCategory = async (category) => {
    const categoryLink = "https://www.morele.net/kategoria/" + category + "/";
    const firstCategoryPageBody = await getBody(categoryLink);
    const countOfPages = await getCountOfPages(firstCategoryPageBody);

    if (countOfPages !== null) {
        console.log(category);

        getAllPricesOnOnePage(firstCategoryPageBody, category);

        for (let i = 2; i <= countOfPages; i++) {
            console.log("Strona: " + i);

            const categoryPageLink = categoryLink + ",,,,,,,,,,,,/" + i + "/";
            await scanCategory(categoryPageLink, category);
        }
    }
    return null;
};

const scanCategory = async (categoryPageLink, category) => {
    const categoryPageBody = await getBody(categoryPageLink);
    if (categoryPageBody !== null) {
        getAllPricesOnOnePage(categoryPageBody, category);
    }
};

export default scanAllProductsInCategory;
