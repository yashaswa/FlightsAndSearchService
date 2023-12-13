const { CityService } = require('../services/index')

const cityService =new CityRepository();

const create = async (req,res)=>{
try {
     const city =await cityService.createcity(req.body)
     return res.status(201).json({
        data : city,
        success : true,
        message : 'successfully created a city',
        err: {}
     })
} catch(error){
    console.log(error);
    return res.status(500).json({
        data : {},
        success: false,
        message : 'not able to create a city',
        err: error
    });
}
}

const destroy  = async (req,res)=>{
    try {
        const response = await cityService.deletecity(req.params.id);
        return res.status(200).json({
            data : response,
            success: true,
            message : 'successfully deleted a city',
            err :error
        })
    } catch(error){
        console.log(error);
        
    }
}

const get = async (req,res)=>{
    try {
        const response = await cityService.getcity(req.params.id);
        return res.status(200).json({
            data : response,
            success: true,
            message : 'successfully fetched a city',
            err :error
        }) 
    } catch(error){
        console.log(error);
        return res.status(500).json({
            data : {},
            success: false,
            message : 'not able to get a city',
            err: error
        });
    }
}

const update = async (req,res)=>{
    try {
        const response = await cityService.updatecity(req.params.id,req.body);
        return res.status(200).json({
            data : response,
            success: true,
            message : 'successfully updated a city',
            err :error
        }) 
    } catch(error){
        console.log(error);
        return res.status(500).json({
            data : {},
            success: false,
            message : 'not able to update a city',
            err: error
        });
    }
}


module.exports{
    create,
    destroy,
    get,
    update
}