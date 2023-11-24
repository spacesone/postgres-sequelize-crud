const { Notes } = require("../models/Notes");

const create = async (req,res) => {

    const {title,body} = req.body;
    console.log(title);

    if(!body || !title) {
        return res.status(404).json({
            error : true,
            message : "title and body cannot be empty"
        });
    }
    console.log(title);


    try {
        const newNote = await Notes.create({
            title : title,
            body : body
        });

        return res.status(200).json({
            ok : true,
            success : true,
            message : "note added successfully",
            data : newNote
        });
        
    } catch (error) {
        
        console.log(error);

        return res.status(500).json({
            error : true,
            message : "internal server error"
        })
    }
    
}

module.exports = {
    create
}