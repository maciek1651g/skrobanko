import fetch from "node-fetch";

const getBody = async (url) => {
    const response = await fetch(url).catch((err) =>
        console.log("Request error(" + url + ")")
    );

    if (response) {
        const body = await response.text();
        return body;
    }

    return null;
};

export default getBody;
