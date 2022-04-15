import User from "../../../database/models/User";

export default async function register(req, res, {name, email, hash_password}) {
    const alreadyExistsUser = await User.findOne({where: name}).catch(
        (err) => {
            console.log("Error: ", err);
        }
    );

    if (alreadyExistsUser) {
        return res.json({message: "Cringe"})
    }

    const newUser = new User({name, email, hash_password});
    const savedUser = await newUser.save().catch((err) => {
        console.log("Error: ", err);
        res.json({error: "More cringe!"});
    });

    if (savedUser) res.json({message: "No cringe"});
}