import * as configs from "./config";
import { ConnectionOptions } from "typeorm";

const env: string = process.env.NODE_ENV || "development";

const connectionOptions: ConnectionOptions = configs[env];

export default connectionOptions;
