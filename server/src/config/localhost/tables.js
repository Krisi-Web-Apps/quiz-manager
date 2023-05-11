require("dotenv").config();
require("module-alias/register");
require("colors");

const { executeQuery, readSQLFileAsString } = require("@src/utils");
const connection = require("@src/config/mysql");

let createdTablesCount = 0;

const SQL_TABLES = [
    {
        name: "users",
        filePath: "src/sql/users",
    },
];

const createTables = () => {
    let promises = [];

    SQL_TABLES.forEach((item) => {
        const promise = createTable(
            item.name,
            readSQLFileAsString(item.filePath)
        );
        promises.push(promise);
    });

    Promise.all(promises).then(() => {
        console.log(`Created tables count: ${createdTablesCount}`);
        process.exit(0);
    });
};

const createTable = async (name, sql) => {
    const checkIsTableExists = `SHOW TABLES LIKE "${name}";`;

    {
        const result = await executeQuery(checkIsTableExists, connection);

        if (result.length > 0) {
            console.log(`The table '${name}' already exists!`.yellow);
            return;
        }
    }

    const result = await executeQuery(sql, connection);

    if (typeof result === "object") {
        createdTablesCount++;
        console.log(`Table '${name}' is created!`.green);
        return;
    }

    throw new Error(result);
};

createTables();
