import express, { Application } from "express";
import ApiController from "./api/routes/index";

class App {
    public app: Application;

    constructor() {
        this.app = express();
        this.getRouter();
    }

    getRouter() {
        this.app.set("port", 8080);
        this.app.use(ApiController);
    }
}

export default new App().app;
