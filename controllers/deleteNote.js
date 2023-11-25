const { Notes } = require("../models/Notes");

const deleteNote = async (req, res) => {
    const noteID = req.params.id;

    if(!noteID){
        return res.status(404).json({
            error : true,
            message : "id is required"
        })
    }

        await Notes.destroy({
            where : {
                id : noteID
            }
        })
        .then( result => {
            if(result === 1) {
                return res.status(200).json({
                    ok : true,
                    succcess : true,
                    message : "deleted"
                })
            }
            else {
                return res.status(200).json({
                    error : true,
                    message : "can't delete"
                })
            }
        })
        .catch(error => {
            return res.status(500).json({
                error : true,
                message : "error deleting record"
            })
        })



 }

 module.exports = {
    deleteNote
 }