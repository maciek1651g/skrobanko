import fetch from "node-fetch";

const getPriceFromMoreleSite = async (url) => {
    const response = await fetch(url);
    const body = await response.text();

    const reg = /id="product_price_brutto" itemprop="price" content="([\d\.]*)"/gm;
    const arr = reg.exec(body);
    const price = parseFloat(arr[1]);
    return price;
};

export default getPriceFromMoreleSite;
