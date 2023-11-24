const {Notes} = require("../models/Notes");

const getSingleNote = async (req, res) => {
    const noteID = req.params.id;

    if(!noteID) {
        return res.status(404).json({
            error : true,
            message : "id is required"
        })
    }

    try {

        const foundNote = await Notes.findByPk(noteID);
        
        return res.status(200).json({
            ok : true,
            success : true,
            data : foundNote
        })
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error : true,
            message : "internal server error"
        })
    }
}

module.exports = {
    getSingleNote
}