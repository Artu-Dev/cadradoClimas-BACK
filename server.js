const cors = require('cors')
const express = require('express');
const app = express();
const axios = require('axios');
require('dotenv').config()

const API_SECRET = process.env.API_SECRET;

app.use(cors())
//app.use((req, res, next) => {
  //console.log("acessou o middleware");
  //res.header('Access-Control-Allow-Origin','http://127.0.0.1:5500')
  //res.header("Access-Control-Allow-Methods", 'GET')
//  next();
//})

app.get('/:city', async(req, res) => {
  const city = req.params.city;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_SECRET}&lang=pt_br`;

  try {
    //response é a resposta do axios MAS eu tiro o data de dentro do response
    const { data } = await axios(url) 
    res.send(data)
  }catch (error) {
    console.log(error);
  }
})

app.listen('4567', ()=>{
  console.log('server running on 4567');
});
