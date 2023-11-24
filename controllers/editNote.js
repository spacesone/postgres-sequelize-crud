const { Notes } = require("../models/Notes");


const editNote = async (req,res) => {
    const noteID = req.params.id;
    const title = req.body.title;
    const body = req.body.body;

    if (!noteID || !title || !body) {
        return res.status(404).json({
            error : true,
            message : "id, title and body are needed"
        })
    }

    

    
    try {

        try {
            const foundNote = await Notes.findByPk(noteID);
            console.log(foundNote);
        } 
        catch (error) {
    
            return res.status(200).json({
                test : true,
                message : error
            });
        }

        const updatedNote =  await Notes.update({
            title : title,
            body : body
        },
        {
            where : {
                id : noteID
            }
        })

        return res.status(200).json({
            ok : true,
            success : true,
            data : updatedNote
        })
    } catch (error) {
        console.log(error);
    }

}

module.exports = {
    editNote
}