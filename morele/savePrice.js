import pgPromise from "pg-promise";

const pgp = pgPromise();
const db = pgp({
    connectionString: "postgres://postgres:postgres@localhost:5432/prices",
    allowExitOnIdle: true,
});

const savePrice = async (name, price, category) => {
    const response = await db
        .query("CALL public.addprice($1, $2, $3)", [name, price, category])
        .catch((err) => {
            console.log("Database error");
        });
};
export default savePrice;