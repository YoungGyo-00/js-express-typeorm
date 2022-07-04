import express, { Application, Request, Response, NextFunction } from "express";

class App {
    public app: Application;

    constructor() {
        this.app = express();
        this.getRouter();
    }

    getRouter() {
        this.app.set("port", 8080);
        this.app.get("/", (req: Request, res: Response, next: NextFunction) => {
            res.send("connect");
        });
    }
}

export default new App().app;
