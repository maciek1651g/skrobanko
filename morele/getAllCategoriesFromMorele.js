import fetch from "node-fetch";

const getAllCategoriesFromMorele = async () => {
    const response = await fetch("https://www.morele.net/").catch((err) =>
        console.log("Request error(main page)")
    );
    if (response) {
        const body = await response.text();

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
