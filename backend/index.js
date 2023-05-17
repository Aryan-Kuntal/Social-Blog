const express = require('express')
const database = require('./db.js') 
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser')

var postRoutes = require('./endpoints/posts.js')
var commentsRoutes = require('./endpoints/posts.js')

const app = express()
const port = 5000
app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/posts/',postRoutes)
app.use('/api/comments',commentsRoutes)

app.get('/:id',(req,res) => {
    const id = req.params.id

    // let collection = (await database).collection('Posts')
    // let result = await collection.findOne({'_id':id})

    res.status(200)
    
    return res.json({'id recieved':id})
})
 

// app.get('/api/posts/',async (req,res) => {
//     let collection = (await database).collection('Posts')
//     let posts = await collection.find().toArray()
    
//     res.status(200)
//     return res.json({'posts':posts})
// })

// app.post('/api/posts/', async (req,res) => {
    
//     let collection = (await database).collection('Posts')
//     let result = await collection.insertOne({...req.body,like_count:0,likes:[]})

//     res.status(200)
//     return res.json({'result':result})

// })

// app.get('/api/post/:id', async(req,res) => {
    
//     const id = req.params.id

//     // let collection = (await database).collection('Posts')
//     // let result = await collection.findOne({'_id':id})

//     res.status(200)
    
//     return res.json({'id recieved':id})

// })


app.listen(5000, () => {
    console.log('server working')
})