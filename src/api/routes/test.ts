import express, { Router, Request, Response, NextFunction } from "express";
import { getCustomRepository, getRepository } from "typeorm";
import { UserRepository } from "../../repository/testRepository";
import { User } from "../../entities/user";

class testRouter {
    public router: Router = express.Router();
    public userRepository: any;

    constructor() {
        this.router;
        this.userRepository = getRepository(User);
        this.post();
    }

    post() {
        this.router.post(
            "/",
            async (req: Request, res: Response, next: NextFunction) => {
                const user: User = new User();

                user.firstName = "test";
                user.lastName = "test";
                await this.userRepository.save(user);
            },
        );
    }
}

export default new testRouter().router;
