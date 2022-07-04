import express, { Router, Request, Response, NextFunction } from "express";

class testRouter {
    public router: Router = express.Router();

    constructor() {
        this.router;
        this.get();
    }

    get() {
        this.router.get(
            "/",
            (req: Request, res: Response, next: NextFunction) => {
                res.send("test");
            },
        );
    }
}

export default new testRouter().router;
