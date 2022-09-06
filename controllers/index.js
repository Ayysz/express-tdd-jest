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
            message: 'Success created data',
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

exports.editData = async (req, res) => {
    try{
        const reqData = req.body;
        const id = req.params.id;
        
        const oldData = await User.findOne({where:id});

        const response = await User.update(reqData, {
            where: id
        });

        console.log(response);
        console.log('Data Lama');
        console.log(oldData);

        return res.status(200)
        .json({
            status: 'success',
            message: 'Success Edit data',
            oldData: oldData,
            data: response
        })

    }catch(error){
        return res.status(400)
        .json({
            status: 'Error',
            error: error.message
        })
    }
};

exports.destroy = async (req, res) => {
    try {
        const id = req.params.id;

        const response = await User.destroy({where:id});

        return res.status(402)
        .json({
            status: 'success',
            message: 'Success deleted data'
        });

    } catch (error) {
        return res.status(400)
        ,json({
            status: 'Error',
            message: error.message
        })
    }
}