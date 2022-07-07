import express, { Application, NextFunction } from "express";
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

    errorHandler() {
        this.app.use((req, res, next) => {
            const err: any = new Error(
                `${req.method} ${req.url} 라우터가 없습니다`,
            );
            err.status = 404;
            next(err);
        });

        // eslint-disable-next-line no-unused-vars
        this.app.use((err: any, req: any, res: any, next: NextFunction) => {
            res.locals.message = err.message;
            res.locals.error = process.env.NODE_ENV !== "production" ? err : {};
            res.status(err.status || 500);

            console.error(err);
            res.json({ message: err.message });
        });
    }
}

export default new App().app;
