import fetch from "node-fetch";
import getPriceFromMoreleSite from "./getPriceFromMoreleSite.js";

const scanAllProductsInCategory = async (category) => {
    const categoryLink = "https://www.morele.net/kategoria/" + category + "/";
    const response = await fetch(categoryLink).catch((err) =>
        console.log("Request error")
    );

    if (response) {
        let body = await response.text();

        const reg = /data-page="([\d]*?)" class="pagination-btn-nolink-anchor"/gmu;
        const arrayWithFoundTexts = reg.exec(body);

        if (arrayWithFoundTexts) {
            const countOfPages = parseInt(arrayWithFoundTexts[1]);

            for (let i = 1; i <= countOfPages; i++) {
                console.log("Strona: " + i);
                const reg = /class="productLink" href="(.*?)"/gmu;
                let productName;
                while ((productName = reg.exec(body)) !== null) {
                    const productLink = "https://www.morele.net" + productName[1];
                    const price = await getPriceFromMoreleSite(productLink);
                    console.log(price);
                    //save record
                    return;
                }

                if (i + 1 <= countOfPages) {
                    const response = await fetch(
                        categoryLink + ",,,,,,,,0,,,,/" + (i + 1) + "/"
                    ).catch((err) => console.log("Request error"));
                    body = await response.text();
                }
            }
        }
    }
    return null;
};

export default scanAllProductsInCategory;
