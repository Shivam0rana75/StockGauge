import express from 'express';
import bodyParser from "body-parser";
import axios from "axios";
import cors from "cors";
const app = express();
const port = 3000;


app.use(cors());
app.use(bodyParser.json()); 



async function fetchSymbol(names) {
    const response = await Promise.all(
        names.map((name) => 
            axios.get(`https://api.twelvedata.com/symbol_search?symbol=${name}&apikey=e09231f7c31b4bb1b7c587b974f3bedd`)
        )
    );
    return response.map((res) => res.data.data[0]); 
}

async function fetchPrices(credentials){
    const response = await  Promise.all(
        credentials.map((obj)=> 
            axios.get(`https://api.twelvedata.com/time_series?symbol=${obj.symbol}&interval=1month&start_date=${obj.StartDate} &end_date=${obj.EndDate} &apikey=e09231f7c31b4bb1b7c587b974f3bedd`)
        )
    )
    return response
}


app.post('/get-info', async (req, res) => {
    console.log(req.body); 

    const UserInput = req.body;

    
    if (!UserInput) {
        return res.status(400).json({ error: "Request body is missing" });
    }

    
    if (!Array.isArray(UserInput)) {
        return res.status(400).json({ error: "Request body should be an array" });
    }

    try {
        const names = UserInput.map((field) => field.name);
        const response = await fetchSymbol(names);
        
        const credentials = UserInput.map((obj, index) => { 
            return { 
                ...obj, 
                symbol: response[index].symbol 
            };
        });
        const Prices = await fetchPrices(credentials);
        const prizedata = Prices.map(response => response.data);
        res.json(prizedata);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
