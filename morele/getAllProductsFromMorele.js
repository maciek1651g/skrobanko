import getAllCategoriesFromMorele from "./getAllCategoriesFromMorele.js";
import scanAllProductsInCategory from "./scanAllProductsInCategory.js";

const getAllProductsFromMorele = async () => {
    const categories = await getAllCategoriesFromMorele();
    for (let i = 0; i < categories.length; i++) {
        scanAllProductsInCategory(categories[i]);
    }
};
export default getAllProductsFromMorele;
