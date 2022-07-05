import { EntityRepository, Repository } from "typeorm";
import { User } from "../entities/user";

@EntityRepository(User)
export class UserRepository extends Repository<User> {
    createAndSave(firstName: string, lastName: string) {
        const user = new User();
        user.firstName = firstName;
        user.lastName = lastName;
        console.log("여기면 성공");
        return this.manager.save(user);
    }
}
