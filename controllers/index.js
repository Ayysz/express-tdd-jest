const { User } = require('../models');

exports.getAll = async (req, res) => {
    try {
       const data = await User.findAll();
       return res.status(200)
       .json({
            status: 'Success',
            data: data
       });
       
    } catch (error) {
        return res.status(400)
        .json({
            status: 'Error',
            error: error.message
        });
    }
};

exports.getId = async (req, res) => {
    try{
        const data = await User.findOne({
            where:{
                id: req.params.id
            }
        })
        if(data === null){
            return res.status(400)
            .json({
                status: 'null',
                message: 'Data tidak ditemukan',
                data
            })
        }else{
            return res.status(200)
            .json({
                status: 'success',
                message: 'Data Berhasil ditemukan',
                data
            })
        }

        
    }catch(error){
        return res.status(400)
        .json({
            status: 'Error',
            error: error.message
        });
    }
};

exports.addData = async (req, res) => {
    try {
        const reqData = req.body;

        const response = await User.create(reqData);

        return res.status(201)
        .json({
            message: 'Susccess created data',
            data: reqData
        });

    } catch (error) {
        return res.status(400)
        .json({
            status: 'Error',
            error: error.message,
        })
    }
};

