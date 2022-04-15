import { models } from "@next-auth/sequelize-adapter";
import bcrypt from "bcrypt";
import { DataTypes, Model } from "sequelize";

import { sequelize } from "../../helpers/sequelize";

class User extends Model {
    comparePassword(password) {
        return bcrypt.compareSync(password, this["hash_password"]);
    }
    hashPassword(password) {
        return bcrypt.hash(password);
    }
}

User.init(
    {
        ...models.User,
        hash_password: DataTypes.STRING,
    },
    {
        sequelize,
        modelName: "user",
    }
);

export default User;