var express = require('express')
const database = require('../db')
var router = express.Router()

router.get('/', async (req, res) => {

    try {

        let collection = (await database).collection('Posts')
        let posts = await collection.find().toArray()

    } catch (error) {

        res.status(400)
        return res.json({ 'Error': error })
    }


    res.status(200)
    return res.json({ 'posts': posts })
})

router.post('/', async (req, res) => {

    try {

        let collection = (await database).collection('Posts')
        let result = await collection.insertOne({ ...req.body, like_count: 0, likes: [] })

    } catch (error) {

        res.status(400)
        return res.json({ 'Error': error })
    }

    res.status(200)
    return res.json({ 'result': result })

})

router.get('/:id', async (req, res) => {

    const id = req.params.id

    try {
        // let collection = (await database).collection('Posts')
        // let result = await collection.findOne({'_id':id})

    } catch (error) {
        res.status(400)
        return res.json({ 'Error': error })
    }

    res.status(200)

    return res.json({ 'id recieved': id })

})

router.post('/:id/like', async (req, res) => {
    const id = req.params.id

    try {

        let collection = (await database).collection('Posts')
        let update = await collection.findOneAndUpdate({ '_id': id }, { '$inc': { 'like_count': 1 } }, { new: true })

    } catch (error) {

        res.status(400)
        return res.json({ 'Error': error })
    }

    res.status(200)

    return res.json({ 'id recieved': id })
})

module.exports = router