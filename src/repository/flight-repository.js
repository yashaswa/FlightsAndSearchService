const {Flights}= require('../models/index');
const { Op }= require('sequelize');

class FlightRepository {

#createFilter(data){
    let filter = {};
    if(data.arrivalAirportId) {
        filter.arrivalAirportId = data.arrivalAirportId
    }
    if(data.departureAirportId){
        filter.departureAirportId = data.departureAirportId;
    }
    // if (data.minPrice && data.maxPrice){
    //     Object.assign(filter,{
    //         [Op.and]: [
    //             {price : {[Op.lte]: data.maxPrice } },
    //             {price : {[Op.gte]: data.minPrice } }
    //                   ]
    //     })
    // }


        let  priceFilter = [];
     if(data.minPrice){
       //  Object.assign(filter , {price: {[Op.gte]: data.minPrice}});//gte-> greater then or equal to, assign used for operator
        priceFilter.push({price: {[Op.gte]: data.minPrice}})
        }
     if(data.maxPrice){
    //     Object.assign(filter , {price: {[Op.lte]: data.maxPrice}}); //less then
        priceFilter.push({price: {[Op.lte]: data.maxPrice}})
     }
     Object.assign(filter,{[Op.and]: priceFilter});
    //Object.assign(filter,{[Op.and]: [{price : {[Op.lte]: 7000} },{price : {[Op.gte]: 4000} }]}) // using and for both of them
    return filter;
}

    async createFlight(data){
        try {
            const flight=await Flights.create(data);
            return flight;
        } catch (error) {
            console.log("something went wrong in the flight repository layer");
            throw{error};
        }

    }

    async getFlight(flightId) {

        try {
            const flight = await Flights.findByPk(flightId);
            return flight;
        } catch (error) {
            console.log("something went wrong in the flight repository layer");
            throw{ error };
        }

    }


    async getAllFlights( filter ) {

        try {
            const filterObject = this.#createFilter(filter);
            const flight=await Flights.findAll({
                where: filterObject
            });
            return flight;
        } catch ( error ) {
            console.log("something went wrong in the flight repository layer");
            throw{ error };
        }

    }

}
module.exports =FlightRepository;