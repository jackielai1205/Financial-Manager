import client from "./dbConnection";
const db = client.db("mydb");
const collection = db.collection("transaction");
const express = require("express");
const {ObjectId} = require("mongodb");

const router = express.Router();

//transactions/get-transaction-list//
router.get('/get-transaction-list', (async (req, res)=>{
    res.send(await collection.find().toArray());
    res.end();
}))

//transactions/deleteTransaction//
router.post('/delete-transaction', (async (req, res)=>{
    const id = req.body._id;
    console.log(id);
    try{
        console.log(await collection.deleteOne({_id:ObjectId(id)}));
    }catch(e){
        console.error(e);
    }
    res.end();
}))

//transactions/essential//
router.get('/essential', (async (req, res)=>{
    const essential = await collection.aggregate([{$group:{_id: "$essential", sum:{$sum: 1}}}]).toArray();
    res.end(essential);
    //db.collection.aggregate([{$group: {_id:"$groupField", sum_val:{$sum:"$valueField"}}}])
}))

//transactions/total-cost//
router.get('/total-cost', (async (req, res)=>{
    const totalCost = await collection.aggregate([{ $match: {} },{$group:{_id: null, sum:{$sum: "$amount"}}}]).toArray();
    const response = {
        totalCost: totalCost[0].sum
    }
    console.log(response);
    res.send(response)
    res.end();
}))

export default router;
