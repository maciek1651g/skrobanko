import fetch from "node-fetch";

const getPriceFromMoreleSite = async (url) => {
    const response = await fetch(url).catch((err) => console.log("Request error"));
    if (response) {
        const body = await response.text();

        const reg =
            /id="product_price_brutto" itemprop="price" content="([\d\.]*)"/gm;
        const arr = reg.exec(body);
        if (arr) {
            const price = parseFloat(arr[1]);
            return price;
        }
    }
    return null;
};

export default getPriceFromMoreleSite;
