#Welcome  to flight service

#project setup 
-clone the project on yout local 
-execute `npm install ` on the same path as of your root directory of the download project 
-create a `.env ` file in the root directory and add the following enviroment variable 
-`port = 3001`
- inside the `src/config`folder create a new file `config.json` and then add the following piece of json
{
  "development": {
    "username": "<your database login>,
    "password": "<db password>",
    "database": "flightsearchdev",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
# DB design
-Airplane
-Flight
-Airport
-city