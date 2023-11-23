const { Notes } = require("../models/Notes");

const create = async (req,res) => {
    try {
        const title = "some test title";
        const body = "this is a test note";

        const newNote = await Notes.create({
            title : title,
            body : body
        })

        return res.status(200).json({
            data : newNote
        })

    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    create
}