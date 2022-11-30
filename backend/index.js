const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const apiPort = 3001;
const client = require('./dbConnection');
const db = client.db("mydb");
const collection = db.collection("transitions");
const dummyData = require('./dummyData.json');


app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

app.get('/', async (req, res)=>{
    try{
        res.send(await collection.find().toArray());
    }catch(e){
        console.error("Error in \"/");
    }finally {
        res.end();
    }
});

app.get('/transitions', async (req, res)=>{
    res.send(dummyData);
})

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))