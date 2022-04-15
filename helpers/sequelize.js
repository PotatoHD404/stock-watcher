const globalAny = global;
import {Sequelize} from "sequelize";

let cached = globalAny.sequelize;

if (!cached) {
    cached = globalAny.sequelize = {conn: null, promise: null};
}

export let sequelize = new Sequelize(process.env.SECRET_CONNECTION_URI)

sequelize.sync();
