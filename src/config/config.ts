import path from "path";
import dotenv from "dotenv";
dotenv.config();

const {
    USERNAME,
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
    username: USERNAME,
    password: PASSWORD,
    database: DATABASE,
    synchronize: true,
    logging: true,
    dropSchema: false,
    entities: [path.join(__dirname, "..", "entities", "*.ts")],
};

const production = {};

export { development, production };
