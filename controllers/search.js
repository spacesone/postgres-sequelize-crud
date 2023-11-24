const {Notes} = require("../models/Notes");
const {Op} = require("sequelize");


const search = async (req, res) => {
    const queryString = req.params.queryString;

    if(!queryString) {
        return res.status(404).json({
            error : true,
            message : "query string is required"
        })
    }

    try {
        /* const foundNotes = await Notes.findAll({
            where : {
                [Op.like] : [
                    {
                        title : '%' + queryString
                    },
                    {
                        body : '%' + queryString
                    }
                ]
            }
        }) */


        const foundNotes = await Notes.findAll({
            where : {
                [Op.or] : [
                    {
                        title : {
                            [Op.like] : `%${queryString}%`
                        }
                    },
                    {
                        body : {
                            [Op.like] : `%${queryString}%`
                        }
                    }
                ]
            }
        })

        return res.status(200).json({
            success : true,
            data : foundNotes
        })
    } catch (error) {
        console.log(error)
        return res.status(404).json({
            error : true,
            message : error
        })
    }
}

module.exports = {
    search
}