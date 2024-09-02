const express =require('express');
const bodyparser = require("body-parser");


const { PORT }=require('./config/serverConfig')
const ApiRoutes =require('./routes/index');

const db = require('./models/index');
const {Airplane}=require('./models/index');


const SetupAndStartServer= async function (){
// create a express object
const app = express();
app.use(bodyparser.json());// iska kaam yeh hai ki 
app.use(bodyparser.urlencoded({extended: true}));// jo bhi hum json me bharte hai usko database se connect karta hai or response bhejta hai

app.use('/api',ApiRoutes);//app.use is use to mount middlewares apiroutes is middleware

app.listen(PORT, async ()=>{//                app.listen is use to start express and bind it to port
    console.log(`server started at ${PORT}`);
    if(process.env.SYNC_DB) {
        db.sequelize.sync({alter : true});
    }
    
})


}
SetupAndStartServer();


 
