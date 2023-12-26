const airplane = require('../models/airplane');
const {FlightRepository,AirplaneRepository }=require('../repository/index');
const { compareTime} = require('../utils/helper');

class FlightService{

    constructor(){
         this.airplaneRepository = new AirplaneRepository();
         this.flightRepository   = new FlightRepository();
    }

    async createFlight(data){
        try {
            if(!compareTime(data.arrivalTime,data.departureTIme)){
                throw{error: 'arrival time cannot be less than departure time'}
            }
            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
            const flight = await this.flightRepository.createFlight({
                ...data , totalSeats : airplane.capacity
            });
            return flight;
        } catch (error) {
            console.log("something went wrong in the flight repository layer");
            throw{error};
        }
    }

    async getFlightData(){

    }
}
module.exports =FlightService;