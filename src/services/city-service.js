const {CityRepository}=require('../repository/index')
class CityService{
    constructor(){
        this.CityRepository= new CityRepository();
    }
    async createcity(){
        try {
            const result =await this.CityRepository.createcity(data);
            return CityRepository;
        } catch (error) {
            console.log("something went wrong at service layer");
            throw {error};
        }
    }

    async deletecity(cityId){
        try {
            const response = this.CityRepository.deletecity(cityId);
        } catch (error) {
            console.log("something went wrong at service layer");
            throw {error};
        }
    }
    async updatecity(cityId,data){
        try {
            const city =await this.CityRepository.updatecity(cityId,data);
            return city;
        } catch (error) {
            console.log("something went wrong at service layer");
            throw {error};
        }
    }
    async getcity(cityId){
        try {
            const city =await this.CityRepository.getcity(cityId);
            return city;
        } catch (error) {
            console.log("something went wrong at service layer");
            throw {error};
        }
    }
}