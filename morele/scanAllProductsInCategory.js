import getCountOfPages from "./getCountOfPages.js";
import getBody from "./getBody.js";
import getAllPricesOnOnePage from "./getAllPricesOnOnePage.js";

const scanAllProductsInCategory = async (category, categoryFilter) => {
    const categoryLink = "https://www.morele.net/kategoria/" + category + "/";
    const firstCategoryPageBody = await getBody(categoryLink);
    const countOfPages = await getCountOfPages(firstCategoryPageBody);

    if (countOfPages !== null) {
        getAllPricesOnOnePage(firstCategoryPageBody, category);
        const tasks = [];

        for (let i = 2; i <= countOfPages; i++) {
            console.log("Strona: " + i);

            const categoryPageLink = categoryLink + categoryFilter + "/" + i + "/";
            tasks.push(await scanCategory(categoryPageLink, category));
        }
        /*for (let i = 0; i < tasks.length; i++) {
            await tasks[i];
        }*/
    }
};

const scanCategory = async (categoryPageLink, category) => {
    const categoryPageBody = await getBody(categoryPageLink);
    if (categoryPageBody !== null) {
        await getAllPricesOnOnePage(categoryPageBody, category);
    }
};

export default scanAllProductsInCategory;
