import getBody from "./getBody.js";

const getAllCategoriesFromMorele = async () => {
    const body = await getBody("https://www.morele.net/");
    if (body !== null) {
        const reg = /href="\/kategoria\/(.*?)\/"/gmu;
        const arrayWithFoundTexts = body.match(reg);

        if (arrayWithFoundTexts) {
            const categories = new Set();
            for (let i = 0; i < arrayWithFoundTexts.length; i++) {
                categories.add(arrayWithFoundTexts[i].split("/")[2]);
            }

            return [...categories];
        }
    }
    return null;
};

export default getAllCategoriesFromMorele;
