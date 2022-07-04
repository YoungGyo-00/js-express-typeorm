import path from "path";
import * as dotenv from "dotenv";
dotenv.config({ path: __dirname + "/.env" });

const {
    _USERNAME,
    PASSWORD,
    DATABASE,
    DATABASE_PRODUTION,
    DATABASE_TEST,
    HOST,
    TYPE,
    PORT,
} = process.env;

const development = {
    type: TYPE,
    host: HOST,
    port: PORT,
    username: _USERNAME,
    password: PASSWORD,
    database: DATABASE,
    synchronize: true,
    logging: true,
    dropSchema: false,
    // entities: [path.join(__dirname, "..", "entities", "*.ts")],
};

const production = {};

export { development, production };
