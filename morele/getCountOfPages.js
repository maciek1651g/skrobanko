const getCountOfPages = async (categoryPageBody) => {
    const reg = /data-page="([\d]*?)" class="pagination-btn-nolink-anchor"/gmu;
    const arrayWithFoundTexts = reg.exec(categoryPageBody);

    if (arrayWithFoundTexts) {
        const countOfPages = parseInt(arrayWithFoundTexts[1]);
        return countOfPages;
    }

    return null;
};
export default getCountOfPages;
