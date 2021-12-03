import fetch from "node-fetch";

const getCountOfPages = async (categoryLink) => {
    const response = await fetch(categoryLink).catch((err) =>
        console.log("Request error(num of pages)")
    );

    if (response) {
        let body = await response.text();

        const reg = /data-page="([\d]*?)" class="pagination-btn-nolink-anchor"/gmu;
        const arrayWithFoundTexts = reg.exec(body);

        if (arrayWithFoundTexts) {
            const countOfPages = parseInt(arrayWithFoundTexts[1]);
            return countOfPages;
        }
    }

    return null;
};
export default getCountOfPages;
