import fetch from "node-fetch";

const getPriceFromMoreleSite = async (url) => {
    const response = await fetch(url).catch((err) =>
        console.log("Request error(price)")
    );
    if (response) {
        const body = await response.text();

        const reg =
            /id="product_price_brutto" itemprop="price" content="([\d\.]*)"/gm;
        const arrayWithFoundTexts = reg.exec(body);
        if (arrayWithFoundTexts) {
            const price = parseFloat(arrayWithFoundTexts[1]);
            return price;
        }
    }
    return null;
};

export default getPriceFromMoreleSite;
