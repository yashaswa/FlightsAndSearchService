const { json } = require('body-parser');
const { FlightService } = require('../services/index');
const { response } = require('express');

const flightService =new FlightService();

const create = async (req , res) => {


    try {
        const flightRequestData = {// doing this so nothing other then this go inside service layer
            flightNumber: req.body.flightNumber,
            airplaneId: req.body.airplaneId,
            departureAirportId: req.body.departureAirportId,
            arrivalAirportId: req.body.arrivalAirportId,
            arrivalTime: req.body.arrivalTime,
            departureTime: req.body.departureTime,
            price        : req.body.price

        }
        const flight = await flightService.createFlight(flightRequestData);
        return res.status(201).json({
            data : flight,
            success :true,
            err: {},
            message: 'successfully created the flight'
        })
    } catch (error) {

        console.log(error);
    return res.status(500).json({
        data : {},
        success: false,
        message : 'not able to create a flight',
        err: error

    });

    }
}

const getAll = async (req,res) =>{
    try {
        const response = await flightService.getAllFlightData(req.query);
        return res.status(200).json({
            data : response,
            success :true,
            err: {},
            message: 'successfully fetched the flight'
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success: false,
            message : 'not able to fetch the flights',
            err: error
        })
    
    }
}

module.exports = {
    create,
    getAll
    
}