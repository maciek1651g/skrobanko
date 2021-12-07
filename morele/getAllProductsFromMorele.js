import getAllCategoriesFromMorele from "./getAllCategoriesFromMorele.js";
import scanAllProductsInCategory from "./scanAllProductsInCategory.js";

const getAllProductsFromMorele = async () => {
    const categories = await getAllCategoriesFromMorele();
    for (let i = 0; i < categories.length; i++) {
        console.log(i + 1 + ". " + categories[i]);
        await scanAllProductsInCategory(categories[i]);
    }
};
export default getAllProductsFromMorele;
