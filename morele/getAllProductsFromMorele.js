import getAllCategoriesFromMorele from "./getAllCategoriesFromMorele.js";
import scanAllProductsInCategory from "./scanAllProductsInCategory.js";

const getAllProductsFromMorele = async () => {
    const categoriesWithFilters = await getAllCategoriesFromMorele();

    for (let i = 0; i < categoriesWithFilters.length; i++) {
        console.log(i + 1 + ". " + categoriesWithFilters[i][0]);

        await scanAllProductsInCategory(
            categoriesWithFilters[i][0],
            categoriesWithFilters[i][1]
        );
    }
};
export default getAllProductsFromMorele;
