const { City } =require('../models/index');

class CityRepository{
   async createcity({ name }){
    try{
        const city = await City.create({
            name
        });
        return city;
    }
    catch(error){
        console.log("something went wrong");
        throw {error};
    }
 }


   async deletecity(cityId){
    try{
        await City.destroy({
            where :{id:cityId}
        });
        return city;
    } catch(error){
        console.log("something went wrong");
        throw {error};
    }
   }



   async updatecity(cityId,data){try {
    const city =await City.update(data,{
        where :{
            id:cityId
        }
    });
    return city;
   } catch (error) {
    
   }
}



   async getcity(){
    try {
        const city =await City.findbyPK(cityId); // instead of where you can use find by pk read in modules queries
        return City;
    } catch (error) {
        console.log("something went wrong");
        throw {error};
    }
   }
}

module.exports = CityRepository;