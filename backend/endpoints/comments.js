var express = require('express')
var router = express.Router()

app.get('/:id',(req,res) => {
    const id = req.params.id

    // let collection = (await database).collection('Posts')
    // let result = await collection.findOne({'_id':id})

    res.status(200)
    
    return res.json({'id recieved':id})
})

app.post('/:id',(req,res) => {

})

module.exports = router