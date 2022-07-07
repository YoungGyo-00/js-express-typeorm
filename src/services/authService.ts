import { Service } from "typedi";
import AuthRepository, { User } from "../models/repository/authRepository";

@Service()
class UserService {
    constructor(private authRepository: AuthRepository) {}

    signup() {
        return this.authRepository.signup();
    }
}

export default UserService;
