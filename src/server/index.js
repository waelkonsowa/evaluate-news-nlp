const dotenv = require('dotenv');
dotenv.config();

var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

const app = express()

const bodyParser = require("body-parser");
app.use(bodyParser.json())

const fetch = require("node-fetch");
const cors = require("cors");

app.use(express.static('dist'))

console.log(__dirname)

const baseUrl = "https://api.meaningcloud.com/sentiment-2.1?key="
// const key = process.env.API_KEY;
const apiData = {api_key : process.env.API_KEY}

console.log(`Your API key is ${apiData.api_key}`);

let api_end_data = {};

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('dist/index.html'))
})

app.post('/get', async(req,res)=>{
    console.log(req.body)
    const response = await fetch(`${baseUrl}${apiData.api_key}&lang=auto&url=${req.body.key}`);
    try{
        let apiResponse = await response.json();
        // console.log("apiResponse " + apiResponse);
        res.send(apiResponse);
    }catch{
        console.log("error",err); 
    }
})

// designates what port the app will listen to for incoming requests
app.listen(8085, function () {
    console.log('Example app listening on port 8085!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
