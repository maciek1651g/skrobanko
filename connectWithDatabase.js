import pgPromise from "pg-promise";

const makeConnection = async () => {
    const pgp = pgPromise();
    const db = pgp({
        connectionString: "postgres://postgres:postgres@localhost:5432/prices",
        allowExitOnIdle: true,
    });

    const response = await db.query("SELECT * FROM morele").catch((err) => {
        console.log("Database error");
    });

    console.log(response);
};
export default makeConnection;
