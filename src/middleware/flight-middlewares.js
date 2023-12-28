const {ClientErrorsCodes} = require('../utils/error-code')

const validateCreateFlight = (req, res , next) => {
    if( 
        !req.body.flightNumber||
        !req.body.airplaneId||
        !req.body.departureAirportId||
        !req.body.arrivalAirportId||
        !req.body.arrivalTime||
        !req.body.departureTime||
        !req.body.price
        
        ){
                return res.status(ClientErrorsCodes.BAD_REQUEST).json({
                    data : {},
                    success: false,
                    message : 'invalid request body for create flight',
                    error: 'Missing mandatory properties to create a flight'
                })
        }
        next();
}


module.exports ={
    validateCreateFlight
}