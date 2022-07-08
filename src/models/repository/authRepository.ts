import { Service } from "typedi";
import User from "../entities/user";

@Service()
class AuthRepository {
    async signup(): Promise<string> {
        try {
            const user = new User();
            user.firstName = "test";
            user.lastName = "test";

            const result = await User.save(user);
            return "성공";
        } catch (err) {
            return "실패";
        }
    }
}

export { User };
export default AuthRepository;
