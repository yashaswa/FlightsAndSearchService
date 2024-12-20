const { Op } =  require('sequelize');

const { City } =require('../models/index');




class CityRepository{
   async createCity({ name }){
        try {
            const city = await City.create({
                name
            });
            return city;
        } catch (error) {
           console.log("something went wrong in the repository layer");
           throw {error};          
        }
   }

   async deleteCity(cityId){
    try {
            await City.destroy({
                where: {
                    id: cityId
                }
            })
            return true;
   } catch (error) {
    console.log("something went wrong in repository layer");
    throw {error};
   }}

   async updateCity(cityId,data){
    try {
        const city =await City.update(data ,{
            where :{
                id: cityId
            }
        });
        return city;
    } catch (error) {
        console.log("something went wrong in repository layer");
        throw {error};
    }
   }

   async getCity(cityId){
    try {
        const city =await City.findByPk(cityId,{attributes: ['id', 'name', 'createdAt', 'updatedAt'],});
        return city;
    } catch (error) {
        console.log("something went wrong in repository layer");
        throw {error};
    }
   }

   async getAllCities(filter){//it can be empty  also// ye jo filter hai tu service  me jaake dekh agar name:filter.name likha hai matlab 
    //ki tu query me name pass karega us par ye check karega ki "p" to p naam se kitne city hai wo bhej dega
    try { if(filter.name) {
        const cities = await City.findAll({attributes: ['id', 'name', 'createdAt', 'updatedAt'],
            where :{
                name: {
                    [Op.startsWith]: filter.name
                }
            }
        });
        return cities;
    }
        const cities = await City.findAll({attributes: ['id', 'name', 'createdAt', 'updatedAt'],});
        return cities;
    } catch (error) {
        console.log("something went wrong in repository layer");
        throw {error};
    }
   }
}

module.exports = CityRepository;