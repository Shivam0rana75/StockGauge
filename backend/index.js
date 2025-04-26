import express from 'express';
import bodyParser from "body-parser";
import axios from "axios";
const app = express();
const port = 3000;
const CountryUrl = 'https://dumbstockapi.com/stock?countries=CA,US,IN'
app.use(bodyParser.urlencoded({extended : true}));

app.get('/getCountries' , async (req , res) =>{
    const response = await axios.get(CountryUrl);
    res.json(response.data)
})


app.listen(port , ()=>{
    console.log(`Serever running on port ${port}`)
})