import express, { Router, Request, Response, NextFunction } from "express";
import { getCustomRepository } from "typeorm";
import { UserRepository } from "../../repository/testRepository";

class testRouter {
    public router: Router = express.Router();
    public userRepository: UserRepository;

    constructor() {
        this.router;
        this.userRepository = getCustomRepository(UserRepository);
        this.post();
    }

    post() {
        this.router.post(
            "/",
            (req: Request, res: Response, next: NextFunction) => {
                this.userRepository.createAndSave("test", "test");
            },
        );
    }
}

export default new testRouter().router;
