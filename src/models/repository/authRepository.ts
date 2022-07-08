import { Service } from "typedi";
import User from "../entities/user";

@Service()
class AuthRepository {
    async signup(user: User): Promise<string> {
        try {
            const result = await User.save(user);
            return "성공";
        } catch (err) {
            return "실패";
        }
    }
}

export { User };
export default AuthRepository;
