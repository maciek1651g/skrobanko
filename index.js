const https = require("https");
const options = {
    hostname: "www.morele.net",
    port: 443,
    path: "/podstawka-chlodzaca-genesis-oxid-450-rgb-7138805/",
    method: "GET",
};

const req = https.request(options, (res) => {
    console.log(`statusCode: ${res.statusCode}`);

    res.on("data", (d) => {
        process.stdout.write(d);
    });
});

req.on("error", (error) => {
    console.error(error);
});

req.end();
