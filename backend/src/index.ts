import "source-map-support/register";
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const apiPort = 3001;
import client from './dbConnection'
const db = client.db("mydb");
const collection = db.collection("transaction");
const dummyData = require('../transactionDummyData.json');
//automatically import default
import transactionRouter from "./transactionQuery"


app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

app.use('/transactions', transactionRouter);

app.get('/', async (req, res)=>{
    try{
        res.send(await collection.find().toArray());
    }catch(e){
        console.error("Error in \"/");
    }finally {
        res.end();
    }
});

// app.get('/transactions', async (req, res)=>{
//     res.send(dummyData);
//     res.end();
// })

app.post('/insert-transaction', async (req, res) =>{
    const request = req.body;
    try{
        const result = await collection.insertOne(request);
        console.log(result);
    }catch(e){
        console.error(e);
    }finally {
        res.end();
    }
})


app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))