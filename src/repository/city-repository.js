const { City } =require('../models/index');

class CityRepository{
   async createCity({ name }){
        try {
            const city = await City.create({
                name
            });
            return city;
        } catch (error) {
           console.log("something went wrong in th e repository layer");
           throw {error};          
        }
   }

   async deleteCity(cityId){
    try {
            await city.destroy({
                where: {
                    id: cityId
                }
            })
            return true;
   } catch (error) {
    console.log("something went wrong in repository layer");
    throw {error};
   }}

   async updateCity(){
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

   async getCity(){
    try {
        const city =await City.findByPk(cityId);
        return city;
    } catch (error) {
        console.log("something went wrong in repository layer");
        throw {error};
    }
   }
}

module.exports = CityRepository;