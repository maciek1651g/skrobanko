import getPriceFromMoreleSite from "./getPriceFromMoreleSite.js";

const price = await getPriceFromMoreleSite(
    "https://www.morele.net/mysz-razer-naga-pro-rz01-03420100-r3g1-7244819/"
);

console.log(price);
