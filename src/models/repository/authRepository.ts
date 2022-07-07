import User from "../entities/user";

class AuthRepository {
    async signup(): Promise<Mutation<User>> {
        try {
            const user = new User();
            user.firstName = "test";
            user.lastName = "test";

            const result = await User.save(user);
            return {
                success: true,
                result,
            };
        } catch (err) {
            return {
                success: false,
                error: err,
            };
        }
    }
}

export { User };
export default AuthRepository;
