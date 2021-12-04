import getCountOfPages from "./getCountOfPages.js";
import scanCategoryPage from "./scanCategoryPage";

const scanAllProductsInCategory = async (category) => {
    const categoryLink = "https://www.morele.net/kategoria/" + category + "/";
    const countOfPages = await getCountOfPages(categoryLink);

    if (countOfPages !== null) {
        console.log(category);
        for (let i = 1; i <= countOfPages; i++) {
            console.log("Strona: " + i);

            const categoryPageLink = categoryLink + ",,,,,,,,,,,,/" + i + "/";
            scanCategoryPage(categoryPageLink, category);
        }
    }
    return null;
};

export default scanAllProductsInCategory;
