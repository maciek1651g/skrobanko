import getCountOfPages from "./getCountOfPages.js";
import getBody from "./getBody.js";
import getAllPricesOnOnePage from "./getAllPricesOnOnePage.js";

const scanAllProductsInCategory = async (category, categoryFilter) => {
    const categoryLink = "https://www.morele.net/kategoria/" + category + "/";
    const firstCategoryPageBody = await getBody(categoryLink);
    const countOfPages = await getCountOfPages(firstCategoryPageBody);

    if (countOfPages !== null) {
        getAllPricesOnOnePage(firstCategoryPageBody, category);

        for (let i = 2; i <= countOfPages; i++) {
            console.log("Strona: " + i);

            const categoryPageLink = categoryLink + categoryFilter + "/" + i + "/";
            await scanCategory(categoryPageLink, category);
        }
    }
};

const scanCategory = async (categoryPageLink, category) => {
    const categoryPageBody = await getBody(categoryPageLink);
    if (categoryPageBody !== null) {
        getAllPricesOnOnePage(categoryPageBody, category);
    }
};

export default scanAllProductsInCategory;
