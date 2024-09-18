const express = require("express");
const axios = require("axios");
require("dotenv").config()
const mongodb = require("mongodb");
const mongo_client = new mongodb.MongoClient(process.env.DB_URL);

// create a new server
const server = express();

// routes 
server.get("/", (request, response)  => {

    response.send({
        message: "Server works fine"
    })


})


// checks for request
server.get("/submit", async (request, response) => {

    // sends the request to the database
    const check_user = await mongo_client.db(process.env.DB_NAME).collection("users").findOne({"username": username})

    if(check_user){
            //done
            return {
                message: "user exists already",
                data: check_user,
                code: "success"
            }
    }
    
    
    return {
        message: "invalid username",
        data: null,
        code: "error"
    }


})

//listening to request 
server.listen(process.env.PORT, () => console.log(`Server is listening on http://0.0.0.0:${process.env.PORT}`))