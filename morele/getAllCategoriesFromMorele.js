import getBody from "./getBody.js";

const getAllCategoriesFromMorele = async () => {
    const body = await getBody("https://www.morele.net/");
    if (body !== null) {
        const reg = /href="\/kategoria\/.*?"/gmu;
        const arrayWithFoundTexts = body.match(reg);

        if (arrayWithFoundTexts) {
            const categories = new Set();
            for (let i = 0; i < arrayWithFoundTexts.length; i++) {
                const category = arrayWithFoundTexts[i]
                    .substring(7, arrayWithFoundTexts[i].length - 2)
                    .split("/");

                if (category.length === 2) {
                    categories.add([category[1], ",,,,,,,,0,,,,"]);
                } else if (category.length === 4) {
                    const categoryTmp = category.join("/");
                    categories.add([category[1], category[2]]);
                }
            }

            return [...categories];
        }
    }
    return null;
};

export default getAllCategoriesFromMorele;
