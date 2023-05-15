const express = require('express')
const database = require('./db.js') 
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser')

const app = express()
const port = 5000
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
 

app.get('/api/posts/get',async (req,res) => {
    let collection = (await database).collection('Posts')
    let posts = await collection.find().toArray()
    
    res.status(200)
    return res.json({'posts':posts})
})

app.get('/api/posts/post', async (req,res) => {
    
    let collection = (await database).collection('Posts')
    let result = await collection.insertOne({...req.body,like_count:0,likes:[]})

    res.status(200)
    return res.json({'result':result})

})

app.get('/api/post/:id',(req,res) => {

})

app.get('/api/post/:id/comments',(req,res) => {

})

app.get('/api/post/:id/comments',(req,res) => {

})

app.get('/api/post/:id/like',(req,res) => {

})

app.listen(5000, () => {
    console.log('server working')
})